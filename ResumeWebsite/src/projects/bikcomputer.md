---
title: "GPS Bike Computer"
description: "I will finish it eventually"
image: "/assets/images/bikeComEarlyDemo.jpeg"
permalink: "/projects/bikecomputer/"
layout: "projectLayout.html"
priority: 2
category: "Software"
---

# GPS Bike Computer
Last updated 2026-04-17

## July 2025: Where it started
I spent the summer of 2025 cycling around the Bay Area on a pair of bikes. It was a fun, low-stakes adventure that allowed me to explore the area. Racking up 60 to 70 miles a day, I wanted a simple odometer and perhaps a GPS device that could map out my route. All of the off-the-shelf bike computers are fancy little fitness tools that track power, speed, blah blah blah. I don't need more robots tracking my every move, that's what my smartwatch already does. 

So, I figured I'd get some time with the ESP32 ecosystem, build my own—that does exactly what I want, and precisely nothing more.

## April 2026

<img src="/assets/images/bikeComEarlyDemo.jpeg" alt="Two COTS circuit boards lying on a piece of bubble wrap." title="on the bubblewrap." loading="lazy"> 

I recently learned that my original codebase was trashing my GPS speedometer results by repeatedly failing to interpret GPS data because I was handling tasks in a really dumb way. Scooting on over to FreeRTOS and having GPS parsing be its own little routine almost entirely eliminated all the issues I was having with the GPS module. The speedometer is spot on, with a very reasonable 2-second lag. 

As it stands, the computer now logs GPS coordinates every 20 seconds and then plots a little trace of the path taken against a blank black background. I can collect the coordinates as a GPX file over Wi-Fi and then do whatever I want with them. The odometer also works—at the very least, it agrees with my car.

Next steps are to design an enclosure, get deep sleep working on the ESP32-S3 Mini, and stick the thing to my bike. 

For now, the computer lives in a plastic box on my desk. I get the privilege of looking at it every day and thinking about how I want to avoid solving its problems. Sometimes, I even pack it up in my suitcase so that I can procrastinate in another zip code.

In the meantime, I've gotten marginally better with the ESP32 ecosystem through a handful of other projects, notable for being finished.

## August 2026

I think I've just about wrapped up the firmware / software side of things. GPS data collection is reliable (at least, with a little filtering to trash obviously bad data—too far away, impossibly fast, et cetera).

I've taken it with me on a few rides at this point, letting it bounce around in my frame bag. So far, in the 190 odd miles of actual use its' odometer has racked up, I've encountered no issues. 

So that leaves the project in a weird state: More or less complete electronics, usable firmware, and a prototype enclosure. The prototype enclosure sucks, and deserves a thorough redesign effort at some point in the near future. I'll write up something when I eventually get around to it. 


