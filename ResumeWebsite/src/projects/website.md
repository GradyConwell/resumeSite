---
title: "Portfolio Website"
description: "Pretty meta right?"
image: "/assets/images/Website/website_thumb3.png"
permalink: "/projects/meta/"
layout: "projectLayout.html"
priority: 2
category: "Mechatronics"
projectDate: "2024–Present"
---

# Portfolio Website

While this project is undoubtedly still ongoing, I am quite proud of some of the tricks I employed to create a modular, simple, and, most importantly, not-hideous website. 

## A Quick Overview

I’m using the static site generator Eleventy, which enables me to template a significant portion of the tedious code, allowing me to concentrate on adding content (like this!). 

For example, each project page is a simple markdown file, which is automatically transformed into its own page and corresponding card using a template. All I have to do in order to add another page is create a new file and specify a handful of parameters that power the templating. 

```yaml
# Example front-matter defining project parameters
title: "AnkleBiter (2023)"
description: "FIRST Competition Robot"
image: "/assets/images/AnkleBiter/swerve.jpeg"
permalink: "/projects/anklebiter/"
layout: "projectLayout.html"
priority: 2
category: "Mechatronics"
```
*An example of the data header powering each project file.*