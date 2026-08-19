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