---
title: PT-Symmetric Radial Oscillator
date: 2026-04-11 12:00:00 +0530
categories: research
tags:
  - pt-symmetry
  - quantum-mechanics
  - radial-oscillator
  - laguerre-polynomials
permalink: "/pt-symmetric-radial-oscillator-solution/"
---
## Exact Solution on Shifted Contour 
Starting from the radial Schrödinger equation on the complex-shifted contour
$r=x-i\varepsilon,; x\in(-\infty,\infty),; \varepsilon>0$,

$$
\left[-\frac{d^2}{dr^2}+r^2+\frac{\beta^2-\frac14}{r^2}\right]\psi(r)=E\psi(r),
$$

we derive the exact bound-state spectrum and wavefunctions.

**Near-Origin Analysis**

Near $r=0$, the inverse-square term dominates, reducing the equation to

$$
\left[-\frac{d^2}{dr^2}+\frac{\beta^2-\frac14}{r^2}\right]\psi(r)\approx 0.
$$

Assume a power-law behavior,

$$
\psi(r)\sim r^s.
$$

Then

$$
\psi’’(r)=s(s-1)r^{s-2},
$$

and substitution yields

$$
-s(s-1)r^{s-2}+\left(\beta^2-\frac14\right)r^{s-2}=0.
$$

Hence the indicial equation is

$$
s(s-1)=\beta^2-\frac14,
$$

with solutions

$$
s=\frac12\pm\beta.
$$

Therefore, the two admissible local behaviors are

$$
\psi(r)\sim r^{\frac12+\beta},
\qquad
\psi(r)\sim r^{\frac12-\beta}.
$$

These two independent behaviors generate the two quasi-parity branches of the spectrum.


<div class="hh">

<h2 align="center">Quasi-Parity in PT-Symmetric Quantum Mechanics</h2>

In PT-symmetric Quantum Mechanics, quasi-parity $Q=\pm1$ is introduced because the ordinary parity operator $P$ no longer commutes with the Hamiltonian after the complex coordinate shift $|r| = x - i\varepsilon$, even though combined $PT$ symmetry remains preserved.
<br>
<strong>As a consequence:</strong><br>
- The two independent solutions of the radial equation can no longer be classified simply as even or odd under spatial reflection.<br>
- Instead, they are labeled by a generalized parity-like quantum number called quasi-parity.

<h2 align="center"> Role of Quasi-Parity</h2>

Quasi-parity distinguishes the two admissible branches of the spectrum through the relation

$$
\alpha = -Q\beta
$$

thereby unifying both solution families into a single spectral formula.

Quasi-parity serves as the natural replacement for ordinary parity in non-Hermitian but PT-symmetric systems.
<br>
<strong>Hermitian Limit</strong>
<br>
In the Hermitian limit $\varepsilon \to 0$: <br> 
- The Hamiltonian regains ordinary parity symmetry.  <br>
- Quasi-parity smoothly reduces to standard spatial parity.<br>

Thus, quasi-parity acts as the proper extension of parity within the PT-symmetric framework.

</div>




**Asymptotic Factorization**

For large $\|r\|$, the harmonic term dominates, so normalizability requires

$$
\psi(r)\sim e^{-r^2/2}.
$$

Combining asymptotic and near-origin behavior, use the ansatz

$$
\psi(r)=r^{\rho+\frac12}e^{-r^2/2}F(r^2),
$$

where

$$
\rho=\pm\beta.
$$

Define

$$
z=r^2.
$$

Then

$$
\psi(r)=r^{\rho+1/2}e^{-z/2}F(z).
$$

**Reduction to Laguerre Equation**

Substituting the ansatz into the Schrödinger equation gives

$$
zF’’(z)+(\rho+1-z)F’(z)+\frac{E-2\rho-2}{4}F(z)=0.
$$

This is the associated Laguerre differential equation,

$$
z y’’+(\alpha+1-z)y’+Ny=0,
$$

whose polynomial solutions are

$$
y(z)=L_N^{(\alpha)}(z),
\qquad N=0,1,2,\dots
$$

provided

$$
N=\frac{E-2\rho-2}{4}.
$$

Solving for the energy,

$$
E=4N+2\rho+2.
$$

Since $\rho=\pm\beta$, the two branches are

$$
E=4N+2\beta+2,
\qquad
E=4N-2\beta+2.
$$

**Quasi-Parity Formulation**

Introduce quasi-parity $Q=\pm1$ via

$$
\rho=-Q\beta.
$$

Then the spectrum becomes

$$
E_N^{(Q)}=4N+2\rho+2,
$$

or equivalently,

$$
E_N^{(Q)}=4N+2-2Q\beta.
$$

Exact Eigenfunctions

Using

$$
F(z)=L_N^{(\rho)}(z),
$$

the normalized wavefunctions are

$$
\psi(r)=\mathcal N\;r^{\rho+1/2}e^{-r^2/2}L_N^{(\rho)}(r^2),
$$

with $\rho=-Q\beta$. Thus,

$$
\psi(r)=\mathcal N\;r^{-Q\beta+1/2}e^{-r^2/2}L_N^{(-Q\beta)}(r^2).
$$

Quasi-Parity Sectors  
- For $Q=-1$:
$$
\rho=\beta,
\qquad
E=4N+2\beta+2,
\qquad
\psi(r)\sim r^{1/2+\beta}.
$$

- For $Q=+1$:
$$
\rho=-\beta,
\qquad
E=4N-2\beta+2,
\qquad
\psi(r)\sim r^{1/2-\beta}.
$$

The two quasi-parity sectors correspond to the two admissible singular behaviors at the origin on the shifted complex contour.

**Final Exact Solution**

The PT-symmetric radial oscillator admits the exact spectrum

$$
E=4N+2\rho+2,
\qquad
\rho=-Q\beta,
\qquad
Q=\pm1,
\qquad
N=0,1,2,\dots
$$

with eigenfunctions

$$
\psi(r)=\mathcal N\;r^{\rho+1/2}e^{-r^2/2}L_N^{(\rho)}(r^2);\;\;\qquad \mathcal N=\frac{N!}{\Gamma(N+\rho+1)}$$

---

When the PT-regularization is removed by taking $\varepsilon \to 0$, the PT-symmetric solutions continuously reduce to those of ordinary Hermitian quantum mechanics: at $\beta=\tfrac{1}{2}$ the spectrum reproduces the standard linear harmonic oscillator states, and **quasi-parity becomes identical to ordinary spatial parity**. The two independent solution branches behave near the origin as

$$
\psi(r)\sim r^{1/2-\beta}
$$

and

$$
\psi(r)\sim r^{1/2+\beta}
$$

where the branch proportional to $r^{1/2-\beta}$ is more singular near $r=0$, while the branch proportional to $r^{1/2+\beta}$ is less singular. For $\beta\ge1$, the more singular solution **ceases to be square-integrable and must therefore be discarded as unphysical**. This shows that PT-symmetric regularization temporarily enlarges the admissible solution space by permitting both branches, but upon returning to ordinary Hermitian quantum mechanics only the normalizable physical states survive, leaving the singular non-normalizable branch excluded.