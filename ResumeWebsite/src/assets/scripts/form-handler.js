document.getElementById('email-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const form = event.target;
  
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); // Convert FormData to JSON

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Notably, not converting to JSON here does not work. This is important
        },
        body: JSON.stringify(data)
      });
  
      // Show the PDF to the user   
      window.location.href = "assets/pdf/Grady_Conwell_Resume_2025_03.pdf";  
  
    } catch (error) {
      alert('There was an error, please try again.');
      console.error(error);
    }
  });
  