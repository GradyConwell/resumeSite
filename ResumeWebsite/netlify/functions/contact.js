// Netlify serverless function to handle Contact Me gate
const FALLBACK_DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1364687475422924871/fPTurGx4lkCEpndZ7XdiF1bJU823MkrVr0JxR1h-rCr7-iEyn35TTCZmnc3_CN4JqRXM";

exports.handler = async function (event) {
  // Only accept POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { email, honeypot, elapsed } = data;

    // Honeypot check
    if (honeypot) {
      console.warn("Spam detected: Honeypot field filled.");
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Submission rejected" }),
      };
    }

    // Bot timing check (minimum 1 second)
    if (elapsed && elapsed < 1.0) {
      console.warn("Spam detected: Submitted too quickly (< 1.0s).");
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Submission rejected" }),
      };
    }

    // Email validation
    if (!email || !email.includes("@")) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Valid email required" }),
      };
    }

    // Parse Netlify geo metadata if available
    let geoCity = "Unknown";
    let geoRegion = "Unknown";
    let geoCountry = "Unknown";

    const rawGeo = event.headers["x-nf-geo"];
    if (rawGeo) {
      try {
        const parsed = JSON.parse(rawGeo);
        geoCity = parsed.city || geoCity;
        geoRegion = parsed.subdivision?.name || parsed.subdivision?.code || geoRegion;
        geoCountry = parsed.country?.name || parsed.country?.code || geoCountry;
      } catch (e) {
        // Ignored
      }
    } else if (event.headers["x-country"]) {
      geoCountry = event.headers["x-country"];
    }

    // Discord Webhook Notification
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL || FALLBACK_DISCORD_WEBHOOK;
    if (webhookUrl) {
      try {
        const payload = {
          content: `📬 **New Contact Request on Portfolio**\n**Email:** \`${email}\`\n**Location:** ${geoCity}, ${geoRegion}, ${geoCountry}\n**Time:** ${new Date().toISOString()}`
        };

        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (webhookErr) {
        console.error("Failed to post to Discord webhook:", webhookErr);
      }
    }

    // Return contact info
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        contact: {
          email: process.env.CONTACT_EMAIL || "gradyconwell@icloud.com",
          linkedin: process.env.CONTACT_LINKEDIN || "https://www.linkedin.com/in/gradyconwell"
        }
      })
    };

  } catch (err) {
    console.error("Error in contact function:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
