---
title: Fock-German
date: 2025-12-03 10:00:00 +0530
categories: research
tags:
  - fock
  - hydrogen-atom
  - momentum-space
  - quantum-mechanics
permalink: "/fock-german/"
---
# Theory of the Hydrogen Atom

By V. Fock, Leningrad  
Received August 1935

The Schrödinger equation for the hydrogen atom in momentum space turns out to be identical to the integral equation for the spherical functions of three-dimensional potential theory. Consequently, the transformation group of the hydrogen equation is the four-dimensional rotation group, and the degeneracy of the hydrogen energy levels with respect to the azimuthal quantum number is thereby explained. The potential-theoretical interpretation of the Schrödinger equation allows one to derive numerous relations (addition theorems, etc.) that lead to a wide range of physical applications. The method also makes it possible to evaluate, almost without explicit computation, the infinite sums that appear in the theory of the Compton effect on bound electrons and in related problems. Using a simplified atomic model, one can further obtain explicit expressions for the density matrix in momentum space, atomic form factors, screening potentials, and similar quantities.

It has long been known that the energy levels of the hydrogen atom are degenerate with respect to the azimuthal quantum number $l$; this is sometimes referred to as an “accidental” degeneracy. However, every degeneracy of eigenvalues is associated with the transformation group of the corresponding equation—for example, the degeneracy with respect to the magnetic quantum number $m$ is associated with the ordinary rotation group. The group corresponding to the “accidental” degeneracy of the hydrogen spectrum, however, had not been identified until now.

In this work we show that this group is equivalent to the four-dimensional rotation group.

### The Schrödinger Equation of a Hydrogen-like Atom in Momentum Space

$$
\frac{1}{2m} p^{2} \psi(\mathbf{p})
- \frac{Z e^{2}}{2\pi^{2}\hbar}
\int
\frac{\psi(\mathbf{p}')\,(\mathrm{d}\mathbf{p}')}
{|\mathbf{p}-\mathbf{p}'|^{2}}
= E\,\psi(\mathbf{p}),
$$

where $(\mathrm{d}\mathbf{p}') = \mathrm{d}p_x'\,\mathrm{d}p_y'\,\mathrm{d}p_z'$ denotes the volume element in momentum space.  
We denote the discrete spectrum by $E$ and introduce the mean quadratic momentum

$$
p_{0} = \sqrt{-2mE}. \tag{2}
$$

We now use the components of the momentum vector $\mathbf{p}$, divided by $p_{0}$, as coordinates on a hypersphere through a stereographic projection from Euclidean momentum space. The rectangular coordinates on the hypersphere are

$$
\begin{aligned}
\xi &= \frac{2 p_{0} p_{x}}{p_{0}^{2} + p^{2}}
   = \sin\alpha\,\sin\vartheta\,\cos\varphi, \\
\eta &= \frac{2 p_{0} p_{y}}{p_{0}^{2} + p^{2}}
   = \sin\alpha\,\sin\vartheta\,\sin\varphi, \\
\zeta &= \frac{2 p_{0} p_{z}}{p_{0}^{2} + p^{2}}
   = \sin\alpha\,\cos\vartheta, \\
\chi &= \frac{p_{0}^{2} - p^{2}}{p_{0}^{2} + p^{2}}
   = \cos\alpha .
\end{aligned} \tag{8}
$$

The angles $\alpha$, $\vartheta$, and $\varphi$ are the angular coordinates on the hypersphere; the angles $\vartheta$ and $\varphi$ coincide with the usual spherical coordinates in momentum space. The surface element on the unit hypersphere is

$$
\mathrm{d}\Omega
= \sin^{2}\alpha\;\mathrm{d}\alpha\;
  \sin\vartheta\;\mathrm{d}\vartheta\;\mathrm{d}\varphi,
$$

and is related to the momentum-space volume element by

$$
(\mathrm{d}\mathbf{p})
= \mathrm{d}p_x\,\mathrm{d}p_y\,\mathrm{d}p_z
= p^{2}\,\mathrm{d}p\,
  \sin\vartheta\,\mathrm{d}\vartheta\,\mathrm{d}\varphi
= \frac{1}{8 p_{0}^{3}}
  (p_{0}^{2} + p^{2})^{3}\,
  \mathrm{d}\Omega .
$$

For convenience we introduce the parameter

$$
\boldsymbol{\lambda}
= \frac{Z m e^{2}}{h\, p_{0}}
= \frac{Z m e^{2}}{h\,\sqrt{-2mE}} .
$$
(6)

We now introduce a new function

$$
\boldsymbol{\Psi}(\alpha,\vartheta,\varphi)
= \frac{\pi}{\sqrt{8}}\; p_{0}^{-5/2}
\left(p_{0}^{2} + p^{2}\right)^{1/2}
\boldsymbol{\psi}(\mathbf{p}),
$$

(7)

so that the Schrödinger equation (1) takes the form

$$
\boldsymbol{\Psi}(\alpha,\vartheta,\varphi)
= \frac{\boldsymbol{\lambda}}{2\pi^{2}}
\int
\frac{
\boldsymbol{\Psi}(\alpha',\vartheta',\varphi')\,
\mathrm{d}\Omega'
}{
4 \sin^{2}\!\left(\frac{\omega}{2}\right)
}.
\tag{8}
$$

Here $4\sin^{2}(\omega/2)$ in the integrand represents the square of the  
four-dimensional distance between the two points  
$(\alpha,\vartheta,\varphi)$ and $(\alpha',\vartheta',\varphi')$ on the hypersphere:

$$
4 \sin^{2}\frac{\omega}{2}
= (\xi-\xi')^{2}
+ (\eta-\eta')^{2}
+ (\zeta-\zeta')^{2}
+ (\chi-\chi')^{2}.
\tag{9}
$$

The quantity $\omega$ is therefore the central angle, i.e., the length of the
arc of the great circle connecting these points. We have

$$
\cos\omega
= \cos\alpha\,\cos\alpha'
+ \sin\alpha\,\sin\alpha'\,\cos\gamma,
$$

where $\cos\gamma$ has its usual meaning:

$$
\cos\gamma
= \cos\vartheta\,\cos\vartheta'
+ \sin\vartheta\,\sin\vartheta'\,
  \cos(\varphi-\varphi').
$$

The constant factor in (7) is chosen so that the normalization condition
for $\Psi$ becomes

$$
\frac{1}{2\pi^{3}}
\int |\boldsymbol{\Psi}(\alpha,\vartheta,\varphi)|^{2}\,
\mathrm{d}\Omega
=
\int
\frac{p_{0}^{2} + p^{2}}{2 p_{0}^{3}}
|\psi(\mathbf{p})|^{2}\,
(\mathrm{d}\mathbf{p})
=
\int |\psi(\mathbf{p})|^{2}\,(\mathrm{d}\mathbf{p})
= 1 .
\tag{7}
$$

Since the surface area of the four-dimensional unit sphere is
$2\pi^{2}$, this normalization condition is, in particular, satisfied by the
constant function $\Psi = 1$.
We now want to show that equation (8) is precisely the integral equation for the spherical functions of a four-dimensional sphere.

We define the coordinates

We define

$$
x_1 = r \, \xi, \quad
x_2 = r \, \eta, \quad
x_3 = r \, \zeta, \quad
x_4 = r \, \chi,
$$

and consider the Laplace equation in four-dimensional Cartesian coordinates:

$$
\frac{\partial^2 u}{\partial x_1^2}
+ \frac{\partial^2 u}{\partial x_2^2}
+ \frac{\partial^2 u}{\partial x_3^2}
+ \frac{\partial^2 u}{\partial x_4^2}
= 0.
$$

The function
$$
G = \frac{1}{2R^{2}} + \frac{1}{2R_{1}^{2}}
$$
with
$$
R^{2}
= r^{2} - 2 r r' \cos\omega + r'^{2},
\qquad
R_{1}^{2}
= 1 - 2 r r' \cos\omega + r^{2} r'^{2}
$$
can be regarded as a Green’s function of this form; on the sphere it satisfies the boundary condition
$$
\frac{\partial G}{\partial r'} + G = 0
\qquad (r' = 1).
$$

A harmonic function  
$u(x_{1},x_{2},x_{3},x_{4})$  
inside the unit sphere can, by Green’s theorem, be written in terms of the boundary values of $\partial u / \partial r + u$ as

$$
u(x_{1},x_{2},x_{3},x_{4})
= \frac{1}{2\pi^{2}}
\int
\left(
\frac{\partial u}{\partial r'}
+ u
\right)(\Omega')\,
\mathrm{d}\Omega' .
$$

For a harmonic polynomial of degree $n-1$,

$$
u = r^{\,n-1}\, \Psi_{n}(\alpha,\vartheta,\varphi)
\qquad (n = 1,2,\ldots),
$$

we have

$$
\left(
\frac{\partial u}{\partial r} + u
\right)_{r=1}
= n\,u
= n\,\Psi_{n}(\alpha,\vartheta,\varphi).
$$

Substituting these expressions into equation (16) and using (18) together with (14) for $r' = 1$, we obtain
$$
r^{n}\,\Psi_{n}(\alpha,\vartheta,\varphi)
= \frac{n}{2\pi^{2}}
\int
\frac{
\Psi_{n}(\alpha',\vartheta',\varphi')
}{
1 - 2 r \cos\omega + r^{2}
}
\,\mathrm{d}\Omega' .
$$
This equation also remains valid for $r = 1$, and in that case it coincides with the Schrödinger equation (8), where the parameter $\lambda$ becomes the integer $n$; that is,
$$
\lambda
= \frac{Z m e^{2}}{h \sqrt{-2 m E}}
= n ,
$$
which clearly has the meaning of a quantum number.

Thus we have shown that the Schrödinger equation (1) or (8) is solved by four-dimensional spherical functions. At the same time, the transformation group of the Schrödinger equation is identified: this group is evidently the four-dimensional rotation group.


For the four-dimensional spherical functions we choose the following explicit representation. We set
$$
\Psi_{n l m}(\alpha,\vartheta,\varphi)
= \Pi_{n l}(\alpha)\, Y_{l m}(\vartheta,\varphi),
$$
where $l$ and $m$ are the azimuthal and magnetic quantum numbers, respectively, and where $Y_{lm}(\vartheta,\varphi)$ satisfy the normalization condition
$$
\frac{1}{4\pi}
\int_{0}^{\pi}
\int_{0}^{2\pi}
|Y_{lm}(\vartheta,\varphi)|^{2}\,
\sin\vartheta\,\mathrm{d}\vartheta\,\mathrm{d}\varphi
= 1 .
$$

Furthermore,
$$
M_{l} = \sqrt{n^{2}(n^{2}-1)\cdots (n^{2}-l^{2})},
$$
and therefore we require
$$
\frac{2}{\pi}
\int_{0}^{\pi}
\Pi_{l}^{2}(n,\alpha)\,
\sin^{2}\alpha\,\mathrm{d}\alpha
= 1 .
$$

The normalized function $\Pi_{l}(n,\alpha)$ can be defined using either of the two equivalent expressions
$$
\Pi_{l}(n,\alpha)
=
\frac{M_{l}}{\sin^{l+1}\alpha}
\int_{0}^{\alpha}
\cos(n\beta)\,
\frac{(\cos\beta - \cos\alpha)^{l}}{l!}\,
\mathrm{d}\beta ,
$$
or
$$
\Pi_{l}(n,\alpha)
=
\frac{\sin^{l}\alpha}{M_{l}}\,
\frac{\mathrm{d}^{\,l+1}(\cos n\alpha)}
{\mathrm{d}(\cos\alpha)^{\,l+1}} .
$$

For $l = 0$ one obtains
$$
\Pi_{0}(n,\alpha)
= \frac{\sin(n\alpha)}{\sin\alpha}.
$$

For complex values of $n$, the functions $\Pi_{l}$ and the relations corresponding to $(25^{*})$ remain valid. In particular, we have the recurrence relations

$$
-\,\frac{\mathrm{d}\Pi_{l}}{\mathrm{d}\alpha}
+ l\,\cot\alpha\,\Pi_{l}
=
\sqrt{n^{2}-(l+1)^{2}}\,\Pi_{l+1},
$$

$$
\frac{\mathrm{d}\Pi_{l}}{\mathrm{d}\alpha}
+ (l+1)\,\cot\alpha\,\Pi_{l}
=
\sqrt{n^{2}-l^{2}}\,\Pi_{l-1},
$$

which together lead to the differential equation

$$
\frac{\mathrm{d}^{2}\Pi_{l}}{\mathrm{d}\alpha^{2}}
+
2\cot\alpha\,
\frac{\mathrm{d}\Pi_{l}}{\mathrm{d}\alpha}
-
\frac{l(l+1)}{\sin^{2}\alpha}\,
\Pi_{l}
+
(n^{2}-1)\,\Pi_{l}
= 0 .
$$

We now proceed to the derivation of the addition theorem for four-dimensional spherical functions. Equation (19) is an identity with respect to $r$. If one expands the integrand in powers of $r$,

$$
\frac{1}{1-2 r \cos \omega + r^{2}}
=
\sum_{k=1}^{\infty}
r^{k-1}\,
\frac{\sin (k \omega)}{\sin \omega},
$$

and compares the coefficients, one obtains

$$
\frac{n}{2 \pi^{2}}
\int
\Psi_{n}(\boldsymbol{\alpha}', \vartheta', \varphi')\,
\frac{\sin(k \omega)}{\sin \omega}\,
\mathrm{d}\Omega'
=
\delta_{k n}\,
\Psi_{n}(\boldsymbol{\alpha}, \vartheta, \varphi).
$$

Now, $n \, \frac{\sin n \omega}{\sin \omega}$, as a function of $\alpha', \vartheta', \varphi'$, is itself a four-dimensional spherical function, which can be expanded in terms of $\Psi_{n l m}(\boldsymbol{\alpha}', \vartheta', \varphi')$. The coefficients of this expansion can be obtained from the above relation (for $k=n$). In this way, one obtains the addition theorem:
$$
n \cdot \frac{\sin n \omega}{\sin \omega}
=
\sum_{l=0}^{n-1} \sum_{m=-l}^{+l}
\overline{\Psi}_{n l m}(\boldsymbol{x}, \vartheta, \varphi)\,
\Psi_{n l m}(\boldsymbol{x}', \vartheta', \varphi').
$$

Using the spherical functions $\Psi_n$ in this form, one can write the expansion
$$
n \frac{\sin n \omega}{\sin \omega}
=
\sum_{l=0}^{\infty}
\Pi_l(n,\alpha)\,
\Pi_l(n,\alpha')\,
(2l+1)\,
P_l(\cos \gamma),
$$
where $P_l$ denotes the Legendre polynomial and $\cos\gamma$ has the usual meaning.  
We have written the upper summation limit as $l=\infty$ to indicate that formula (32) remains valid for complex values of $n$ and $\alpha$.  
If $n$ is an integer, the series terminates at $l = n-1$.

We have given the geometric interpretation of the integral equation (1) for the case of the point spectrum. In the case of the continuous spectrum $(E>0)$, the Schrödinger equation can be written as a system of two integral equations connecting the values of the desired function on the two sheets of the hyperboloid.

One may also describe the situation without reference to a fourth dimension.  
For the point spectrum, the geometry in momentum space is that of a Riemannian sphere with constant positive curvature, whereas for the continuous spectrum the geometry is that of Lobachevskian space with constant negative curvature.

The geometric interpretation of the integral equation is less intuitive for the continuous spectrum than for the point spectrum.  
For practical applications, it is therefore advantageous to first derive the formulas for the point spectrum and only in the final result treat the principal quantum number $n$ as purely imaginary.  
This is possible because the functions $\Pi_l(n,\alpha)$ are analytic in $n$ and $\alpha$, and for purely imaginary values of $n$ and $\alpha$ differ only by a constant factor from the corresponding functions of the continuous spectrum.

We now indicate briefly some problems that can be treated advantageously by means of the above “geometric’’ theory of hydrogen-like atoms.  
In some applications, for example in the theory of the Compton effect on bound electrons or in the theory of inelastic collisions with atoms, one needs the norm of the projection of a given function $\varphi$ onto the subspace of the Hilbert space defined by the principal quantum number $n$.  
This norm is defined by the sum
$$
N
=
\int |P_n \varphi|^{2} \, \mathrm{d}\tau
=
\sum_{l m}
\left|
\int
\overline{\psi}_{n l m}\,
\varphi \,\mathrm{d}\tau
\right|^{2}.
$$
Here, the summation over $l$ is often very difficult, especially when it involves an infinite series (continuous spectrum).  
The introduction of parabolic quantum numbers allows the sum to be evaluated in some cases, but the calculations remain cumbersome.

If one uses the transformation group of the Schrödinger equation together with the addition theorem (31) for the eigenfunctions, the summation can be performed more easily; the entire sum (33) is often simpler to compute than a single term.

Analogous simplifications occur in the calculation of the norm of the projection of an operator $L$ onto the $n$-th subspace, i.e., in evaluating the double sum
$$
N(L)
=
\sum_{l m} \sum_{l' m'}
\left|
\int
\overline{\psi}_{n l m}\,
L\,\psi_{n l' m'}\,
\mathrm{d}\tau
\right|^{2}.
$$

Expressions of the form (34) appear, for example, in the calculation of atomic form factors, where the operator $L$ in momentum space takes the form
$$
L = e^{-\,\mathbf{f}\cdot \frac{\partial}{\partial \mathbf{p}}}; 
\qquad
L \psi(\mathbf{p}) = \psi(\mathbf{p}-\mathbf{f}).
$$

These expressions are invariant under a change of orthogonal system $\psi_{n l m}$.  
A four-dimensional rotation of the coordinates produces a new orthogonal system, leaving the sums (33) and (34) unchanged.  
Such a rotation can be chosen to simplify the integrals in (33) and (34), or even make them vanish.  
Thus, the operator $L$ defined by (35), which shifts the origin in momentum space, can essentially be reduced to the operation $p \to \lambda p$.  
This gives $\psi(\lambda p)$ and leads to a simpler sum, as the angular dependence $(\vartheta, \varphi)$ remains as in the usual spherical functions.

The projection $P_n \varphi$ of a function $\varphi$ onto the subspace corresponding to principal quantum number $n$ is
$$
P_n \varphi
=
\sum_{l m}
\psi_{n l m}
\left[
\int \overline{\psi}_{n l m}\,
\varphi\,\mathrm{d}\tau
\right].
$$

The projection operator $P_n$ has the kernel
$$
\varrho_n(\mathbf{p}',\mathbf{p})
=
\sum_{l m}
\overline{\psi}_{n l m}(\mathbf{p}') \psi_{n l m}(\mathbf{p}).
$$

The functions $\psi_{n l m}$ can be expressed through four-dimensional spherical functions.  
Since the “mean square momentum’’ $p_0$ depends on the principal quantum number $n$, we now denote it by $p_n$.  
Instead of (7), we then have
$$
\Psi_{n l m}(\boldsymbol{\alpha},\vartheta,\varphi)
=
\frac{\pi}{\sqrt{8}}\,
p_n^{-5/2}\,
(p_n^{2}+p^{2})^{2}\,
\psi_{n l m}(\mathbf{p}).
$$

Inserting (38) into (37) and using the addition theorem (31), one obtains
$$
\varrho_n(\mathbf{p}',\mathbf{p})
=
\frac{8 p_n^{5}}
{\pi^{2}(p_n^{2}+p^{2})^{2}(p_n^{2}+p'^{2})^{2}}
\cdot
n \frac{\sin n\omega}{\sin \omega},
$$
and for $\mathbf{p}' = \mathbf{p}$
$$
\varrho_n(\mathbf{p},\mathbf{p})
=
\frac{8 p_n^{5} n^{2}}
{\pi^{2}(p_n^{2}+p^{2})^{4}}.
$$

The integral
$$
4\pi \int_{0}^{\infty} \varrho_n(\mathbf{p},\mathbf{p})\,p^{2}\,\mathrm{d}p
=
n^{2}
$$
equals the dimension of the subspace corresponding to the principal quantum number $n$.

8. The success of the Bohr model for the periodic system of elements, as well as the applicability of the Ritz formula for energy levels, shows that it is a reasonable approximation to treat the electrons in an atom as moving in a Coulomb field.

It is therefore natural to consider the following atomic model. All electrons with the principal quantum number $n$ belong to the $n$-th shell. The electrons of the $n$-th large shell are described by hydrogen-like wave functions with an effective nuclear charge $Z_{n}$. One can introduce the mean square momentum $p_{n}$ corresponding to $Z_{n}$ through the relation

$$
Z_{n} = n \, p_{n} \, \frac{a}{h} \, ( a \,\text{hydrogen radius} ),
$$

which defines their relationship.

Under these assumptions, one can calculate the energy of an atom as a function of the nuclear charge $Z$ and the parameters $p_{n}$, and the values of $p_{n}$ can be determined from the condition of minimum energy. It should be noted that under these assumptions, the wave functions of electrons within a large shell are mutually orthogonal, but they are not orthogonal to the functions of a different shell. It is therefore consistent to neglect the exchange energy between electrons of different shells and to consider only the exchange energy within each shell.

This approach yields very satisfactory results. For $\mathrm{Na}^{+} (Z=11)$ one obtains (in atomic units):

$$
p_{\bf 1} = 10.63 \, ; \quad p_{\bf 2} = 3.45 \quad (Z=11)
$$

and for $\mathrm{Al^{3+}} (Z=13)$

$$
p_{\bf 1} = 12.62 \, ; \quad p_{\bf 2} = 4.45 \quad (Z=13).
$$

A simple analytical expression can be derived for $p_{\bf 2}$. Using the above value of $p_{\bf 1}$, this expression differs only slightly from that calculated by Hartree using the more complex numerical method (“self-consistent field”), and may even be somewhat more accurate, since for the sodium atom it lies between the self-consistent field results with and without exchange.

For atoms with three large shells, namely $\mathrm{Cu^{+}} (Z=29)$ and $\mathrm{Zn^{2+}} (Z=30)$, analogous calculations give:

$$
p_{\bf 1} = 28.59 \, ; \quad p_{\bf 2} = 10.64 \, ; \quad p_{\bf 3} = 5.47 \quad (Z=29)
$$

$$
p_{\bf 1} = 29.59 \, ; \quad p_{\bf 2} = 11.09 \, ; \quad p_{\bf 3} = 5.84 \quad (Z=30)
$$

The deviation of the shielding potential from Hartree's calculation is somewhat larger for Cu (three shells) than for $\mathrm{Na^{+}}$ and $\mathrm{Al^{3+}}$ (two shells), exceeding about 10% of the total value.

The accuracy of this atomic model thus appears to meet fairly high standards for atoms that are not too heavy.

Insofar as our atomic model applies, the density matrix of an atom in momentum space can be obtained as the sum of the expressions for the large shells present in the atom. The knowledge of the density matrix allows — as emphasized by Dirac — the calculation of all atomic properties, particularly atomic form factors.

As an example, the atomic form factor $F_n$ for the $n$-th large shell is

$$
F_n = \int e^{i \mathbf{f} \cdot \mathbf{r}} \varrho_n(\mathbf{r},\mathbf{r}) \, \mathrm{d}\tau
= \int \varrho_n(\mathbf{p},\mathbf{p}-\mathbf{f}) \, \mathrm{d}\mathbf{p}.
$$

Substituting for $\varrho_n(\mathbf{p},\mathbf{p}-\mathbf{f})$ the expression from (9), the integral can be evaluated in closed form. With the abbreviation

$$
x = \frac{4 p_n^2 - k^2}{4 p_n^2 + k^2},
$$

one obtains

$$
F_n = F_n(x) = \frac{1}{4 n^2} T_n'(x) (1+x)^2 \left\{ P_n'(x) + P_{n-1}'(x) \right\},
$$

where $T_n'(x)$ denotes the derivative of the Chebyshev polynomial

$$
T_n(x) = \cos(n \arccos x),
$$

and $P_n'(x)$ denotes the derivative of the Legendre polynomial $P_n(x)$. For $k=0$, $x=1$ and $F_n(1) = n^2$.

The sum of these expressions for the large shells present in the atom is proportional to the charge density in momentum space. This can be compared with the charge density calculated from the Fermi statistical atom model, which is less accurate. For $\mathrm{Ne} (Z=10)$ and $\mathrm{Na^{+}} (Z=11)$, good agreement is found for large $p$, while for small $p$ (about $p<2$ atomic units) the Fermi model overestimates the charge density.

Finally, it should be noted that our method, which uses these simplifications, can probably also be applied to atoms with unfilled shells.