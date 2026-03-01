---
title: "Unnamed Desktop Calculator"
description: "Bringing the power of Python to a familiar calculator interface."
image: "/assets/images/myCASdemoShot.png"
permalink: "/projects/calculator/"
layout: "projectLayout.html"
priority: 2
category: "Software"
---

# Unnamed Desktop Calculator

## Where it started
This project was a bit unexpected. I initially set out to build a LaTeX parser—something quick and dirty that would translate my messy, plain-text math into clean, beautiful LaTeX. Inadvertently, I was becoming more familiar with SymPy around the same time. It struck me that if I glued my LaTeX parser to a SymPy backend, I’d be left with a pretty compelling calculator application.

Every application I've developed previously has been built almost exclusively in JavaScript and HTML. Stitching together my Python and Swift skills was a challenge, but I've been careful to follow best practices and keep the architecture modular.

## Overview

The application is split into four distinct parts: a SwiftUI frontend, a backend parser, a backend solver, and the wonderful MathJax library to render the LaTeX. In its current state, it's become my absolute favorite way to handle symbolic math and day-to-day calculations—easily giving my handheld CAS a run for its money when I'm at my desk.

A few of my friends are currently testing demo builds, and I am continuing to expand the toolset as I use the calculator for classwork, homework, and everything in between.

<figure>
<img src="/assets/images/myCASdemoShot.png" alt="Example of calculation being performed in the calculator." title="Screenshot" loading="lazy">
<figcaption class="caption"> An example workflow: defining variables, and evaluating a definite integral.</figcaption>
</figure>

<figure>
<img src="/assets/images/Screenshot 2026-03-01 at 1.02.33 PM.png" alt="Close-up of the UI" title="Screenshot" loading="lazy">
<figcaption class="caption">Hovering over the output reveals the buttons to save a rendered image, copy the uncompiled LaTeX, or paste the result into the input box.</figcaption>
</figure>

<figure>
<img src="/assets/images/Screenshot 2026-03-01 at 12.59.20 PM.png" alt="Reference Manual" title="Screenshot" loading="lazy">
<figcaption class="caption">The built-in reference documents every tool, and includes examples.</figcaption>
</figure>
