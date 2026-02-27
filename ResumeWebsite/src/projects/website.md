---
title: "Portfolio Website"
description: "Pretty meta right?"
image: "/assets/images/website_thumb3.png"
permalink: "/projects/meta/"
layout: "projectLayout.html"
priority: 2
category: "Software"
---

# Portfolio Website

While this project is undoubtedly still ongoing, I am quite proud of some of the tricks I employed to create a modular, simple, and most importantly, not hideous website. 

## A Quick Overview

I’m using the static site generator Eleventy, which enables me to template a significant portion of the tedious code, allowing me to concentrate on adding content (like this!). 

For example, each project page is a simple markdown file which is automatically transformed into it's own page and corresponding card using a template. All I have to do in order to add another page is create a new file, and specify a handful of parameters that power the templating. 

<div style="display: flex; justify-content: center; margin: 20px 0;">
    <div style="text-align: left; max-width: 100%; overflow-x: auto;">
        <pre style="white-space: pre-wrap; word-wrap: break-word; overflow-x: auto;">
---
title: "AnkleBiter (2023)"
description: "FIRST Competition Robot"
image: "assets/images/robot_sliceRobotnobacklight.png"
permalink: "/projects/anklebiter/"
layout: "projectLayout.html"
priority: 2
category: "Software"
---
        </pre>
        <em>An example of the header for each project file.</em>
    </div>
</div>

In addition to my modular project pages and their accompanying cards, I am also proud of my user-friendly resume download button. The website will offer users a copy of my generic resume in exchange for their email address.

After the user submits their email, the function executes several actions before displaying my resume:

1. It ensures that the ‘user’ didn’t fill out the honeypot form field.

2. It verifies that the form wasn’t submitted within a second.

3. The user’s email and basic IP address information is successfully received by a Discord webhook (which I selected for data collection because it is free!). 

<div style="display: flex; justify-content: center; margin: 20px 0;">
    <div style="text-align: left; max-width: 100%; overflow-x: auto;">
        <pre style="white-space: pre-wrap; word-wrap: break-word; overflow-x: auto;">
const discordWebhookUrl = '...'; 
// The 'real' webhook is obfuscated in the code, and put back together when neededq
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
        </pre>
        <em>An excerpt from the form handling function.</em>
    </div>
</div>
