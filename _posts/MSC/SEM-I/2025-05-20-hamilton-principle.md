---
title: "Hamilton's Principle"
summary: "Hamilton's principle, stationary action, and Euler-Lagrange equations for classical systems."
date: 2025-05-20 07:47:26 +0530
categories:
  - notes
  - msc
  - lecture
tags:
  - msc
  - semester-i
  - classical-mechanics
  - hamilton-principle
  - action
permalink: /msc/sem-i/lagrangian-mechanics/
hidden: true
---

## Hamilton's Principle

<span style="color:darkred">**Learning Objectives**</span>:
- Understand the statement and physical meaning of Hamilton's principle.
- Derive the Euler-Lagrange equations from the principle.
- Apply Hamilton's principle to solve simple dynamical systems.

---

**Key Concepts / Definitions**:
- **Hamilton's Principle**: The actual path taken by a system between two configurations is such that the action integral is stationary (usually a minimum).
- **Action**: The integral of the Lagrangian over time, $S = \int_{t_1}^{t_2} L(q, \dot{q}, t) \, dt$.
- **Stationary Action**: A value of the action where its first variation is zero, $\delta S = 0$.

---

**Theory and Explanation**:

Hamilton’s Principle, also known as the **Principle of Stationary Action**, is a cornerstone of analytical mechanics. It states that:

> *Out of all possible paths that a system can follow between two fixed points in configuration space and time, the actual path followed is the one that makes the action integral stationary.*

This principle unifies many laws of classical mechanics and provides a natural route to derive the **Euler-Lagrange equations**, which are central to Lagrangian mechanics.

The **action** is a scalar quantity defined by:

$$
S[q(t)] = \int_{t_1}^{t_2} L(q, \dot{q}, t) \, dt
$$

Here:
- $q(t)$ are generalized coordinates.
- $\dot{q} = \frac{dq}{dt}$ is the generalized velocity.
- $L(q, \dot{q}, t)$ is the **Lagrangian** of the system, typically $T - V$, where $T$ is kinetic energy and $V$ is potential energy.

If the action is stationary, then the path taken by the system satisfies:

$$
\delta S = 0
$$

This leads to the Euler-Lagrange equation, which governs the dynamics of the system.

---

**Mathematical Formulation**:

Let $q(t)$ be a differentiable path connecting two fixed endpoints at $t = t_1$ and $t = t_2$.

The action functional is:

$$
S[q(t)] = \int_{t_1}^{t_2} L(q, \dot{q}, t) \, dt
$$

Consider a variation $q(t) \rightarrow q(t) + \varepsilon \eta(t)$, where $\eta(t_1) = \eta(t_2) = 0$.

The variation of action is:

$$
\delta S = \frac{d}{d\varepsilon} S[q + \varepsilon \eta] \bigg|_{\varepsilon=0} = \int_{t_1}^{t_2} \left( \frac{\partial L}{\partial q} \eta + \frac{\partial L}{\partial \dot{q}} \dot{\eta} \right) dt
$$

Integrating the second term by parts and applying boundary conditions:

$$
\delta S = \int_{t_1}^{t_2} \left( \frac{\partial L}{\partial q} - \frac{d}{dt} \frac{\partial L}{\partial \dot{q}} \right) \eta(t) \, dt
$$

For $\delta S = 0$ for arbitrary $\eta(t)$, the integrand must vanish:

$$
\frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}} \right) - \frac{\partial L}{\partial q} = 0
$$

This is the **Euler-Lagrange equation**.

---

**Solved Examples**:

- **Example 1**:  
  **Problem**: Derive the equation of motion for a free particle using Hamilton’s principle.  
  **Solution**:  
  For a free particle of mass $m$, the Lagrangian is $L = \frac{1}{2} m \dot{x}^2$.

  Action:
  $$
  S[x(t)] = \int_{t_1}^{t_2} \frac{1}{2} m \dot{x}^2 \, dt
  $$

  Euler-Lagrange equation:
  $$
  \frac{d}{dt} \left( m \dot{x} \right) = 0 \Rightarrow m \ddot{x} = 0
  $$

  This implies constant velocity motion: $x(t) = vt + c$.

---

- **Example 2**:  
  **Problem**: A particle moves under a constant force $F$. Derive its equation of motion using Hamilton’s principle.  
  **Solution**:  
  The Lagrangian is $L = \frac{1}{2} m \dot{x}^2 + Fx$.

  Euler-Lagrange equation:
  $$
  \frac{d}{dt}(m \dot{x}) - F = 0 \Rightarrow m \ddot{x} = F
  $$

  This leads to uniformly accelerated motion.

---

**Important Points / Summary**:
- Hamilton’s principle leads to the Euler-Lagrange equations.
- It is a variational reformulation of Newtonian mechanics.
- The action is stationary, not necessarily minimal.
- Applies to conservative systems and forms the foundation of field theory.

---

**Practice Questions**:
- **Short Answer**:
  1. State Hamilton's principle in your own words.
  2. How is the Euler-Lagrange equation derived from the principle of stationary action?

- **Numerical**:
  1. A particle moves under a potential $V(x) = \frac{1}{2} kx^2$. Use Hamilton’s principle to find the equation of motion.
  2. Compute the action for a particle moving from $x=0$ to $x=a$ in time $T$ with constant velocity.

- **MCQs**:
  1. The Euler-Lagrange equation is obtained from Hamilton's principle by:
     - a) Differentiating the Lagrangian directly  
     - b) Rewriting Newton’s law  
     - c) Requiring $\delta S = 0$ for arbitrary variations  
     - d) Using energy conservation  
     **Answer**: c)

  2. In Hamilton’s principle, the variation $\eta(t)$ must:
     - a) Be arbitrary  
     - b) Vanish at the endpoints  
     - c) Be a constant function  
     - d) Satisfy $\dot{\eta}(t_1) = 0$  
     **Answer**: b)

