document.getElementById("email-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const messageDiv = document.getElementById("message");
    const email = emailInput.value.trim();

    if (!email || !email.includes("@") || !email.includes(".")) {
        messageDiv.innerText = "Please enter a valid email address.";
        return;
    }

    try {
        console.log("Submitting email:", email);

        const response = await fetch('https://script.google.com/macros/s/AKfycbzHpXWgRCVld1GSgdcoOCycIx-9GvNzKWy95RV2Zje-ktux5D-ouuzbaQYJxx58UItH4g/exec', {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        console.log("Response status:", response.status);

        // Read the response as text first
        const responseText = await response.text();
        console.log("Raw response text:", responseText);

        // Try to parse JSON
        let responseData;
        try {
            responseData = JSON.parse(responseText);
        } catch {
            throw new Error("Server did not return valid JSON.");
        }

        console.log("Parsed response data:", responseData);

        if (response.ok && responseData.status === "success") {
            messageDiv.innerText = "Success! Download my resume below.";
            setTimeout(() => {
                window.location.href = "assets/pdf/Grady_Conwell_Resume_2025_03.pdf";
            }, 1000);
        } else {
            throw new Error(responseData.message || "Error submitting email.");
        }
    } catch (error) {
        console.error("Error:", error);
        messageDiv.innerText = `Error: ${error.message || "An unexpected error occurred."}`;
    }
});
