---
title: 'Quantum Information: Weigner Non-Gaussianity Measure'
date: 2026-01-08 08:00:00 +0530
categories: research
tags:
  - quantum-information
  - wigner-function
  - non-gaussianity
  - phase-space
permalink: "/Quantum-Information-Weigner/"
---
A celebrated **phase-space description of nonclassicality** in single-mode quantum oscillators is based on the presence of **negative regions of the Wigner function**.  
Since the Wigner function is a normalized but not positive-definite quasi-probability distribution, its negativity has no classical counterpart.

The **Wigner function** $W(x,p)$ associated with a quantum state $ \rho $ is defined as

$$
W(x,p)
=
\frac{1}{\pi\hbar}
\int_{-\infty}^{+\infty}
\langle x+y|\rho|x-y\rangle
\,e^{-\,\frac{2ipy}{\hbar}}
\,dy .
$$

It satisfies the normalization condition

$$
\iint dx\,dp\, W(x,p) = 1 ,
$$

but in general
$$
W(x,p) \ngeq 0 .
$$


The **Wigner negativity** of a quantum state $ \rho $ is defined as the total phase-space volume of the negative part of the Wigner function. It is quantified by

$$
\nu[\rho]
=
\left(
\iint dx\,dp\, |W(x,p)|
\right)
- 1 .
$$

This quantity vanishes if and only if the Wigner function is everywhere nonnegative.


- If $W(x,p)\ge0$ for all $(x,p)$, the state admits a classical phase-space description and
$$
\nu[\rho]=0 .
$$

- If $W(x,p)<0$ in some region of phase space, genuine quantum interference effects appear and
$$
\nu[\rho]>0 .
$$

Thus, Wigner negativity is a **direct witness of nonclassicality**.


## Example: Single-photon Fock state $|1\rangle$

For the single-photon Fock state,
$$
\rho = |1\rangle\langle 1| ,
$$
the Wigner function is

$$
W_1(x,p)
=
\frac{2}{\pi}
\left(2x^2+2p^2-1\right)
e^{-2(x^2+p^2)} .
$$

This function takes **negative values** in the region

$$
x^2+p^2 < \frac12 .
$$

As a result, the Wigner negativity is strictly positive,

$$
\nu[|1\rangle] > 0 ,
$$

signaling the intrinsic nonclassical character of the single-photon state.


## Relation to non-Gaussianity

- All **Gaussian states** have nonnegative Wigner functions and therefore zero Wigner negativity.
- A nonzero value of $ \nu[\rho] $ always implies **non-Gaussianity**.
- However, the converse is not guaranteed: some non-Gaussian states may still have a positive Wigner function.

Hence, Wigner negativity is a **stronger but more restrictive** indicator than entropy-based measures of non-Gaussianity.


## Interpretation

Wigner negativity captures phase-space quantum interference effects that cannot be reproduced by any classical probability distribution.  
It plays a central role in understanding the resources required for **quantum information processing** and **quantum computational advantage** in continuous-variable systems.