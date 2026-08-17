---
title: "AnkleBiter (2023)"
description: "FIRST Competition Robot"
image: "/assets/images/swerve.jpeg"
permalink: "/projects/anklebiter/"
layout: "projectLayout.html"
priority: 2
category: "Robotics"
---

# AnkleBiter (2023)

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
<iframe src="https://icloud11636.autodesk360.com/shares/public/SH35dfcQT936092f0e43955c17b2f02d9e36?mode=embed" frameborder="0" allowfullscreen loading="lazy" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

<img src="/assets/images/swerve2.jpeg" alt="portraitofSwerveDrives" title="portraitofSwerveDrives" loading="lazy">

## Summary 

The AnkleBiter robot was built for the 2023-24 FIRST Tech Challenge competition season, a high school robotics competition. In my role as a hardware lead, I delegated tasks, and designed parts for the robot. 

My team captain directed me to design a novel swerve-type drivetrain system, where each wheel is indepedent, and capable of infinite steering. To accomplish this, I worked closely with Josh Sugino, our software lead, to design the motion control system required to operate a differential swerve drivetrain. It took several months of constant iteration to create the two competition ready swerve drive modules.

While exciting, time consuming, and award-winning, the swerve drivetrain didn't end up being the most important element of AnkleBiter. Instead, the powerful arm affixed to the front was what actually won matches.

## AnkleBiter Lifter

AnkleBiter's success was derived from its' versatile and efficient lifting mechanism, designed to manipulate cones. The primary goals for the lifter were high stiffness, minimal reliance on complex linear motion components, low cost, and the use of easily sourced or fabricated parts.

My initial approach explored a linkage system inspired by desk lamps. However, I encountered issues with a "dead-zone" due to overextension and backlash, leading to a switch to a direct drive system.

The final iteration utilized three motors for speed and power: two at the base (shoulder) with high gearing and one faster motor at the elbow. To maintain consistent claw orientation, a servo-driven "wrist" (C stage) was implemented. Notably, the elbow joint incorporated 3D-printed gears made from ABS and Nylon, where I combated the anisotropic properties of FDM 3D prints with special curved teeth. 

For cone manipulation, I created Pinchy. This entirely 3D-printed, modular claw required no custom metal components, relying on COTS bearings, and M3 fasteners. Pinchy offered good grip, low cost, and ideal geometry with special tapered grippers.

Keynote features of the AnkleBiter lifter included:

* 19mm Square Aluminum Extrusion (16 gauge) Construction
    * Lightweight and easily worked by hand. 
    
* Stowage
    * The 2+1 joint design allowed for significant reach while also enabling the arm to fold neatly within the robot's 18" starting cube–which can be seen in the interactive CAD model above.

