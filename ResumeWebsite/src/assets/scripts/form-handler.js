// Track when the form is loaded
const formLoadTime = Date.now();

document.getElementById('email-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries()); // Convert FormData to JSON

  // Honeypot Check
  if (data.honeypot) {
    console.warn('Spam detected: Honeypot field filled.');
    alert('Submission failed. Please try again.');
    return;
  }

  // Time-Based Check
  const submissionTime = Date.now();
  const timeElapsed = (submissionTime - formLoadTime) / 1000; // Time in seconds
  if (timeElapsed < 1.1) {
    console.warn('Spam detected: Form submitted too quickly.');
    alert('Submission failed. Please try again.');
    return;
  }

  try {
    // Fetch the user's location using a geolocation API
    const geoResponse = await fetch('https://ipapi.co/json/'); // Replace with your preferred geolocation API
    const geoData = await geoResponse.json();

    // Extract additional information
    const userCity = geoData.city || 'Unknown';
    const userRegion = geoData.region || 'Unknown';
    const userCountry = geoData.country_name || 'Unknown';
    const userPostal = geoData.postal || 'Unknown';
    const userOrg = geoData.org || 'Unknown';

    console.log(`Geolocation Info:
            City: ${userCity}
            Region: ${userRegion}
            Country: ${userCountry}
            Postal Code: ${userPostal}
            Organization: ${userOrg}`);

    // Wrap up data in a nice little box, with some obfuscation to conceal the webhook URL
    // This is a simple example of scrambling the URL. If screwing this up cost money, you might want to use a more secure method.
    // Really all this prevents is web crawlers from scraping the URL, not malicous actors from finding it anyway.
    const scramble1 = 'hp/io.mpwhk1475241Pr4Cn7ib8MVJ1r7E3Tm3NqM';
    const scramble2 = 'ts/src/ieos364498/TGlEdXFJ2krxhC-y5Cn_4R';
    const scramble3 = 't:dcdoa/bo/687227fuxkpZd1U3r0R-rinTZcCJX';

    const discordWebhookUrl = undoScramble(scramble1, scramble2, scramble3);

    const discordPayload = {
      content: `New email submission: ${data.email}
      City: ${userCity}
      Region: ${userRegion}
      Country: ${userCountry}
      Postal Code: ${userPostal}
      Organization: ${userOrg}`
    };
    // Send data to the Discord webhook
    const discordResponse = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(discordPayload)
    });

    if (!discordResponse.ok) {
      throw new Error('Failed to send data to Discord webhook');
    }

    // Show the PDF to the user
    window.location.href = "/assets/pdf/Grady Conwell_Resume_2025_07.pdf";

  } catch (error) {
    console.error('Error occurred:', error);
    alert('There was an error, please try again.');
  }
});

function undoScramble(scramble1, scramble2, scramble3) {
  let originalUrl = '';
  const maxLength = Math.max(scramble1.length, scramble2.length, scramble3.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < scramble1.length) originalUrl += scramble1[i];
    if (i < scramble2.length) originalUrl += scramble2[i];
    if (i < scramble3.length) originalUrl += scramble3[i];
  }

  return originalUrl;
}
