---
title: "Microjet Research"
description: "Tangent to CSUC Capstone Project"
image: "/assets/images/microjet/sebulbaFast.png"
permalink: "/projects/slac/"
layout: "projectLayout.html"
priority: 1
category: "Research"
projectDate: "2026"
math: true
---

# Microjet Research
## 

For my undergraduate capstone project, I am part of a team of four students engineering a sample delivery system for the [Macromolecular Femtosecond Crystallography (MFX) instrument](https://lcls.slac.stanford.edu/instruments/mfx) at SLAC National Accelerator Laboratory. We've decided to focus on studying how acoustic forcing in air can enhance microjet breakup and refine droplet stream characteristics. 

## What is a microjet? 
Microjets are very thin streams of liquid, typically a few tens of microns in diameter. By perturbing the nozzle with an actuator, we can control how the jet breaks up into droplets, and trigger breakup at fairly predicatble locations down the length of the jet. 

## What is acoustic forcing?
Acoustic forcing, in this context, involves using a transducer to generate ultrasonic sound waves that perturb the microjet. These sound waves apply restoring forces to specific locations, which helps control the breakup of the microjet and refine the droplet velocity.  This is similar to the styrofoam bead levitators you might have seen before.

## Simulation
These small droplet streams are, as one might expect, governened by the navier-stokes equations. We could solve these equations with traditional CFD software, but this is annoying and time consuming. 

Thankfully, there exists a [1D "lubrication approximation"](https://arxiv.org/abs/1011.0320) that has been empirically verified against droplet streams of similar sizes to those required for MFX. 

The partial differential equations of this model are:

<div class="math">
$$\frac{\partial v}{\partial t} + v v' = -\frac{\gamma}{\rho_\ell} C' + \frac{3\mu}{\rho_\ell} \frac{\left(h^2 v'\right)'}{h^2}$$
$$C = \frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{h\sqrt{1 + h'^2}} - \frac{h''}{\left(1 + h'^2\right)^{3/2}}$$
$$\frac{\partial h^2}{\partial t} + \left(v h^2\right)' = 0$$
</div>

where *h(z, t)* is the jet radius, *v(z, t)* is the axial velocity, *C* is the interface curvature, and a prime is a derivative along the jet axis *z*. The first equation is momentum (inertia balanced against surface tension and viscosity), and the last is conservation of mass.

The jet starts as a hemispherical cap on the nozzle, and the nozzle radius is perturbed very slightly at the fastest growing Rayleigh wavelength to kick off breakup. The nozzle velocity is modulated with it to keep the flow rate constant:

<div class="math">
$$h(z, 0) = \sqrt{h_0^2 - z^2}$$
$$h_\text{nozzle}(t) = h_0 + \delta \sin(2\pi f t), \qquad v_\text{nozzle}(t) = \frac{h_0^2\, v_\text{jet}}{h_\text{nozzle}^2}$$
$$f = \frac{v_\text{jet}}{\lambda_\text{opt}}, \qquad \lambda_\text{opt} = 2\sqrt{2}\,\pi h_0, \qquad \delta / h_0 \approx 0.005$$
</div>

A drop pinches off when the thinnest neck of the jet drops below 100 nm, and two objects coalesce when they come within 0.005 *h*<sub>0</sub> of each other.

And the dimensionless parameters are:

<div class="math">
$$\mathrm{We} = \frac{\rho_\ell\, r\, v^2}{\gamma} > 4, \qquad \mathrm{We}_g = \frac{\rho_g}{\rho_\ell}\,\mathrm{We} < 0.2$$
$$\mathrm{Oh} = \frac{\mu}{\sqrt{\gamma\, \rho_\ell\, r}}, \qquad \mathrm{Re} = \frac{\rho_\ell\, v\, r}{\mu} = \frac{\sqrt{\mathrm{We}}}{\mathrm{Oh}}, \qquad \tau_c = \sqrt{\frac{\rho_\ell\, r^3}{\gamma}}$$
</div>

The Weber number (We) compares inertia to surface tension. The gas Weber number (We<sub>g</sub>) does the same for the surrounding air. The Ohnesorge number (Oh) compares viscosity to inertia and surface tension, and the capillary time (*τ<sub>c</sub>*) is the natural timescale of the breakup.


I opted to implement the solver in C++ using the incredibly fast [Heyoka ODE library](https://bluescarni.github.io/heyoka/), which, as far as I can tell, is the best in class for solving systems of ODEs with event detection. This was a happy accident, considering that I chose it solely because C++ is the language I am most familiar with, and it was the first ODE solver that I came across. 

<figure>
    <img src="/assets/images/microJet/sebulbaFast.png" alt="sebulbaFast" title="sebulbaFast" loading="lazy"> 
    <figcaption class="caption">Now this is podracing!</figcaption>
</figure>

I initially wrote a really elegant solver that didn't include non-dimensionalization, which amounted to less than 100 lines of C++, but barely worked, and would quickly diverge for most inputs. Lesson learned I guess, non-dimensionalization is important.

The current solver measures lengths in *h*<sub>0</sub>, time in *τ<sub>c</sub>*, and velocity in *h*<sub>0</sub>/*τ<sub>c</sub>*, and works with the squared radius *a* = *h*<sup>2</sup>, which keeps the equations well behaved at the rounded tip of the jet where *h* → 0. Written so that mass and momentum are conserved exactly, the equations become:

<div class="math">
$$\frac{\partial a}{\partial t} + \left(a v\right)' = 0$$
$$\frac{\partial (a v)}{\partial t} + \left(a v^2\right)' = G' + 3\,\mathrm{Oh}\left(a v'\right)'$$
$$G = \frac{a^2 \left(1 + \tfrac{1}{2} a''\right)}{\left(a + \tfrac{1}{4} a'^2\right)^{3/2}} = \frac{h}{\sqrt{1 + h'^2}} + \frac{h^2 h''}{\left(1 + h'^2\right)^{3/2}}$$
</div>

where *G* is the surface tension pulling on a cross-section of the jet (it satisfies *G*′ = −*h*<sup>2</sup>*C*′). The nozzle becomes *h* = 1 + *δ* sin(*ωt*) and *v* = *U* / *h*<sup>2</sup>, with *U* = √We and *ω* = *U* / √2. The jet is split into 1000 cells that stretch evenly from the nozzle to the tip, and the tip moves with the liquid, so the jet length obeys d*L*/d*t* = *v*<sub>tip</sub>.

I am now iterating on a proper solver, and the preliminary results so far are pretty promising. I got bold enough to even add in the acoustic forcing terms, and while I'm maybe 50/50 on whether the acoustic forcing model is even physically accurate, the underlying simulation pretty convincingly reproduces the [experimental results described in literature](https://arxiv.org/abs/1011.0320).

The acoustic model is a standing wave in the air along the jet axis, with pressure nodes half an acoustic wavelength apart that slide along with the drops. The acoustic period (about 1 µs) is short compared to the capillary time (about 10 µs), so only the time-averaged radiation forces are kept:

<div class="math">
$$E = \frac{p_A^2}{4 \rho_g c_g^2}, \qquad k = \frac{\pi}{\Delta}, \qquad f_\text{ac} = \frac{c_g}{2\Delta}, \qquad \xi = z - z_0 - u_p t$$
</div>

where *E* is the acoustic energy density, *p<sub>A</sub>* is the peak acoustic pressure, *ρ<sub>g</sub>* and *c<sub>g</sub>* are the density and speed of sound of the air, *Δ* is the spacing between pressure nodes, *u<sub>p</sub>* is how fast the nodes move, and *ξ* is the distance ahead of a node.

On the jet, the radiation pressure acts across the slender cross-section just like the capillary pressure does, so it *should* add a body acceleration to the momentum equation:

<div class="math">
$$p_\text{rad} = \frac{\langle p_1^2 \rangle}{2 \rho_g c_g^2} - \frac{\rho_g \langle u_1^2 \rangle}{2} = -E \cos(2 k \xi)$$
$$g_\text{jet} = -\frac{1}{\rho_\ell} \frac{\partial p_\text{rad}}{\partial z} = -\frac{2 k E}{\rho_\ell} \sin(2 k \xi)$$
$$\frac{\partial (a v)}{\partial t} + \left(a v^2\right)' = G' + 3\,\mathrm{Oh}\left(a v'\right)' + a\, g_\text{jet}$$
</div>

After pinch-off, each drop feels the Gor'kov force on a small sphere, with a correction that averages the force over the drop's volume (Gor'kov assumes the drop is much smaller than the wavelength, which these drops aren't):

<div class="math">
$$U = V E \left[ f_1 \sin^2(k \xi) - \tfrac{3}{2} f_2 \cos^2(k \xi) \right]$$
$$\frac{d^2 z}{dt^2} = -\frac{3 \Phi k E}{\rho_\ell} \sin(2 k \xi) \cdot \frac{3\, j_1(2 k R)}{2 k R}, \qquad \Phi = \frac{f_1}{3} + \frac{f_2}{2}$$
$$f_1 = 1 - \frac{\rho_g c_g^2}{\rho_\ell c_\ell^2}, \qquad f_2 = \frac{2 (\rho_\ell - \rho_g)}{2 \rho_\ell + \rho_g}$$
</div>

where *R* is the drop radius, *V* is its volume, *Φ* is the acoustic contrast factor, and *j*<sub>1</sub> is the first-order spherical Bessel function (trigonometry). Both accelerations point toward the nearest pressure node, so the nodes act as potential wells that liquid gathers in and drops get trapped in. Air drag isn't modeled, so a trapped drop just oscillates about its node forever.

While I didn't use agentic AI while building my solver, I figured that I should probably get more experience working with Skynet anyway, and had Claude build a rendering tool for the simulation. I drew it a picture on some paper, provided it with the solver's output data, and let it rip. Of course, the rendering tool is written in Python because LLMs love Python. There's an example figure below. Pretty neat, if I do say so myself.  

<figure>
    <img src="/assets/images/microJet/jetProfile_294-329us.png" alt="jetProfile_294-329us" title="jetProfile_294-329us" loading="lazy"> 
    <figcaption class="caption">Early simulation results that closely match literature.</figcaption>
</figure>

