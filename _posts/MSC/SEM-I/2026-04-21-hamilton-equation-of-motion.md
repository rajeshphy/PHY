---
title: "Hamilton's Equations of Motion"
summary: "Hamilton's equations of motion, least action, and solved examples."
date: 2026-04-21 09:10:26 +0530
categories:
  - notes
  - msc
  - lecture
tags:
  - msc
  - semester-i
  - classical-mechanics
  - hamiltonian-mechanics
permalink: /msc/sem-i/hamilton-equation-of-motion/
hidden: true
---

This lecture contains principle of least action, Hamilton's equations of motion, and solved examples.

<div style="margin:18px 0; padding:18px 20px; border-left:6px solid #7c3aed; background:linear-gradient(135deg,#f5f3ff 0%,#ede9fe 100%); border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.08);">

<p style="font-size:1.02rem; line-height:1.75; color:#2d3748; text-align:justify;">
The <b style="color:#6b21a8;">principle of least action</b> states that, out of all imaginable paths by which a system can move from one configuration to another, the actual path followed by nature is the one for which the <b>action</b> has an extremum value. In modern language, this is stated more accurately as the <b style="color:#b45309;">principle of stationary action</b>, because the action need not always be strictly minimum; it may be minimum, maximum, or simply stationary against small variations of the path.
</p>

<div style="margin:14px 0; padding:14px 16px; background:#ffffff; border:1px solid #ddd6fe; border-radius:10px;">
<p style="margin:0; font-size:1.05rem; color:#1f2937; text-align:center;">
\[
S = \int_{t_1}^{t_2} L(q,\dot q,t)\,dt
\]
</p>
<p style="margin:10px 0 0 0; font-size:0.98rem; color:#4b5563; text-align:center;">
where <b>\(S\)</b> is the action and <b>\(L\)</b> is the Lagrangian of the system.
</p>
</div>

<p style="font-size:1.02rem; line-height:1.75; color:#2d3748; text-align:justify;">
Thus, the physical motion of a particle or system is obtained by requiring that a small variation in the action vanishes:
</p>

<div style="margin:14px 0; padding:14px 16px; background:#fff7ed; border:1px solid #fdba74; border-radius:10px;">
<p style="margin:0; font-size:1.05rem; color:#7c2d12; text-align:center;">
\[
\delta S = \delta \int_{t_1}^{t_2} L(q,\dot q,t)\,dt = 0
\]
</p>

<p style="font-size:1.02rem; line-height:1.75; color:#2d3748; text-align:justify;">
This variational condition leads directly to the <b style="color:#0f766e;">Euler--Lagrange equations</b>, which govern the dynamics of the system.
</p>
</div>

<p style="font-size:1.02rem; line-height:1.75; color:#1f2937; text-align:justify;">
Although the two expressions are often used interchangeably in elementary mechanics, there is a subtle distinction between them. The term <b style="color:#7c2d12;">principle of least action</b> is the older and more popular name, suggesting that nature chooses the path for which the action is the <i>minimum</i>. However, this is not always strictly true.
</p>

</div>
---

**Solved Examples**:

- **Example 1**:  
  **Problem**: Derive the equation of motion for a free particle using the principle of least action.  
  **Solution**:  
  The Lagrangian is $L = \frac{1}{2} m \dot{x}^2$.  
  Action:  
  $$
  S[x(t)] = \int_{t_1}^{t_2} \frac{1}{2} m \dot{x}^2 \, dt
  $$
  Applying the Euler-Lagrange equation:  
  $$
  \frac{d}{dt}(m \dot{x}) = 0 \Rightarrow \ddot{x} = 0
  $$
  This corresponds to uniform motion.

- **Example 2**:  
  **Problem**: Use the principle of least action to derive the motion of a harmonic oscillator.  
  **Solution**:  
  The Lagrangian is $L = \frac{1}{2} m \dot{x}^2 - \frac{1}{2} k x^2$.  
  Euler-Lagrange equation:  
  $$
  \frac{d}{dt}(m \dot{x}) + k x = 0 \Rightarrow m \ddot{x} + k x = 0
  $$
  This is the equation for simple harmonic motion.

---

**Practice Questions**:
- **Short Answer**:
  1. Define the principle of least action.
  2. What is meant by stationary action?

- **Numerical**:
  1. Find the equation of motion for a particle in a linear potential $V(x) = Fx$ using least action.
  2. Compute the action for a particle moving at constant speed $v$ from $x=0$ to $x=L$ in time $T$.

- **MCQs**:
  1. Which of the following is minimized in the principle of least action?
     - a) Kinetic energy  
     - b) Potential energy  
     - c) Action  
     - d) Hamiltonian  
     **Answer**: c)

  2. The Euler-Lagrange equation is obtained from:
     - a) Newton's laws  
     - b) Hamilton’s equations  
     - c) Principle of least action  
     - d) Gauss’s law  
     **Answer**: c)

---

# Hamilton's Equations of Motion

Hamiltonian mechanics is an alternative formulation of classical mechanics that uses generalized coordinates $q_i$ and conjugate momenta $p_i$ instead of just coordinates and velocities.

Given the Lagrangian $L(q_i, \dot{q}_i, t)$, the conjugate momenta are defined as:

$$
p_i = \frac{\partial L}{\partial \dot{q}_i}
$$

The Hamiltonian $H$ is defined as the Legendre transform of the Lagrangian:

$$
H(q_i, p_i, t) = \sum_i p_i \dot{q}_i - L(q_i, \dot{q}_i, t)
$$

Hamilton's equations of motion are the following first-order differential equations:

$$
\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}
$$

These equations describe the time evolution of a system in phase space and form the basis of modern theoretical physics, including quantum mechanics and statistical mechanics.

---

**Mathematical Formulation**:

Starting with the Lagrangian $L(q_i, \dot{q}_i, t)$, define the conjugate momenta:

$$
p_i = \frac{\partial L}{\partial \dot{q}_i}
$$

Perform a Legendre transformation to obtain the Hamiltonian:

$$
H(q_i, p_i, t) = \sum_i p_i \dot{q}_i - L
$$

Then Hamilton’s equations of motion follow as:

$$
\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}
$$

---

**Solved Examples**:

- **Example 1**:  
  **Problem**: Derive Hamilton's equations for a free particle of mass $m$.  
  **Solution**:  
  Lagrangian:

  $$
  L = \frac{1}{2} m \dot{q}^2
  $$

  Conjugate momentum:

  $$
  p = \frac{\partial L}{\partial \dot{q}} = m \dot{q} \Rightarrow \dot{q} = \frac{p}{m}
  $$

  Hamiltonian:

  $$
  H = p \dot{q} - L = \frac{p^2}{m} - \frac{1}{2} m \left( \frac{p}{m} \right)^2 = \frac{p^2}{2m}
  $$

  Hamilton’s equations:

  $$
  \dot{q} = \frac{\partial H}{\partial p} = \frac{p}{m}, \quad \dot{p} = -\frac{\partial H}{\partial q} = 0
  $$

  Hence, the particle moves with constant momentum.

---

- **Example 2**:  
  **Problem**: Apply Hamilton's equations to a simple harmonic oscillator.  
  **Solution**:  
  Lagrangian:

  $$
  L = \frac{1}{2} m \dot{q}^2 - \frac{1}{2} k q^2
  $$

  Conjugate momentum:

  $$
  p = \frac{\partial L}{\partial \dot{q}} = m \dot{q} \Rightarrow \dot{q} = \frac{p}{m}
  $$

  Hamiltonian:

  $$
  H = \frac{p^2}{2m} + \frac{1}{2} k q^2
  $$

  Hamilton’s equations:

  $$
  \dot{q} = \frac{\partial H}{\partial p} = \frac{p}{m}, \quad \dot{p} = -\frac{\partial H}{\partial q} = -k q
  $$

  These yield the standard equations of motion for a harmonic oscillator.

---

**Practice Questions**:
- **Short Answer**:
  1. Define the Hamiltonian and explain how it is related to the Lagrangian.
  2. Write down Hamilton’s equations for a charged particle in an electromagnetic field.

- **Numerical**:
  1. Derive the Hamiltonian for a particle of mass $m$ in a potential $V(q) = \lambda q^4$.
  2. Compute $\dot{q}$ and $\dot{p}$ for a particle in the potential $V(q) = \frac{1}{2}kq^2$ using Hamilton’s equations.

- **MCQs**:
  1. Hamilton’s equations are:
     - a) Second-order equations in time  
     - b) First-order equations in time  
     - c) Algebraic equations  
     - d) None of the above  
     **Answer**: b)

  2. The Hamiltonian for a free particle is:
     - a) $H = \frac{p^2}{2m}$  
     - b) $H = \frac{1}{2} m q^2$  
     - c) $H = p q$  
     - d) $H = m p$  
     **Answer**: a)
