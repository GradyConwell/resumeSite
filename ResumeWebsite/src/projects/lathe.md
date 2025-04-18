---
title: "Compact CNC Lathe"
description: "WIP gang tool lathe designed for small parts"
image: "/assets/images/lathe_wip_control_cabinet.png"
permalink: "/projects/lathe/"
layout: "projectLayout.html"
priority: 1
---

# Compact CNC Lathe

In 2023, I began selling mechanical pencil components, each one meticulously manually machined. I quickly began to struggle to keep up with demand. As I made my first hundred sales, it became increasingly evident that automation would enable me to increase productivity and, consequently, volume. After researching my options thoroughly and receiving quotes from several job shops, I decided that the best course of action would be to construct a **purpose-built lathe**.

## Planning
My design had to work around several key constraints. The new lathe would have to: 
* Operate on a standard 120v outlet, and draw no more than 2.4kW.
* Fit through a standard 30" door.
* Easily fit in a small SUV. 
* Safely contain coolant, chips and (some) noise. 

In addition to the stringent constraints, the lathe would also require sufficient tooling to turn my pencil components. Having manually machined over three hundred components, I understood that the new lathe must possess: 
* A threading tool
* A turning and grooving tool
* 2 twist drills

Based on my tooling requirements, I opted to design a machine equipped with a gang tool system, where multiple turning tools are arranged side by side on a T-slot plate. Consequently, the X axis, or cross slide of the lathe, would require a considerable travel distance to provide adequate clearance for each tool.

## Initial Design

The availability and price of components significantly influenced the design of the new lathe. I prioritized securing the most expensive and challenging-to-obtain components first. By “locking in” key components, I would save time and money, but sacrifice design flexibility.

Most notable among the early acquisitions were: 
- A heavily modified mini lathe spindle with a pair of appropriate angular contact bearings.  
- An 80mm wide ballscrew actuator, with two large bearing blocks, and a ⌀20mm ballscrew. 
- A 0.7kW servo motor to drive the spindle. 
- A three-inch square aluminum extrusion to serve as the machine base.

<figure>
    <img src="/assets/images/lathe_first_assembled_z_axis.jpeg" alt="A long aluminum frame with a black slide bolted to the top" title="Z Axis">
    <figcaption class="caption"> Several of the "locked in" components are visible in this image. </figcaption>
</figure>

Working around these components, I designed a frame and motion system. For surfaces that I knew required relatively flat surfaces, I opted for an aluminum tooling plate, which is inexpensive and readily available. I also employed laser cut mild steel where tolerances where less critical. 

## Initial Fabrication 

During the first few months of 2024, I gradually machined, assembled, and tested the frame. Once the frame was securely bolted together for the first time, I partially disassembled it and filled the large hollow sections of the aluminum framing with epoxy granite. The epoxy granite is designed to dampen vibrations and stiffen the frame.

My epoxy granite recipe, admittedly amateur, was based on industry best practices. The final mixture consisted of 80% granite by weight and 20% epoxy. For the granite, I used a combination of coarse granite pebbles and DG. Although sifting, washing, and drying the granite was time-consuming, the casting process itself was quick and straightforward. 

At this stage of the project, the scope getting out of control. Recognizing this, I deliberately set aside the enclosure design until I had an operational machine to test. 

## Moving Forward

This project is still ongoing as of April 2025. Here’s a breakdown of what’s been completed, what’s currently being worked on, and what’s next:

| **Complete**         | **Ongoing**                  | **Planned**                   |
|-----------------------|------------------------------|--------------------------------|
| Machine Base          | Gang Tool System             | Enclosure Design              |
| Motion System         | Rotary Encoder for Spindle   | Coolant System                |
| Control Cabinet       | Limit Switches for all Axes  | Final Assembly and Testing    |

<img src="/assets/images/lathe_standing_on_cross_slide.jpeg" alt="Picture of Grady standing on one foot atop the prototype lathe cross slide." title="Standing on Cross Slide">

<img src="/assets/images/lathe_wip_cross_slide.png" alt="A partially assembled lathe cross slide" title="WIP Cross Slide">

<img src="/assets/images/lathe_wip_control_cabinet.png" alt="Several electronic components wired together atop a metal panel" title="Control Cabinet Demo Assembly">

