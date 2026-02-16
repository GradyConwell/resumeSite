// Track when the form is loaded
const formLoadTime = Date.now();

document.getElementById('email-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the default form submission
  console.log('Form submission started at:', new Date().toISOString());

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries()); // Convert FormData to JSON
  console.log('Form data collected:', { email: data.email, honeypotPresent: !!data.honeypot });

  // Honeypot Check
  if (data.honeypot) {
    console.warn('Spam detected: Honeypot field filled.');
    console.warn('Honeypot value:', data.honeypot);
    alert('Submission failed. Please try again.');
    return;
  }
  console.log('Honeypot check passed');

  // Time-Based Check
  const submissionTime = Date.now();
  const timeElapsed = (submissionTime - formLoadTime) / 1000; // Time in seconds
  console.log(`Time elapsed since page load: ${timeElapsed.toFixed(2)} seconds`);
  if (timeElapsed < 1.1) {
    console.warn('Spam detected: Form submitted too quickly.');
    console.warn(`Required: 1.1s, Actual: ${timeElapsed.toFixed(2)}s`);
    alert('Submission failed. Please try again.');
    return;
  }
  console.log('Time-based check passed');

  try {
    // Fetch the user's location using multiple geolocation APIs with fallback
    console.log('Fetching geolocation data...');
    
    let geoData = null;
    let userCity = 'Unknown';
    let userRegion = 'Unknown';
    let userCountry = 'Unknown';
    let userPostal = 'Unknown';
    let userOrg = 'Unknown';
    
    // Try multiple services in order
    const geoServices = [
      {
        name: 'ipapi.co',
        url: 'https://ipapi.co/json/',
        parse: (data) => ({
          city: data.city,
          region: data.region,
          country: data.country_name,
          postal: data.postal,
          org: data.org
        })
      },
      {
        name: 'ip-api.com',
        url: 'http://ip-api.com/json/',
        parse: (data) => ({
          city: data.city,
          region: data.regionName,
          country: data.country,
          postal: data.zip,
          org: data.isp
        })
      }
    ];
    
    for (const service of geoServices) {
      try {
        console.log(`Trying geolocation service: ${service.name}`);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        const geoResponse = await fetch(service.url, {
          signal: controller.signal,
          mode: 'cors'
        });
        clearTimeout(timeoutId);
        
        console.log(`${service.name} response status:`, geoResponse.status, geoResponse.statusText);
        
        if (!geoResponse.ok) {
          console.warn(`${service.name} returned error status:`, geoResponse.status);
          continue; // Try next service
        }
        
        const data = await geoResponse.json();
        console.log(`${service.name} data received:`, data);
        
        const parsed = service.parse(data);
        userCity = parsed.city || 'Unknown';
        userRegion = parsed.region || 'Unknown';
        userCountry = parsed.country || 'Unknown';
        userPostal = parsed.postal || 'Unknown';
        userOrg = parsed.org || 'Unknown';
        
        geoData = parsed;
        console.log(`Successfully retrieved geolocation from ${service.name}`);
        break; // Success, exit loop
        
      } catch (serviceError) {
        console.warn(`${service.name} failed:`, serviceError.message);
        // Continue to next service
      }
    }
    
    if (!geoData) {
      console.warn('All geolocation services failed, using default values');
    }

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
    console.log('Discord webhook URL prepared (length:', discordWebhookUrl.length, ')');

    const discordPayload = {
      content: `New email submission: ${data.email}
      City: ${userCity}
      Region: ${userRegion}
      Country: ${userCountry}
      Postal Code: ${userPostal}
      Organization: ${userOrg}`
    };
    console.log('Discord payload prepared:', discordPayload);
    
    // Send data to the Discord webhook
    console.log('Sending data to Discord webhook...');
    const discordResponse = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(discordPayload)
    });

    console.log('Discord webhook response status:', discordResponse.status, discordResponse.statusText);

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      console.error('Discord webhook error response:', errorText);
      throw new Error(`Failed to send data to Discord webhook: ${discordResponse.status} - ${errorText}`);
    }

    console.log('Discord webhook sent successfully');
    console.log('Opening resume PDF...');
    
    // Show the PDF to the user - URL encode the path for Chrome compatibility
    const resumeUrl = "/assets/pdf/Grady_Conwell_Resume_Feb_2026_A_r2.pdf";
    console.log('Resume URL:', resumeUrl);
    
    // Try to open in a new tab first (works better in Chrome)
    const newTab = window.open(resumeUrl, '_blank');
    
    // Fallback to current window if popup was blocked
    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
      console.log('New tab blocked, redirecting in current window');
      window.location.href = resumeUrl;
    } else {
      console.log('PDF opened in new tab');
    }

  } catch (error) {
    console.error('Error occurred during form submission');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Full error object:', error);
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
