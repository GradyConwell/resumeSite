---
title: "Benchtop CNC Router"
description: "Simple and inexpensive CNC machine for routing aluminum plate"
image: "/assets/images/router_lathe_part_machining.png"
permalink: "/projects/router/"
layout: "projectLayout.html"
priority: 2
category: "Cap"
---

# Benchtop CNC Router

## Background

In late 2021, I became involved with my high school's FIRST (a national student robotics organization) teams. Adult supervision and mentoring were particularly lacking that year, especially given the ongoing pandemic. I participated solely in the (politically) less-favored of the two competition teams at La Cañada High School, which worked on a smaller robot for the "FIRST Tech Challenge" (often abbreviated FTC). 

During the '21–22 season, my team advanced to the SoCal regional championship, much to the dismay of the club's adult mentors, who would've preferred that both students and resources be focused on what was, in their eyes, the far more important FIRST Robotics Competition (FRC). 

<figure>
    <img src="/assets/images/router_chipboardcutouts.jpeg" alt="Chipboard CNC parts" title="Chipboard CNC parts" loading="lazy"> 
    <figcaption class="caption">I built the first version of the router by hand, cutting out chipboard with a Dremel. This configuration barely survived cutting the aluminum plate replacement parts.</figcaption>
</figure>

Relevant to the page's titular project, this meant that in January 2022, I got de facto banned from using the school's aging Shapeoko router, which I had spent the fall teaching myself how to use. This is despite the fact that, in this instance, my team was the one with a competition-winning robot in need of spare parts. I felt burned, and now I had a problem to solve: I wanted to make sheet metal parts. I no longer wanted to rely on the tenuous goodwill of a parent- and student-run extracurricular. 

## Design

So the PRD for my new router was simple: beat the Shapeoko 3 when machining 1/8" to 1/4" aluminum plate stock. 

The lean, budget-friendly design that evolved from that goal was laser-focused. It wouldn't have conventional dust collection, because for aluminum, that really just got in the way. It wouldn't have a precision frame, because the skew-happy Shapeoko certainly didn't have one. No, no, this machine was built directly on top of a solid oak door courtesy of my mother's old office. Working to my advantage was the insane pandemic boom in cheap Chinese mechatronic components.

My design had two cheap rolled ballscrews, which is two more than the Shapeoko. Belts were reserved for the longest (and therefore potentially most expensive) axis. The motors were NEMA 23 bargain units I got from StepperOnline, driven by TMC5160s on a repurposed 3D printer's mainboard. The original spindle was Carbide 3D's cost-down trim router, later replaced with an import ER11 spindle.

I built the original frame from hardware-store chipboard because I was too cheap to spring for Baltic birch plywood. My flexy chipboard disaster's first project was to painfully cut its new frame from 1/4" aluminum plate. 


<figure>
    <img src="/assets/images/routerInBackground.jpeg" alt="CNC parts" title="CNC parts" loading="lazy"> 
    <figcaption class="caption">A lathe project, conveniently photographed with the router in the background. Notice the (if anything) scrappy design choices.</figcaption>
</figure>

## Epilogue

Today, I rarely use my router, mostly because I have access to far better equipment at both work and school. But also because my projects are far more expansive and require more than just basic aluminum sheet cutting. SendCutSend is so ridiculously affordable that it's nonsensical to torture myself by making parts on a router designed by a feisty fifteen-year-old.  

What I really want to do—given unlimited time, money, and space—is to build something like what [Piotr Fox Wysocki](https://www.youtube.com/piotrfoxwysocki) built in their home workshop. The granite surface plate construction gantry mill is, in my estimation, a clever, accessible, and proven architecture for building top-of-the-line "DIY" machines.


<img src="/assets/images/router_lathe_part_machining.png" alt="router machining aluminum panels for the ongoing lathe project" title="SME Eureka Part machining" loading="lazy">

<img src="/assets/images/router_SME_sample_parts.jpeg" alt="Two flat, etched aluminum parts for a SME shop tool project" title="SME finished parts" loading="lazy">

<img src="/assets/images/router_milling_slot.png" alt="Machining a J-slot in brass with a 2mm end mill" title="J-slot Milling" loading="lazy">

<img src="/assets/images/router_penstand.jpeg" alt="Custom Aluminum Stand for four pens" title="Pen Stand" loading="lazy">

<img src="/assets/images/router_tooling_plate.png" alt="Machining 5052 Tooling plate with a 4mm end mill" title="Tooling Plate" loading="lazy">

<img src="/assets/images/router_engraving.jpeg" alt="Machining a pocket ruler from aluminum plate." title="Engraving Aluminum" loading="lazy">