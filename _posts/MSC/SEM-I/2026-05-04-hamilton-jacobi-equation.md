---
title: "Hamilton–Jacobi Equation"
summary: "Hamilton-Jacobi equation, principal function, constants of motion, and harmonic oscillator application."
date: 2026-05-04 09:00:00 +0530
categories:
  - notes
  - msc
  - lecture
tags:
  - msc
  - semester-i
  - classical-mechanics
  - hamilton-jacobi
  - action
permalink: /msc/sem-i/hamilton-jacobi-equation/
hidden: true
---

The Hamilton–Jacobi formulation rewrites dynamics in terms of a single function $S$, called Hamilton’s principal function. Instead of solving the equations of motion directly, one solves a first-order partial differential equation for $S$ and then extracts the trajectory from it. This method is powerful because it connects variational mechanics, Hamiltonian mechanics, and the integration of motion in one framework.

## Hamilton’s principal function and the Hamilton–Jacobi equation

For a system with generalized coordinates $q_i$, Hamilton’s principal function is defined as the action evaluated along the true path from a fixed initial point $(q_{i0}, t_0)$ to the final point $(q_i, t)$:

$$
S(q_i,t)=\int_{t_0}^{t} L(q_i,\dot q_i,\tau)\,d\tau
$$

Since the upper endpoint is $(q_i,t)$, $S$ is a function of the endpoint variables. Its differential along the true path is

$$
dS=\sum_i p_i\,dq_i-H\,dt
$$

where

$$
p_i=\frac{\partial L}{\partial \dot q_i}, \qquad H=\sum_i p_i\dot q_i-L
$$

Comparing this with the ordinary differential of $S(q_i,t)$,

$$
dS=\sum_i \frac{\partial S}{\partial q_i}dq_i+\frac{\partial S}{\partial t}dt
$$

we obtain the fundamental relations

$$
\frac{\partial S}{\partial q_i}=p_i, \qquad \frac{\partial S}{\partial t}=-H
$$

Since the Hamiltonian is originally $H(q_i,p_i,t)$, substituting $p_i=\partial S/\partial q_i$ gives

$$
H=H\left(q_i,\frac{\partial S}{\partial q_i},t\right)
$$

Hence the Hamilton–Jacobi equation becomes

$$
\frac{\partial S}{\partial t}+H\left(q_i,\frac{\partial S}{\partial q_i},t\right)=0
$$

This is the Hamilton–Jacobi equation. It replaces Hamilton’s $2n$ first-order equations by one first-order partial differential equation for $S$.

For time-independent Hamiltonians, one usually writes

$$
S(q_i,\alpha_i,t)=W(q_i,\alpha_i)-Et
$$

where $W$ is Hamilton’s characteristic function. Then the Hamilton–Jacobi equation reduces to

$$
H\left(q_i,\frac{\partial W}{\partial q_i}\right)=E
$$

## Origin of the constants $\alpha$ and $\beta$

A complete solution of the Hamilton–Jacobi equation for one degree of freedom contains one arbitrary parameter. Write it as

$$
S(q,\alpha,t)
$$

The constant $\alpha$ enters because the Hamilton–Jacobi equation is a first-order partial differential equation, and its complete integral must contain an arbitrary constant parameter. For time-independent systems, this parameter is usually chosen to be the energy, so $\alpha=E$.

The motion of one degree of freedom is governed by a second-order differential equation, so the final trajectory must contain two independent constants. One of them is already $\alpha$. The second arises from the quantity $\partial S/\partial \alpha$, whose constancy can be proved directly.

Start from the Hamilton–Jacobi equation

$$
\frac{\partial S}{\partial t}+H\left(q,\frac{\partial S}{\partial q},t\right)=0
$$

Differentiate it with respect to $\alpha$:

$$
\frac{\partial^2 S}{\partial t\,\partial \alpha}+\frac{\partial H}{\partial p}\frac{\partial^2 S}{\partial q\,\partial \alpha}=0
$$

because $H$ depends on $\alpha$ only through

$$
p=\frac{\partial S}{\partial q}
$$

Now along the actual motion, Hamilton’s equation gives

$$
\dot q=\frac{\partial H}{\partial p}
$$

Therefore

$$
\frac{\partial^2 S}{\partial t\,\partial \alpha}+\dot q\,\frac{\partial^2 S}{\partial q\,\partial \alpha}=0
$$

But the total derivative of $\partial S/\partial \alpha$ along the motion is

$$
\frac{d}{dt}\left(\frac{\partial S}{\partial \alpha}\right)=\frac{\partial^2 S}{\partial q\,\partial \alpha}\dot q+\frac{\partial^2 S}{\partial t\,\partial \alpha}
$$

Hence

$$
\frac{d}{dt}\left(\frac{\partial S}{\partial \alpha}\right)=0
$$

So $\partial S/\partial \alpha$ is conserved along the orbit. Therefore we set

$$
\frac{\partial S}{\partial \alpha}=\beta
$$

where $\beta$ is the second constant of motion. Thus for one degree of freedom, the two constants are $\alpha$ and $\beta$. In the time-independent case with $\alpha=E$,

$$
\beta=\frac{\partial S}{\partial E}=\frac{\partial W}{\partial E}-t
$$

This relation yields the trajectory.

## Simple harmonic oscillator

Consider the one-dimensional harmonic oscillator with Hamiltonian

$$
H=\frac{p^2}{2m}+\frac{1}{2}m\omega^2 q^2
$$

The Hamilton–Jacobi equation is

$$
\frac{\partial S}{\partial t}+\frac{1}{2m}\left(\frac{\partial S}{\partial q}\right)^2+\frac{1}{2}m\omega^2 q^2=0
$$

Since the Hamiltonian is time-independent, take

$$
S(q,t)=W(q,E)-Et
$$

Then

$$
\frac{\partial S}{\partial t}=-E, \qquad \frac{\partial S}{\partial q}=\frac{dW}{dq}
$$

Substitution gives

$$
\frac{1}{2m}\left(\frac{dW}{dq}\right)^2+\frac{1}{2}m\omega^2 q^2=E
$$

Thus

$$
\left(\frac{dW}{dq}\right)^2=2mE-m^2\omega^2 q^2
$$

and hence

$$
\frac{dW}{dq}=\sqrt{2mE-m^2\omega^2 q^2}
$$

Therefore

$$
W(q,E)=\int \sqrt{2mE-m^2\omega^2 q^2}\,dq
$$

Let

$$
A^2=\frac{2E}{m\omega^2}
$$

Then

$$
\sqrt{2mE-m^2\omega^2 q^2}=m\omega\sqrt{A^2-q^2}
$$

so

$$
W(q,E)=m\omega\int \sqrt{A^2-q^2}\,dq
$$

Using the standard integral,

$$
\int \sqrt{A^2-q^2}\,dq=\frac{1}{2}\left[q\sqrt{A^2-q^2}+A^2\sin^{-1}\left(\frac{q}{A}\right)\right]
$$

we obtain

$$
W(q,E)=\frac{m\omega}{2}\left[q\sqrt{A^2-q^2}+A^2\sin^{-1}\left(\frac{q}{A}\right)\right]
$$

Hence the principal function is

$$
S(q,t)=\frac{m\omega}{2}\left[q\sqrt{A^2-q^2}+A^2\sin^{-1}\left(\frac{q}{A}\right)\right]-Et
$$

Now the second constant is obtained from

$$
\beta=\frac{\partial S}{\partial E}
$$

Since $A^2=2E/(m\omega^2)$, differentiation gives

$$
\beta=\frac{1}{\omega}\sin^{-1}\left(\frac{q}{A}\right)-t
$$

Rearranging,

$$
\sin^{-1}\left(\frac{q}{A}\right)=\omega(t+\beta)
$$

so

$$
\frac{q}{A}=\sin(\omega t+\phi)
$$

where $\phi=\omega\beta$ is a constant phase. Therefore the trajectory is

$$
q(t)=A\sin(\omega t+\phi)
$$

with

$$
A=\sqrt{\frac{2E}{m\omega^2}}
$$

Thus the Hamilton–Jacobi method reproduces the familiar harmonic oscillator motion. The constant $\alpha$ is the energy $E$, and the second constant $\beta$ appears from the conserved quantity $\partial S/\partial \alpha$.

## Main points

- Hamilton’s principal function is the action evaluated on the true path.
- From $dS=\sum_i p_i\,dq_i-H\,dt$, one obtains $\partial S/\partial q_i=p_i$ and $\partial S/\partial t=-H$.
- Substituting $p_i=\partial S/\partial q_i$ into the Hamiltonian gives the Hamilton–Jacobi equation.
- A complete solution $S(q,\alpha,t)$ contains a parameter $\alpha$.
- The quantity $\partial S/\partial \alpha$ is constant along the motion because its total time derivative vanishes.
- Hence the two constants of motion for one degree of freedom are $\alpha$ and $\beta$.
- For the harmonic oscillator, this procedure leads directly to $q(t)=A\sin(\omega t+\phi)$.

## Practice questions

1. Starting from $dS=p\,dq-H\,dt$, derive the Hamilton–Jacobi equation for one degree of freedom.
2. Prove directly that $d(\partial S/\partial \alpha)/dt=0$ along the actual motion.
3. Solve the Hamilton–Jacobi equation for a free particle in one dimension.
4. For the harmonic oscillator, show that $\beta=\partial S/\partial E$ leads to the sinusoidal trajectory.
5. Explain clearly the difference between Hamilton’s principal function $S$ and Hamilton’s characteristic function $W$.