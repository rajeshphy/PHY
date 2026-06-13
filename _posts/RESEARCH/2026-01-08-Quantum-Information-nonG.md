---
title: 'Quantum Information: NonG Measure'
date: 2026-01-08 08:00:00 +0530
categories: research
tags:
  - quantum-information
  - non-gaussianity
  - relative-entropy
  - gaussian-states
permalink: "/Quantum-Information/"
---
The **non-Gaussianity (nonG)** of a continuous-variable (CV) quantum state $ \rho $ is defined as the **quantum relative entropy distance** between $ \rho $ and a reference Gaussian state $ \rho_G $ that has **the same first moments and the same covariance matrix** as $ \rho $:

$$
\delta[\rho] = S(\rho \| \rho_G) = S(\rho_G) - S(\rho)
$$

where:
- $ S(\rho) = -\mathrm{Tr}(\rho \log \rho) $ is the von Neumann entropy,
- $ \rho_G $ is uniquely fixed by matching first moments and covariance matrix of $ \rho $.

For a single-mode Gaussian state,

$$
S(\rho_G) = h\!\left(\sqrt{\det \sigma[\rho]}\right)
$$

with

$$
h(t) = \left(t+\tfrac12\right)\ln\!\left(t+\tfrac12\right) + \left(t-\tfrac12\right)\ln\!\left(t-\tfrac12\right).
$$

Hence,

$$
\boxed{\;\delta[\rho] = h\!\left(\sqrt{\det \sigma[\rho]}\right) - S(\rho)\;}
$$


The **covariance matrix** of a continuous-variable quantum state $ \rho $ is defined in terms of the quadrature operators collected in the vector

$$
\hat R = (\hat x,\hat p)^T .
$$

Its elements are

$$
\sigma_{ij}
=
\frac12\langle \hat R_i \hat R_j + \hat R_j \hat R_i \rangle
-
\langle \hat R_i \rangle \langle \hat R_j \rangle ,
$$

where expectation values are taken with respect to $ \rho $:

$$
\langle \hat O \rangle = \mathrm{Tr}(\rho\,\hat O).
$$

For a single-mode state, this gives

$$
\sigma =
\begin{pmatrix}
\langle x^2\rangle-\langle x\rangle^2
&
\frac12\langle xp+px\rangle-\langle x\rangle\langle p\rangle
\\[6pt]
\frac12\langle xp+px\rangle-\langle x\rangle\langle p\rangle
&
\langle p^2\rangle-\langle p\rangle^2
\end{pmatrix}.
$$

If the first moments vanish, $ \langle x\rangle=\langle p\rangle=0 $, this simplifies to

$$
\sigma =
\begin{pmatrix}
\langle x^2\rangle & \frac12\langle xp+px\rangle \\
\frac12\langle xp+px\rangle & \langle p^2\rangle
\end{pmatrix}.
$$

The covariance matrix completely characterizes any **Gaussian state** and fixes the reference Gaussian state $ \rho_G $ used in non-Gaussianity measures.


---

### Example: Non-Gaussian state defined by  
The non-Gaussian pure state is defined by the wavefunction

$$
\phi_0(x;\lambda)=\frac{e^{-x^2/2}}{\pi^{1/4}}\left[1-\frac{\lambda}{\sqrt{2}}\operatorname{Erf}(x)\right]
$$

The corresponding **density operator** of the system is

$$
\rho = |\phi_0\rangle\langle \phi_0| ,
$$

which fully characterizes the quantum state.

Since $\|\phi_0\rangle$ is a **pure state**, its von Neumann entropy vanishes:

$$
S(\rho)=0 .
$$

The **reference Gaussian state** $ \rho_G $ is defined as the unique Gaussian state having the **same first moments and the same covariance matrix** as $ \rho $.  
It represents the closest Gaussian approximation to $ \rho $ used to quantify non-Gaussianity.

Using parity properties of $e^{-x^2}$ and $\operatorname{Erf}(x)$:

- Mean position:
$$
\langle x\rangle = \int x|\phi_0(x;\lambda)|^2 dx = 0
$$

- Mean momentum:
$$
\langle p\rangle = 0
$$

Thus, the first-moment vector is
$$
E[\rho]=(0,0)^T
$$

**Why the reference Gaussian state shares the same first moments:**  
In the relative-entropy definition of non-Gaussianity, the reference Gaussian state $ \rho_G $ is chosen to match the **first moments** of $ \rho $ so that non-Gaussianity is not contaminated by trivial phase-space displacements. Since first moments can always be changed by a unitary displacement without altering the Gaussian or non-Gaussian nature of a state, fixing them ensures that $ \delta[\rho] $ quantifies only genuine shape deviations from Gaussianity.

**If the first moments were nonzero:**  
For $E[\rho]\neq 0$, the reference Gaussian state $ \rho_G $ would have the *same nonzero first-moment vector*. Equivalently, one could apply a displacement operator to shift both $ \rho $ and $ \rho_G $ to zero mean without changing $ \delta[\rho] $, because quantum relative entropy is invariant under unitary displacements.


---

Define quadratures (with $\hbar=1$):
$$
\hat x = x, \qquad \hat p=-i\frac{d}{dx}
$$

The second moments are

$$
\langle x^2\rangle
= \frac12 + \frac{\lambda^2}{2\pi}
$$

$$
\langle p^2\rangle
= \frac12 + \frac{\lambda^2}{2\pi}
$$

Cross term:
$$
\langle xp+px\rangle = 0
$$

**Why the reference Gaussian state shares the same covariance matrix:**  
The covariance matrix fixes all second-order moments. For a given set of first and second moments, there exists a *unique* Gaussian state. Choosing $ \rho_G $ with the same covariance matrix makes it the closest Gaussian state in the sense of relative entropy.

---

The covariance matrix is therefore

$$
\sigma[\rho] =
\begin{pmatrix}
\langle x^2\rangle & 0 \\
0 & \langle p^2\rangle
\end{pmatrix}
=
\begin{pmatrix}
\frac12+\frac{\lambda^2}{2\pi} & 0 \\
0 & \frac12+\frac{\lambda^2}{2\pi}
\end{pmatrix}
$$

$$
\det \sigma
=
\left(\frac12+\frac{\lambda^2}{2\pi}\right)^2
$$

$$
\sqrt{\det\sigma}
=
\frac12+\frac{\lambda^2}{2\pi}
$$

The reference Gaussian state $ \rho_G $ has the same first moments and the same covariance matrix as $ \rho $.
Its entropy is

$$
S(\rho_G)
=
h\!\left(\frac12+\frac{\lambda^2}{2\pi}\right)
$$

with
$$
h(t)=\left(t+\frac12\right)\ln\!\left(t+\frac12\right)
+\left(t-\frac12\right)\ln\!\left(t-\frac12\right)
$$

Since $S(\rho)=0$,

$$
\boxed{
\delta[\rho]
=
h\!\left(\frac12+\frac{\lambda^2}{2\pi}\right)
}
$$


The function $h(t)$ is the **von Neumann entropy of a single-mode Gaussian state** written in terms of its symplectic eigenvalue $t$.

It is defined as
$$
h(t)=\left(t+\frac12\right)\ln\!\left(t+\frac12\right)
+\left(t-\frac12\right)\ln\!\left(t-\frac12\right)
$$

In this example,
$$
t=\sqrt{\det\sigma}
=
\frac12+\frac{\lambda^2}{2\pi}
$$

Hence, the explicit value of $h(t)$ is
$$
h\!\left(\frac12+\frac{\lambda^2}{2\pi}\right)
=
\left(1+\frac{\lambda^2}{2\pi}\right)\ln\!\left(1+\frac{\lambda^2}{2\pi}\right)
+
\frac{\lambda^2}{2\pi}\ln\!\left(\frac{\lambda^2}{2\pi}\right)
$$

For $\lambda=0$,
$$
h\!\left(\frac12\right)=0
$$

For $\lambda\neq0$, $h(t)>0$ and increases monotonically with $\lambda^2$.

---

## Interpretation

- For $ \lambda=0 $:  
  $\delta[\rho]=0$ → Gaussian vacuum state.
- For $ \lambda\neq0 $:  
  $\delta[\rho]>0$ → genuine non-Gaussianity induced by the error-function deformation.
- The non-Gaussianity increases monotonically with $ \lambda^2 $.

This explicitly shows how the **relative-entropy non-Gaussianity** is computed step-by-step for the state shown in the image.

---

## 2. Origin / History

- Introduced in **quantum information theory** as an application of **quantum relative entropy** (Umegaki, 1962).
- First systematically applied to quantify non-Gaussianity by  
  **Genoni, Paris, and Banaszek (2007–2008)**.
- Motivated by the central role of **Gaussian states as free states** in CV quantum optics and quantum information.

---

## 3. Why Important & Comparative Analysis

### Importance
- Vanishes **iff** the state is Gaussian.
- Operationally meaningful: measures **statistical distinguishability** from the closest Gaussian state.
- Directly linked to **resource theories of non-Gaussianity**.
- Relevant for tasks like:
  - entanglement distillation,
  - quantum error correction,
  - universal CV quantum computation.

### Comparison with Other Measures

| Measure | Basis | Advantages | Limitations |
|------|------|-----------|------------|
| **Relative-entropy nonG (this)** | Information-theoretic | Unique Gaussian reference, monotone, additive | Requires entropy evaluation |
| Wigner negativity | Phase-space | Easy visualization | Zero for many non-Gaussian states |
| Hilbert–Schmidt distance | Geometric | Simple form | Not monotone under CPTP maps |
| Kurtosis / higher moments | Statistical | Easy experimentally | Not invariant, not operational |

**Key distinction:** this measure is **operational, monotonic, and reference-free** (Gaussian reference fixed uniquely).
