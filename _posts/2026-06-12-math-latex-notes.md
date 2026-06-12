---
title: "Mathematical Physics With LaTeX"
summary: "A polished sample note showing equations, derivations, aligned expressions, and readable mathematical typography."
date: 2026-06-12 21:30:00 +0530
categories: math
tags:
  - latex
  - equations
  - mathematical-physics
permalink: /math-latex-notes/
math: true
---

<section class="studio-intro">
  <p>
    This note demonstrates how mathematical content can live inside the blog without losing typographic clarity. Inline symbols such as $E$, $\psi(x)$, and $\hbar$ remain readable, while display equations are given enough space to breathe.
  </p>
</section>

## Harmonic Oscillator

The one-dimensional quantum harmonic oscillator is governed by

$$
\hat{H}\psi(x)=
\left[
-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}
+\frac{1}{2}m\omega^2x^2
\right]\psi(x)
=E\psi(x).
$$

Introducing the dimensionless coordinate

$$
\xi=\sqrt{\frac{m\omega}{\hbar}}x
$$

turns the stationary Schrödinger equation into a cleaner form:

$$
\frac{d^2\psi}{d\xi^2}+
\left(2\epsilon-\xi^2\right)\psi=0,
\qquad
\epsilon=\frac{E}{\hbar\omega}.
$$

## Ladder Operators

The algebraic method packages the physics into two operators:

$$
\hat{a}=\sqrt{\frac{m\omega}{2\hbar}}\hat{x}
+\frac{i}{\sqrt{2m\hbar\omega}}\hat{p},
\qquad
\hat{a}^{\dagger}=\sqrt{\frac{m\omega}{2\hbar}}\hat{x}
-\frac{i}{\sqrt{2m\hbar\omega}}\hat{p}.
$$

They satisfy the compact commutator

$$
[\hat{a},\hat{a}^{\dagger}]=1,
$$

and the Hamiltonian becomes

$$
\hat{H}=\hbar\omega\left(\hat{a}^{\dagger}\hat{a}+\frac{1}{2}\right).
$$

The allowed energies follow immediately:

$$
E_n=\hbar\omega\left(n+\frac{1}{2}\right),
\qquad n=0,1,2,\ldots
$$

<section class="note-panel">
  <h2>Teaching Use</h2>
  <p>
    This format works well for lecture derivations: begin with the physical operator, introduce a dimensionless variable, then compress the result into algebraic language.
  </p>
</section>
