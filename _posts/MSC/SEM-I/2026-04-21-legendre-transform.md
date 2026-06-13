---
title: "Legendre Transform"
summary: "Legendre transformation in mechanics and thermodynamics with examples and physical interpretation."
date: 2026-04-21 11:00:00 +0530
categories:
  - notes
  - msc
  - lecture
tags:
  - msc
  - semester-i
  - classical-mechanics
  - legendre-transform
  - thermodynamics
permalink: /msc/sem-i/legendre-transform/
hidden: true
---

As we have seen in the previous lectures, the Lagrangian and Hamiltonian formulations of mechanics are related by a mathematical operation called the Legendre transformation. This transformation is not just a technical tool; it is a fundamental concept that appears in various areas of physics, including thermodynamics and classical mechanics. In this lecture, we will explore the Legendre transformation in depth, understand its motivation, and see how it is applied in different physical contexts.

<div style="margin:20px 0 28px 0; padding:24px 22px; background:linear-gradient(135deg,#f8fafc 0%,#eef2ff 100%); border:1px solid #cbd5e1; border-radius:18px; box-shadow:0 8px 24px rgba(0,0,0,0.08);">


<p style="margin:0; font-size:1.03rem; line-height:1.85; color:#334155; text-align:justify;">
The <b style="color:#4f46e5;">Legendre transformation</b> is a mathematical method for rewriting a function in terms of a <b>conjugate variable</b>, usually a derivative, when that new variable is more natural for describing a physical system. In physics, it provides a systematic way to replace one set of variables by another set that contains the same information but is better suited to the problem. This is especially important in <b style="color:#0f766e;">classical mechanics</b>, where velocity is replaced by momentum, and in <b style="color:#b45309;">thermodynamics</b>, where entropy and volume are replaced by temperature and pressure.
</p>

</div>

## <span style="color:#7c2d12;">Motivation and Core Idea</span>

<div style="margin:16px 0; padding:18px 20px; background:#fff7ed; border-left:6px solid #ea580c; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">

<p style="margin-top:0; font-size:1.02rem; line-height:1.8; color:#3f3f46; text-align:justify;">
Suppose a function $f(x)$ is known in terms of the variable $x$, but in actual applications we often measure, control, or interpret the <b>slope</b> rather than the variable itself. That slope is
</p>

$$
y=\frac{df}{dx}.
$$

<p style="margin-bottom:0; font-size:1.02rem; line-height:1.8; color:#3f3f46; text-align:justify;">
If $f$ is smooth and convex, then the relation between $x$ and $y$ is one-to-one, so we can solve for $x$ in terms of $y$. The Legendre transformation then defines a new function
</p>

$$
g(y)=xy-f(x),
$$

<p style="margin-bottom:0; font-size:1.02rem; line-height:1.8; color:#3f3f46; text-align:justify;">
where $x$ is eliminated in favor of $y$ through the relation $y=df/dx$. Thus, the transformation does not lose information; rather, it <b style="color:#9a3412;">repackages the same content</b> in a different and often more useful form.
</p>
<br>
<strong style="color:black;">Hint:</strong> Do integration by parts to show that the Legendre transform is equivalent to a change of variables in the integral representation of $f$.

$$
df=y\,dx
$$

Apply integration by parts to $\int y\,dx$:

$$
\int y\,dx=xy-\int x\,dy.
$$

So,

$$
xy-\int x\,dy=f(x)+C.
$$

Rearranging,

$$
\int x\,dy+C=xy-f(x).
$$

We write

$$
g(y)=xy-f(x).
$$







</div>

<div style="margin:18px 0; padding:14px 16px; background:#eff6ff; border:1px solid #93c5fd; border-radius:10px;">
<p style="margin:0; font-size:1rem; line-height:1.8; color:#1e3a8a; text-align:justify;">
<b>Conceptual meaning:</b> the Legendre transform replaces dependence on a variable by dependence on its conjugate variable. In many physical problems, the conjugate variable is the one that has clearer experimental or dynamical significance.
</p>
</div>

## <span style="color:#065f46;">Legendre Transform in Classical Mechanics</span>

<div style="margin:16px 0; padding:18px 20px; background:linear-gradient(135deg,#ecfdf5 0%,#f0fdf4 100%); border-left:6px solid #10b981; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">

<p style="margin-top:0; font-size:1.02rem; line-height:1.8; color:#1f2937; text-align:justify;">
In Lagrangian mechanics, the state of a system is described by generalized coordinates and velocities, so the Lagrangian is written as
</p>

$$
L(q,\dot q,t).
$$

<p style="font-size:1.02rem; line-height:1.8; color:#1f2937; text-align:justify;">
The conjugate or generalized momentum corresponding to $q$ is defined by
</p>

$$
p=\frac{\partial L}{\partial \dot q}.
$$

<p style="font-size:1.02rem; line-height:1.8; color:#1f2937; text-align:justify;">
If this relation can be inverted so that $\dot q$ can be expressed in terms of $(q,p,t)$, then we can move from the Lagrangian description to the Hamiltonian description. The Hamiltonian is obtained by performing the Legendre transform with respect to $\dot q$:
</p>

$$
H(q,p,t)=p\dot q-L(q,\dot q,t).
$$

<p style="margin-bottom:0; font-size:1.02rem; line-height:1.8; color:#1f2937; text-align:justify;">
Here $\dot q$ must finally be replaced by its expression in terms of $q$, $p$, and $t$. This is the exact mathematical sense in which the Legendre transform changes the natural variables from $(q,\dot q)$ to $(q,p)$. The Hamiltonian formulation is especially powerful in advanced mechanics, canonical transformations, and quantum theory.
</p>

</div>

## <span style="color:#7c3aed;">Thermodynamic Potentials as Legendre Transforms</span>

<div style="margin:16px 0; padding:18px 20px; background:linear-gradient(135deg,#faf5ff 0%,#f5f3ff 100%); border-left:6px solid #8b5cf6; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">

<p style="margin-top:0; font-size:1.02rem; line-height:1.8; color:#374151; text-align:justify;">
Thermodynamics makes extensive use of Legendre transforms because different experiments keep different variables fixed. A thermodynamic potential is chosen according to which variables are easiest to control. Starting from internal energy $U(S,V)$, one defines the conjugate variables through partial derivatives:
</p>

$$
P=-\left(\frac{\partial U}{\partial V}\right)_S,
\qquad
T=\left(\frac{\partial U}{\partial S}\right)_V.
$$

<p style="font-size:1.02rem; line-height:1.8; color:#374151; text-align:justify;">
The common thermodynamic potentials are then obtained as follows.
</p>

<ul style="margin:10px 0 0 20px; line-height:1.9; color:#374151;">
  <li><b>Enthalpy</b>:
  $$
  H(S,P)=U(S,V)+PV
  $$
  </li>
  <li><b>Helmholtz free energy</b>:
  $$
  F(T,V)=U(S,V)-TS
  $$
  </li>
  <li><b>Gibbs free energy</b>:
  $$
  G(T,P)=U+PV-TS
  $$
  </li>
</ul>

<p style="margin-bottom:0; font-size:1.02rem; line-height:1.8; color:#374151; text-align:justify;">
Each of these functions contains the same underlying thermodynamic information, but each is best adapted to a different set of laboratory conditions. This is why Legendre transformation is not merely a formal trick; it is a powerful organizational principle in physics.
</p>

</div>

---

## <span style="color:#9f1239;">Worked Examples</span>

<div style="margin:18px 0; padding:18px 20px; background:#fff; border:1px solid #e5e7eb; border-radius:14px; box-shadow:0 6px 18px rgba(0,0,0,0.06);">

<h3 style="margin-top:0; color:#be123c;">Example 1: Legendre transform of a quadratic</h3>

<p style="font-size:1.01rem; line-height:1.8; color:#374151;">
Let $f(x)=ax^2$. Then
</p>

$$
y=\frac{df}{dx}=2ax \quad\Rightarrow\quad x=\frac{y}{2a}.
$$

<p style="font-size:1.01rem; line-height:1.8; color:#374151;">
Now,
</p>

$$
g(y)=xy-f(x)=\left(\frac{y}{2a}\right)y-a\left(\frac{y}{2a}\right)^2
=\frac{y^2}{2a}-\frac{y^2}{4a}
=\frac{y^2}{4a}.
$$

<p style="margin-bottom:0; font-size:1.01rem; line-height:1.8; color:#374151;">
So the Legendre transform of $ax^2$ is $\frac{y^2}{4a}$.
</p>

</div>

<div style="margin:18px 0; padding:18px 20px; background:#fff; border:1px solid #e5e7eb; border-radius:14px; box-shadow:0 6px 18px rgba(0,0,0,0.06);">

<h3 style="margin-top:0; color:#be123c;">Example 2: Lagrangian to Hamiltonian for a particle in a potential</h3>

<p style="font-size:1.01rem; line-height:1.8; color:#374151;">
Given
</p>

$$
L=\frac{1}{2}m\dot q^2-V(q),
$$

<p style="font-size:1.01rem; line-height:1.8; color:#374151;">
the conjugate momentum is
</p>

$$
p=\frac{\partial L}{\partial \dot q}=m\dot q
\quad\Rightarrow\quad
\dot q=\frac{p}{m}.
$$

<p style="font-size:1.01rem; line-height:1.8; color:#374151;">
Therefore,
</p>

$$
H=p\dot q-L
=\frac{p^2}{m}-\left(\frac{p^2}{2m}-V(q)\right)
=\frac{p^2}{2m}+V(q).
$$

<p style="margin-bottom:0; font-size:1.01rem; line-height:1.8; color:#374151;">
Thus the Hamiltonian becomes the sum of kinetic and potential energies.
</p>

</div>

<div style="margin:18px 0; padding:18px 20px; background:#fff; border:1px solid #e5e7eb; border-radius:14px; box-shadow:0 6px 18px rgba(0,0,0,0.06);">

<h3 style="margin-top:0; color:#be123c;">Example 3: Internal energy to enthalpy</h3>

<p style="margin-bottom:0; font-size:1.01rem; line-height:1.8; color:#374151; text-align:justify;">
Starting from $U(S,V)$, define
</p>

$$
H(S,P)=U(S,V)+PV.
$$

<p style="margin-bottom:0; font-size:1.01rem; line-height:1.8; color:#374151; text-align:justify;">
This replaces volume by pressure as a natural variable when the pressure is externally controlled.
</p>

</div>

<div style="margin:18px 0; padding:18px 20px; background:#fff; border:1px solid #e5e7eb; border-radius:14px; box-shadow:0 6px 18px rgba(0,0,0,0.06);">

<h3 style="margin-top:0; color:#be123c;">Example 4: Internal energy to Helmholtz free energy</h3>

<p style="margin-bottom:0; font-size:1.01rem; line-height:1.8; color:#374151; text-align:justify;">
Using temperature as the conjugate of entropy, define
</p>

$$
F(T,V)=U(S,V)-TS.
$$

<p style="margin-bottom:0; font-size:1.01rem; line-height:1.8; color:#374151; text-align:justify;">
This potential is most useful for systems maintained at fixed temperature and volume.
</p>

</div>

<div style="margin:18px 0; padding:18px 20px; background:#fff; border:1px solid #e5e7eb; border-radius:14px; box-shadow:0 6px 18px rgba(0,0,0,0.06);">

<h3 style="margin-top:0; color:#be123c;">Example 5: Internal energy to Gibbs free energy</h3>

<p style="font-size:1.01rem; line-height:1.8; color:#374151;">
Two successive Legendre transforms give
</p>

$$
G(T,P)=U+PV-TS.
$$

<p style="margin-bottom:0; font-size:1.01rem; line-height:1.8; color:#374151;">
This is the most useful potential when both temperature and pressure are controlled.
</p>

</div>

<div style="margin:18px 0; padding:18px 20px; background:#fff; border:1px solid #e5e7eb; border-radius:14px; box-shadow:0 6px 18px rgba(0,0,0,0.06);">

<h3 style="margin-top:0; color:#be123c;">Example 6: Helmholtz to Gibbs</h3>

<p style="font-size:1.01rem; line-height:1.8; color:#374151;">
From $F=U-TS$, we obtain
</p>

$$
G=F+PV=U-TS+PV.
$$

<p style="margin-bottom:0; font-size:1.01rem; line-height:1.8; color:#374151;">
So Gibbs free energy can also be viewed as a Legendre transform of Helmholtz free energy with respect to volume.
</p>

</div>

---

## <span style="color:#1d4ed8;">Key Points and Practice Questions</span>

<div style="margin:16px 0; padding:18px 20px; background:#eff6ff; border-left:6px solid #2563eb; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">

<h3 style="margin-top:0; color:#1e40af;">Key Points</h3>

<ul style="margin:0 0 0 20px; line-height:1.95; color:#1f2937;">
  <li>The Legendre transformation replaces dependence on a variable with dependence on its conjugate variable.</li>
  <li>In mechanics, it converts $(q,\dot q)$ into $(q,p)$ through $p=\partial L/\partial \dot q$.</li>
  <li>In thermodynamics, it generates useful thermodynamic potentials matched to different experimental constraints.</li>
  <li>It is valuable because it preserves the physical content while changing the variables to a more convenient set.</li>
</ul>

</div>

<div style="margin:16px 0; padding:18px 20px; background:#fefce8; border-left:6px solid #ca8a04; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">

<h3 style="margin-top:0; color:#854d0e;">Practice Questions</h3>

<ol style="margin:0 0 0 20px; line-height:1.95; color:#1f2937;">
  <li>Find the Legendre transform of $f(x)=e^x$.</li>
  <li>Define conjugate momentum and explain why it enables the transformation from $L$ to $H$.</li>
  <li>If $L=\frac{1}{2}m\dot q^2+A\dot q$, compute the Hamiltonian.</li>
  <li>Find the Legendre transform of $f(x)=\ln x$.</li>
</ol>

</div>