document.getElementById("email-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const messageDiv = document.getElementById("message");
    const email = emailInput.value.trim();

    if (!email || !email.includes("@") || !email.includes(".")) {
        messageDiv.innerText = "Please enter a valid email address.";
        return;
    }

    // Email should be submitted through netlify, but, for now, we'll just log it.
    console.log("Submitting email:", email);
    messageDiv.innerText = "Success! Download my resume below.";
        setTimeout(() => {
            window.location.href = "assets/pdf/Grady_Conwell_Resume_2025_03.pdf";
        }, 1000);
});
