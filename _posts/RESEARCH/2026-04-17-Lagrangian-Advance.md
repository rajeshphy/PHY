---
title: Lagrangian Mechanics
date: 2026-04-13 12:00:00 +0530
categories: research
tags:
  - classical-mechanics
  - lagrangian
  - action-principle
permalink: "/lagrangian-mechanics/"
---
Lagrangian mechanics reformulates dynamics in terms of generalized coordinates $q_i(t)$ and a single scalar function $L(q_i,\dot{q}_i,t)$, the Lagrangian. Rather than starting from forces, one derives the equations of motion by demanding that the physical trajectory makes a functional called the action stationary among all nearby paths with the same endpoints.

$$
S[q]=\int_{t_1}^{t_2} L(q_i,\dot{q}_i,t)\,dt
$$

The principle of stationary action is

$$
\delta S=0
$$






## Action Principle and Euler–Lagrange Equations

Consider a variation of the path $q_i(t)\to q_i(t)+\delta q_i(t)$ with fixed endpoints $\delta q_i(t_1)=\delta q_i(t_2)=0$. The first variation of the action is

$$
\delta S=\int_{t_1}^{t_2}\left(\frac{\partial L}{\partial q_i}\delta q_i+\frac{\partial L}{\partial \dot{q}_i}\delta \dot{q}_i\right)dt
$$

Using integration by parts on the term involving $\delta\dot{q}_i$,

$$
\int_{t_1}^{t_2}\frac{\partial L}{\partial \dot{q}_i}\delta \dot{q}_i\,dt
=
\left[\frac{\partial L}{\partial \dot{q}_i}\delta q_i\right]_{t_1}^{t_2}
-
\int_{t_1}^{t_2}\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right)\delta q_i\,dt
$$

The boundary term vanishes because the endpoints are fixed. Therefore,

$$
\delta S=\int_{t_1}^{t_2}\left(\frac{\partial L}{\partial q_i}-\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i}\right)\delta q_i\,dt
$$

Since the variations $\delta q_i(t)$ are otherwise arbitrary, the integrand must vanish, yielding the Euler–Lagrange equations,

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right)-\frac{\partial L}{\partial q_i}=0
$$

These equations replace Newton’s laws in the Lagrangian framework and are valid for any coordinates and any Lagrangian that correctly encodes the dynamics.

<div style="background:#f7fff0; border-left:6px solid #2b6cb0; border-radius:12px; padding:16px 18px; box-shadow:0 10px 22px rgba(0,0,0,0.12); margin:16px 0;">
  <div style="font-size:1.05rem; font-weight:700; letter-spacing:0.2px; margin-bottom:8px;">
    Definition: Hamilton’s Principle
  </div>
  <div style="line-height:1.6;">
    Hamilton’s principle states that, among all possible paths $q_i(t)$ connecting fixed endpoints $q_i(t_1)$ and $q_i(t_2)$, the actual path taken by the system makes the action
  </div>

  <div style="margin:14px 0 10px 0;">
    
$$
S[q]=\int_{t_1}^{t_2} L(q_i,\dot{q}_i,t)\,dt
$$

  </div>

  <div style="line-height:1.6;">
    stationary, i.e.
  </div>

  <div style="margin-top:10px;">
    
$$
\delta S=0
$$

  </div>
</div>


## Structure of Lagrangians and Generalized Momentum

For conservative systems in simple coordinates, a common and useful choice is

$$
L=T-V
$$

where $T$ is kinetic energy and $V$ is potential energy. This form is not fundamental; it is a special case that works when forces derive from a potential and velocity-dependent interactions are absent. In many important systems, $L$ contains mixed velocity terms (e.g. $\dot{x}\dot{y}$) or velocity–position couplings (e.g. $x\dot{y}$), which naturally describe constraints, electromagnetic interactions, and effective descriptions.

A general quadratic Lagrangian that captures many mechanical and field-motivated examples is

$$
L=\frac{1}{2}a_{ij}(q)\dot{q}_i\dot{q}_j+b_i(q)\dot{q}_i-V(q)
$$

In this form:
- $a_{ij}(q)$ acts like a configuration-space metric, allowing kinetic coupling between coordinates.
- $b_i(q)\dot{q}_i$ introduces velocity–position coupling (often called a “gyroscopic” or “magnetic-type” term).
- $V(q)$ is the potential.

The generalized momentum conjugate to $q_i$ is defined by

$$
p_i=\frac{\partial L}{\partial \dot{q}_i}
$$

Unlike Newtonian momentum, $p_i$ can depend on multiple velocities when the kinetic term is coupled. For instance, for $L=\dot{x}\dot{y}$ one finds

$$
p_x=\dot{y},\quad p_y=\dot{x}
$$

showing that the coordinates are dynamically coupled at the level of canonical momenta.

## Worked Examples, Conservation Laws, and Nonstandard Lagrangians

A minimal example illustrating coupled velocities is

$$
L=\dot{x}\dot{y}
$$

Then

$$
\frac{\partial L}{\partial \dot{x}}=\dot{y},\quad \frac{\partial L}{\partial x}=0
$$

so the Euler–Lagrange equation for $x$ gives

$$
\frac{d}{dt}(\dot{y})=0 \Rightarrow \ddot{y}=0
$$

and similarly,

$$
\ddot{x}=0
$$

Velocity–position couplings encode forces without introducing a potential. A standard “magnetic-type” term is

$$
L=\frac{m}{2}(\dot{x}^2+\dot{y}^2)+qB(x\dot{y}-y\dot{x})
$$

which yields Lorentz-force-like equations,

$$
m\ddot{x}=qB\dot{y},\quad m\ddot{y}=-qB\dot{x}
$$

Symmetry principles organize conserved quantities. If $L$ has no explicit time dependence, $\frac{\partial L}{\partial t}=0$, then the energy-like quantity

$$
E=\sum_i \dot{q}_i\frac{\partial L}{\partial \dot{q}_i}-L
$$

is conserved. More generally, invariance of $L$ under a continuous transformation implies a conserved quantity (Noether’s theorem), with key correspondences:
- time translation $\to$ energy conservation,
- spatial translation $\to$ momentum conservation,
- rotation $\to$ angular momentum conservation.

Not every physical system admits a simple $L=T-V$ representation. Examples where nonstandard constructions arise include dissipative systems (often requiring enlarged variable sets), PT-symmetric models, effective theories, and constrained systems. The correct viewpoint is that the Lagrangian is any function that reproduces the correct equations of motion through the Euler–Lagrange equations.

# Exercises

**Q1. Derive the Euler–Lagrange equation for**

$$
L=\frac{1}{2}m\dot{x}^2-V(x)
$$

Solution:

$$
\frac{d}{dt}(m\dot{x})-\left(-V'(x)\right)=0 \Rightarrow m\ddot{x}+V'(x)=0
$$

**Q2. For**

$$
L=\dot{x}\dot{y}
$$

find equations of motion and conserved quantities.

Solution:

$$
\ddot{x}=0,\quad \ddot{y}=0
$$

and

$$
p_x=\dot{y},\quad p_y=\dot{x}
$$

If $L$ has no explicit time dependence, then

$$
E=\dot{x}p_x+\dot{y}p_y-L=\dot{x}\dot{y}
$$

**Q3. Show that**

$$
L=\frac{1}{2}m\dot{x}^2+qA(x)\dot{x}
$$

leads to modified momentum.

Solution:

$$
p=\frac{\partial L}{\partial \dot{x}}=m\dot{x}+qA(x)
$$

**Q4. Derive equations of motion for**

$$
L=\frac{1}{2}(\dot{x}^2+\dot{y}^2)+\alpha x\dot{y}
$$

Solution:

$$
\frac{d}{dt}(\dot{x})-\alpha\dot{y}=0 \Rightarrow \ddot{x}=\alpha\dot{y}
$$

and

$$
\frac{d}{dt}(\dot{y}+\alpha x)=0 \Rightarrow \ddot{y}+\alpha\dot{x}=0
$$

**Q5. Show that adding a total time derivative**

$$
L'=L+\frac{dF}{dt}
$$

does not change the equations of motion.

Solution:

$$
\int_{t_1}^{t_2}\frac{dF}{dt}\,dt=F(t_2)-F(t_1)
$$

so its variation vanishes for fixed endpoints:

$$
\delta\int_{t_1}^{t_2}\frac{dF}{dt}\,dt=0
$$

**Q6. For two coupled oscillators,**

$$
L=\dot{x}\dot{y}-\omega^2xy
$$

find normal modes.

Solution: the equations are

$$
\ddot{x}+\omega^2 y=0,\quad \ddot{y}+\omega^2 x=0
$$

Define

$$
z_1=x+y,\quad z_2=x-y
$$

Then

$$
\ddot{z}_1+\omega^2 z_1=0,\quad \ddot{z}_2-\omega^2 z_2=0
$$

# Additional Problem

We consider a two-degree-of-freedom Lagrangian in coordinates $x(t),y(t)$ with velocity couplings typical of planar systems in a rotating frame. The goal is to (i) write the Euler–Lagrange equations cleanly and (ii) Obtain the solution to the equation of motion of the form $e^{\omega t}(k_1+k_2 t)$ for the homogeneous differential equation it solves.

## Correct Form of the Lagrangian and Notation

To preserve the intended structure (quadratic potential, Coriolis-type coupling, kinetic term, and an $xy$ coupling), we write the Lagrangian as

$$
L=-\frac{\varepsilon}{2}(x^2+y^2)+\omega\left(x\dot y-y\dot x\right)+\dot x\,\dot y-\omega^2xy.
$$

The velocities are

$$
\dot x=\frac{dx}{dt}, \qquad \dot y=\frac{dy}{dt}.
$$

## Euler–Lagrange Equations and the Coupled Dynamics

For the coordinate $x$, the Euler–Lagrange equation is

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot x}\right)-\frac{\partial L}{\partial x}=0.
$$

Compute the derivatives:

$$
\frac{\partial L}{\partial \dot x}=-\omega y+\dot y,
$$

hence

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot x}\right)=-\omega\dot y+\ddot y.
$$

Next,

$$
\frac{\partial L}{\partial x}=-\varepsilon x+\omega\dot y-\omega^2y.
$$

Substituting into Euler–Lagrange gives

$$
\left(-\omega\dot y+\ddot y\right)-\left(-\varepsilon x+\omega\dot y-\omega^2y\right)=0,
$$

so

$$
\ddot y-2\omega\dot y+\omega^2y+\varepsilon x=0.
$$

Similarly, for the coordinate $y$:

$$
\ddot x+2\omega\dot x+\omega^2x+\varepsilon y=0.
$$

Thus, the Lagrangian generates a coupled linear system for $(x,y)$ with constant coefficients; the $\varepsilon$ terms couple the coordinates, while the $\pm 2\omega$ terms represent the velocity coupling.

## Solving the Homogeneous ODE and Interpreting the Result

Solve

$$
\ddot y-2\omega\dot y+\omega^2y=0
$$

by the trial form

$$
y=e^{rt}.
$$

Then

$$
\dot y=re^{rt}, \qquad \ddot y=r^2e^{rt}.
$$

Substitution yields

$$
r^2e^{rt}-2\omega re^{rt}+\omega^2e^{rt}=0.
$$

Since $e^{rt}\neq 0$,

$$
r^2-2\omega r+\omega^2=0,
$$

which factors as

$$
(r-\omega)^2=0.
$$

Therefore the characteristic root is repeated:

$$
r=\omega.
$$

For a double root, the two linearly independent solutions are $e^{\omega t}$ and $t e^{\omega t}$, so the general solution is

$$
y(t)=e^{\omega t}(k_1+k_2 t).
$$

The structural reason for the $t e^{\omega t}$ term is the repeated root of the characteristic polynomial: the second independent solution must be multiplied by $t$ to remain linearly independent of the first.

$$
y(t)=e^{\omega t}(k_1+k_2 t)
$$