---
title: Magnetic Oscillator Complexity
date: 2026-05-31 22:00:00 +0530
categories: research
tags:
  - quantum-complexity
  - harmonic-oscillator
  - magnetic-field
permalink: "/magnetic-oscillator-complexity/"
---
A charged harmonic oscillator in an external magnetic field appears to be a simple quantum-mechanical system, yet it provides a clean setting for understanding quantum complexity in thermal states. The central question is how a magnetic field modifies the difficulty of constructing a thermal quantum state from a simple reference state. In the work of Avramov, Radomirov, Rashkov, and Vetsov, this question is addressed by combining the dynamics of a charged oscillator, the thermofield-double construction, Gaussian-state covariance matrices, and Nielsen’s geometric notion of circuit complexity.

## From Magnetic Oscillator to Two Effective Frequencies

Quantum complexity entered physics because entanglement entropy alone does not always capture the continued evolution of quantum states. In holographic systems, for example, the interior geometry of certain black holes keeps evolving even after entanglement entropy has saturated. Complexity therefore asks a different question: not how entangled a state is, but how difficult it is to construct.

In Nielsen’s geometric approach, one begins with a simple reference state $\|\psi_R\rangle$ and constructs a target state $\|\psi_T\rangle$ by applying elementary quantum operations. Rather than counting gates directly, one studies all possible paths from the reference state to the target state and assigns a cost to each path. The complexity is the length of the shortest such path.

The harmonic oscillator is a natural testing ground because many physical systems reduce to oscillator modes near equilibrium, including molecular vibrations, lattice vibrations, electromagnetic field modes, quantum fields, trapped ions, and superconducting circuits.

Consider a charged particle in a two-dimensional harmonic trap. Without a magnetic field, the Hamiltonian is

$$
H=\frac{p_x^2+p_y^2}{2m}+\frac{1}{2}m\omega_0^2(x^2+y^2).
$$

In this case, the particle behaves like an ordinary two-dimensional harmonic oscillator whose motion is governed solely by the restoring force of the harmonic potential. The frequency of oscillation is $\omega_0$, and clockwise and anticlockwise motions are energetically equivalent.

When a magnetic field is applied along the $z$-direction, the canonical momentum is replaced by

$$
\mathbf{p}\rightarrow \mathbf{p}-e\mathbf{A},
$$

where $\mathbf{A}$ is the vector potential associated with the magnetic field.

<div style="border:2px solid #b91c1c; background:#fff5f5; padding:1rem; border-radius:8px; margin:1.25rem 0;">
  <strong style="display:block; color:#7f1d1d; font-size:1.05rem; margin-bottom:0.6rem;">Why Is the Symmetric Gauge Used?</strong>

  <p>The magnetic field $\mathbf B$ is the physical quantity, while the vector potential $\mathbf A$ is not unique. Any vector potential satisfying</p>

  $$
  \mathbf B=\nabla\times\mathbf A
  $$

  <p>produces the same magnetic field. For a uniform magnetic field along the $z$-direction,</p>

  $$
  \mathbf B=(0,0,B),
  $$

  <p>many choices of $\mathbf A$ are possible. For example the Landau gauge
    $$
    \mathbf A=
    \begin{pmatrix}
    0\\
    Bx\\
    0
    \end{pmatrix},
    $$
  is often used in condensed matter physics. However, the Landau gauge breaks the symmetry between the $x$ and $y$ coordinates, which can complicate the analysis of a rotationally symmetric system like the harmonic oscillator. In contrast, the symmetric gauge treats $x$ and $y$ on equal footing, preserving the rotational symmetry and making the role of angular momentum more transparent. 
  The authors use the <strong>symmetric gauge</strong></p>

  $$
  \mathbf A=
  \frac{B}{2}
  \begin{pmatrix}
  -y\\
  x\\
  0
  \end{pmatrix},
  $$

  <p>This choice makes the role of angular momentum explicit and greatly simplifies the analysis in polar coordinates.</p>
</div>

Using this gauge, the kinetic term acquires additional contributions. After expanding

$$
(\mathbf p-e\mathbf A)^2,
$$

one obtains an extra interaction term

$$
-\frac{eB}{2m}(xp_y-yp_x).
$$


<div style="border:2px solid #4a5568; padding:15px; border-radius:8px; background:#f8fafc;">

<strong>Expansion of $(\mathbf p-e\mathbf A)^2$</strong>

<p>
The square of a vector means a dot product with itself:
</p>

$$
(\mathbf p-e\mathbf A)^2
=
(\mathbf p-e\mathbf A)\cdot(\mathbf p-e\mathbf A).
$$

<p>
Using the symmetric gauge,
</p>

$$
\mathbf A
=
\frac{B}{2}
\begin{pmatrix}
-y\\
x
\end{pmatrix},
$$

<p>
we obtain
</p>

$$
\mathbf p-e\mathbf A
=
\begin{pmatrix}
p_x+\frac{eB}{2}y\\
p_y-\frac{eB}{2}x
\end{pmatrix}.
$$

<p>
Therefore,
</p>

$$
(\mathbf p-e\mathbf A)^2
=
\left(p_x+\frac{eB}{2}y\right)^2
+
\left(p_y-\frac{eB}{2}x\right)^2.
$$

<p>
Expanding,
</p>

$$
(\mathbf p-e\mathbf A)^2
=
p_x^2+p_y^2
+\frac{e^2B^2}{4}(x^2+y^2)
+\frac{eB}{2}(p_xy+yp_x)
-\frac{eB}{2}(p_yx+xp_y).
$$

<p>
Using
</p>

$$
[p_x,y]=0,
\qquad
[p_y,x]=0,
$$

<p>
gives
</p>

$$
p_xy=yp_x,
\qquad
p_yx=xp_y.
$$

<p>
Hence,
</p>

$$
(\mathbf p-e\mathbf A)^2
=
p_x^2+p_y^2
+\frac{e^2B^2}{4}(x^2+y^2)
-eB(xp_y-yp_x).
$$

<p>
Recognizing
</p>

$$
L_z=xp_y-yp_x,
$$

<p>
the final result becomes
</p>

$$
\boxed{
(\mathbf p-e\mathbf A)^2
=
p_x^2+p_y^2
+\frac{e^2B^2}{4}(x^2+y^2)
-eB\,L_z
}.
$$

<p>
Thus, the magnetic field contributes:
</p>

<ul>
  <li>$p_x^2+p_y^2$: ordinary kinetic energy,</li>
  <li>$\frac{e^2B^2}{4}(x^2+y^2)$: additional harmonic confinement,</li>
  <li>$-eB\,L_z$: coupling between the magnetic field and angular momentum.</li>
</ul>

</div>



This shows that the magnetic field couples directly to the orbital angular momentum of the particle. Physically, the energy now depends on the sense of rotation. States rotating clockwise and anticlockwise are no longer equivalent because the magnetic field favors one direction of circulation over the other.

This effect has a simple classical interpretation. The harmonic trap continuously pulls the particle toward the origin, while the magnetic field generates a Lorentz force that bends the trajectory into circular motion. The resulting dynamics arise from a competition between these two tendencies: confinement by the harmonic potential and rotation induced by the magnetic field.

One of the most important consequences is that the original two-dimensional oscillator no longer behaves as a single oscillator. The angular-momentum coupling lifts the degeneracy between opposite rotational modes and splits the system into two independent normal modes with different frequencies. These frequencies will later appear as

$$
\omega_1=
\frac{\sqrt{4\omega_0^2+\omega_c^2}+\omega_c}{2},
\qquad
\omega_2=
\frac{\sqrt{4\omega_0^2+\omega_c^2}-\omega_c}{2},
$$

where

$$
\omega_c=\frac{eB}{m}
$$

is the cyclotron frequency. Thus, the magnetic field effectively transforms a single oscillator into two oscillators whose frequencies depend on the strength of the field.






After diagonalization, the Hamiltonian becomes equivalent to two independent oscillators:

$$
H=\hbar\omega_1\left(n+\frac{1}{2}\right)+\hbar\omega_2\left(k+\frac{1}{2}\right).
$$

The magnetic field therefore splits the original planar oscillator into two effective modes with frequencies

$$
\omega_1=\frac{\sqrt{4\omega_0^2+\omega_c^2}+\omega_c}{2},
$$

and

$$
\omega_2=\frac{\sqrt{4\omega_0^2+\omega_c^2}-\omega_c}{2}.
$$

Here

$$
\omega_c=\frac{eB}{m}
$$

is the cyclotron frequency. Thus, before complexity is even introduced, the main physical effect of the magnetic field is to convert one two-dimensional oscillator into two independent oscillators whose frequencies depend on $B$.

## Thermal States, TFD Construction, and Gaussian Covariance Geometry

Complexity is most naturally defined for pure quantum states, but a system at temperature $T$ is described by the mixed thermal density matrix

$$
\rho=\frac{e^{-\beta H}}{Z},
$$

where

$$
\beta=\frac{1}{kT}.
$$

To apply pure-state methods to thermal physics, one uses the thermofield-double construction. The Hilbert space is doubled into left and right copies, and the thermal density matrix is represented through a pure entangled state:

$$
|TFD\rangle=\frac{1}{\sqrt{Z}}\sum_n e^{-\beta E_n/2}|n\rangle_L|n\rangle_R.
$$

Although the full thermofield-double state is pure, each subsystem separately behaves thermally. This allows the complexity of a thermal system to be studied using pure-state geometric tools.

For the magnetic oscillator, the diagonalized system contains two independent frequencies, so two squeezing parameters appear:

$$
\tanh\alpha_i=e^{-\beta\hbar\omega_i/2}.
$$

The parameters $\alpha_1$ and $\alpha_2$ measure the entanglement between the two copies of the system. At low temperature, $\beta\to\infty$, so

$$
e^{-\beta\hbar\omega_i/2}\to 0,
$$

and therefore

$$
\alpha_i\to 0.
$$

The thermofield-double state then approaches the vacuum-like reference state. At high temperature, $\beta\to 0$, so

$$
e^{-\beta\hbar\omega_i/2}\to 1,
$$

and the squeezing parameters become large. The state becomes strongly entangled, and its distance from the reference state increases.

The thermofield-double states in this problem are Gaussian states. For Gaussian states, the full state is completely determined by second moments such as

$$
\langle XX\rangle,\qquad \langle PP\rangle,\qquad \langle XP\rangle.
$$

These second moments are assembled into a covariance matrix $G$. Therefore, instead of tracking the full wavefunction, one can study the covariance matrix.

Complexity compares a reference state and a target state. If their covariance matrices are $G_R$ and $G_T$, the relative covariance matrix is

$$
\Delta=G_TG_R^{-1}.
$$

If the reference and target states coincide, then

$$
G_T=G_R,
$$

so

$$
\Delta=I,
$$

and no circuit is needed. Thus $\Delta$ measures the deformation required to transform the reference covariance geometry into the target covariance geometry.

For Gaussian states, the complexity is written as

$$
C=\frac{1}{2}\sqrt{\mathrm{Tr}\left(\ln\Delta\right)^2}.
$$

The logarithm extracts the generator of the transformation from the reference state to the target state, and the trace of its square gives a natural geometric length. Hence this formula is the covariance-matrix version of the shortest-path distance in Nielsen’s complexity geometry.

## Magnetic Field, Temperature, and Complexity Dynamics

The thermofield-double state evolves in time through the Hamiltonian. Since the diagonalized Hamiltonian contains two frequencies, $\omega_1$ and $\omega_2$, the covariance matrix develops oscillatory terms such as

$$
\cos(\omega_i t),
$$

and

$$
\sin(\omega_i t).
$$

Consequently, the complexity becomes time-dependent and oscillatory.

In the strong magnetic-field regime,

$$
\omega_c\gg\omega_0,
$$

the two effective frequencies separate strongly:

$$
\omega_1\gg\omega_2.
$$

The fast mode oscillates rapidly, while the slow mode controls the broad structure of the complexity curve. The resulting behaviour is nearly periodic, with an approximate period

$$
T\approx\frac{\pi}{\omega_2}.
$$

Thus a strong magnetic field produces relatively regular complexity oscillations.

In the weak magnetic-field regime,

$$
\omega_c\ll\omega_0,
$$

the two frequencies become nearly equal:

$$
\omega_1\approx\omega_2.
$$

When two nearly equal frequencies are superposed, beating appears. The same mechanism occurs in the complexity: the oscillations alternate between regions of large and small amplitude. The beating period is approximately

$$
T\approx\frac{\pi}{\omega_1-\omega_2}.
$$

Temperature affects complexity through the squeezing relation

$$
\tanh\alpha_i=e^{-\beta\hbar\omega_i/2}.
$$

As temperature increases, $\beta$ decreases, and the squeezing parameters $\alpha_i$ increase. Larger squeezing means stronger left-right entanglement in the thermofield-double state and a larger geometric separation from the reference state. Therefore, complexity increases with temperature. In the low-temperature limit it approaches a minimum value, while in the high-temperature limit it becomes unbounded.

## Lloyd Bound and Central Physical Message

A natural question is whether complexity can grow arbitrarily fast. Lloyd’s bound proposes that the rate of complexity growth is limited by the available energy:

$$
|\dot{C}|\leq \frac{2U}{\pi\hbar}.
$$

Here $U$ is the internal energy. The physical idea is that energy limits the maximum rate at which a system can perform computation, so complexity growth cannot exceed an energy-controlled bound.

The authors compare the maximum complexity growth rate with Lloyd’s bound by computing both $\|\dot{C}\|_{\max}$ and the internal energy $U$. They find that, for the magnetic oscillator system,

$$
|\dot{C}|_{\max}<\frac{2U}{\pi\hbar}.
$$

Thus the charged harmonic oscillator in a magnetic field respects Lloyd’s bound across the parameter regimes considered.

The central message is that a charged harmonic oscillator in a magnetic field effectively becomes two independent oscillators with magnetic-field-dependent frequencies. These frequencies determine the thermofield-double state, the squeezing parameters, the covariance matrix, and ultimately the quantum complexity. Strong magnetic fields produce regular oscillatory complexity, weak magnetic fields generate beating patterns, higher temperature increases complexity, and the rate of complexity growth remains below Lloyd’s energy bound.