---
title: Shape Invariance and Ramos
date: 2026-05-30 11:50:00 +0530
categories: research
tags:
  - susy-qm
  - shape-invariance
  - exactly-solvable-potentials
permalink: "/shape-invariance/"
---
Shape invariance is one of the central algebraic mechanisms behind exactly solvable quantum potentials in supersymmetric quantum mechanics. Instead of solving the Schrödinger equation separately for each bound state, one factorizes the Hamiltonian, constructs partner potentials, and uses a parameter-shift rule to generate the entire spectrum recursively. Ramos' contribution extends this classical idea to systems with several translated parameters by introducing translation-invariant combinations into the superpotential.

## From Schrödinger Equation to Shape Invariance

In ordinary one-dimensional quantum mechanics, the bound-state problem begins with the eigenvalue equation

$$
H\psi_n(x)=E_n\psi_n(x),
$$

where

$$
H=-\frac{d^2}{dx^2}+V(x).
$$

Thus one must solve

$$
\left[-\frac{d^2}{dx^2}+V(x)\right]\psi(x)=E\psi(x).
$$

For most potentials, this second-order differential equation cannot be solved exactly. Supersymmetric quantum mechanics begins with a different question: can the Hamiltonian be written as a product of first-order differential operators?

Define

$$
A=\frac{d}{dx}+W(x),
$$

and

$$
A^\dagger=-\frac{d}{dx}+W(x),
$$

where $W(x)$ is called the superpotential. It is not the physical potential itself; rather, it is a generating function from which two partner potentials are constructed.

The two SUSY partner Hamiltonians are

$$
H_-=A^\dagger A,
$$

and

$$
H_+=AA^\dagger.
$$

Expanding them gives

$$
H_-=-\frac{d^2}{dx^2}+W^2(x)-W'(x),
$$

and

$$
H_+=-\frac{d^2}{dx^2}+W^2(x)+W'(x).
$$

Hence the partner potentials are

$$
V_-(x)=W^2(x)-W'(x),
$$

and

$$
V_+(x)=W^2(x)+W'(x).
$$

The two potentials differ only in the sign of the derivative term $W'(x)$. This partner structure becomes powerful when the superpotential also depends on a parameter $a$:

$$
W=W(x;a).
$$

Then

$$
V_-(x;a)=W^2(x;a)-W'(x;a),
$$

and

$$
V_+(x;a)=W^2(x;a)+W'(x;a).
$$

Shape invariance means that $V_+(x;a_0)$ has the same functional form as $V_-(x;a_1)$, except for an additive constant independent of $x$:

$$
V_+(x;a_0)=V_-(x;a_1)+R(a_0),
$$

where

$$
a_1=f(a_0).
$$

For many exactly solvable potentials, the shift is translational:

$$
a_1=a_0-1.
$$

Thus the condition becomes

$$
V_+(x;a)=V_-(x;a-1)+R(a).
$$

The crucial point is that the remainder $R(a)$ may depend on the parameter, but not on position. Therefore, the shape of the potential is preserved while the parameter changes. This converts the problem from differential-equation solving into algebraic parameter recursion:

$$
\text{Differential equation problem}\longrightarrow\text{algebraic parameter recursion}.
$$

## Spectrum, Ground State, and Examples

Once shape invariance holds, the energy spectrum follows from a ladder of shifted parameters. Let

$$
a_0=a.
$$

For translational shape invariance,

$$
a_1=a_0-1,
$$

$$
a_2=a_0-2,
$$

and in general

$$
a_k=a_0-k.
$$

The excited-state energies of $H_-$ are obtained by summing the remainders along this ladder:

$$
E_n=\sum_{k=1}^{n}R(a_k).
$$

This is the central algebraic result of shape invariance. The spectrum is built step by step from constants rather than by repeatedly solving the Schrödinger equation.

The ground state is even simpler. Since

$$
H_-=A^\dagger A,
$$

the lowest state satisfies

$$
A\psi_0=0.
$$

Using

$$
A=\frac{d}{dx}+W(x),
$$

we get

$$
\left(\frac{d}{dx}+W(x)\right)\psi_0(x)=0.
$$

Therefore,

$$
\frac{d\psi_0}{dx}=-W(x)\psi_0,
$$

and hence

$$
\frac{d}{dx}\ln\psi_0(x)=-W(x).
$$

After integration,

$$
\psi_0(x)=N\exp\left[-\int W(x)\,dx\right],
$$

where $N$ is a normalization constant. Thus the ground-state wavefunction is determined directly from the superpotential.

The excited states are obtained by applying raising operators with successively shifted parameters:

$$
\psi_n(x;a_0)\propto A^\dagger(a_0)A^\dagger(a_1)\cdots A^\dagger(a_{n-1})\psi_0(x;a_n).
$$

This formula shows that shape-invariant ladder construction is not simply repeated application of one fixed operator. The operator changes as the parameter shifts:

$$
a_0\to a_1\to a_2\to\cdots\to a_n.
$$

For the harmonic oscillator, choose

$$
W(x)=x.
$$

Then

$$
W^2(x)=x^2,
$$

and

$$
W'(x)=1.
$$

Hence

$$
V_-(x)=x^2-1,
$$

and

$$
V_+(x)=x^2+1.
$$

Thus

$$
V_+(x)=V_-(x)+2,
$$

so the remainder is

$$
R=2.
$$

The energy levels are therefore

$$
E_n=\sum_{k=1}^{n}2=2n.
$$

The ground state follows from

$$
\left(\frac{d}{dx}+x\right)\psi_0=0,
$$

giving

$$
\psi_0(x)=Ne^{-x^2/2}.
$$

For a Morse-type system, take

$$
W(x;a)=a-e^{-x}.
$$

The parameter ladder is

$$
a_k=a-k.
$$

With the corresponding remainder

$$
R(a_k)=2(a-k)-1,
$$

the energy is

$$
E_n=\sum_{k=1}^{n}\left[2(a-k)-1\right].
$$

That is,

$$
E_n=\sum_{k=1}^{n}(2a-2k-1).
$$

Using

$$
\sum_{k=1}^{n}k=\frac{n(n+1)}{2},
$$

one obtains

$$
E_n=n(2a-1)-n(n+1).
$$

Depending on the convention for indexing the shifted parameter, this is often written in the compact Morse form

$$
E_n=n(2a-n).
$$

The essential point is that the Morse spectrum is obtained from a sum of remainders along the parameter ladder.

## Riccati Origin of Solvable Potentials

The Riccati equation appears because shape invariance is a strong constraint. Consider a translationally shape-invariant superpotential of the form

$$
W(x;m)=m\,k_1(x)+k_0(x),
$$

where $m$ shifts as

$$
m\to m-1.
$$

Here $m$ carries the ladder structure, while $k_1(x)$ and $k_0(x)$ determine the spatial shape. Shape invariance requires

$$
V_+(x;m)=V_-(x;m-1)+R(m).
$$

Since the difference between the two sides must be independent of $x$, all remaining position-dependent terms must cancel. Substituting

$$
W(x;m)=m\,k_1(x)+k_0(x)
$$

into the shape-invariance condition and comparing powers of $m$ forces

$$
k_1'(x)+k_1^2(x)=\alpha,
$$

and

$$
k_0'(x)+k_0(x)k_1(x)=\beta,
$$

where $\alpha$ and $\beta$ are constants. The first equation is a Riccati equation. It is not imposed artificially; it is produced by the requirement that the shifted partner potentials differ only by an $x$-independent remainder.

The logic is therefore

$$
\text{shape invariance}\Rightarrow\text{cancellation of }x\text{-dependent terms}\Rightarrow\text{Riccati equation}.
$$

The qualitative solution of

$$
G'(x)+G^2(x)=\alpha
$$

controls the family of solvable potentials. Since the physical potentials are constructed through

$$
V_\pm=W^2\pm W',
$$

the functional form of $G(x)$ determines the structure of $V_\pm$.

When $\alpha>0$, the Riccati equation produces constant and hyperbolic-type solutions such as

$$
G(x)=1,
$$

$$
G(x)=\tanh x,
$$

and

$$
G(x)=\coth x.
$$

These lead to exponential and hyperbolic families:
- $G(x)=1$ produces Morse-type exponential structures.
- $G(x)=\tanh x$ produces $\operatorname{sech}^2x$ structures.
- $G(x)=\coth x$ produces $\operatorname{csch}^2x$ structures.

Thus $\alpha>0$ is associated with Morse, Scarf II, and hyperbolic Pöschl--Teller-type families.

When $\alpha=0$,

$$
G'(x)+G^2(x)=0,
$$

one obtains algebraic solutions such as

$$
G(x)=\frac{1}{x},
$$

as well as the special solution

$$
G(x)=0.
$$

These produce rational, polynomial, oscillator, and radial-oscillator structures. Thus $\alpha=0$ is associated with harmonic oscillator and radial oscillator families.

When $\alpha<0$, the Riccati equation produces trigonometric solutions such as

$$
G(x)=-\tan x,
$$

and

$$
G(x)=\cot x.
$$

These generate structures involving

$$
\sec^2x,
$$

and

$$
\csc^2x.
$$

Thus $\alpha<0$ is associated with trigonometric Scarf and trigonometric Pöschl--Teller-type families.

In summary,

$$
\alpha>0\Rightarrow\text{hyperbolic and exponential families},
$$

$$
\alpha=0\Rightarrow\text{algebraic and oscillator families},
$$

$$
\alpha<0\Rightarrow\text{trigonometric families}.
$$

The familiar list of exactly solvable potentials is therefore not accidental. These potentials arise from different qualitative solution classes of the same Riccati equation.

## Ramos' Multi-Parameter Extension

Classical shape invariance usually involves one translated parameter,

$$
a\to a-1.
$$

Ramos extends this structure to several parameters,

$$
(m_1,m_2,\ldots,m_n),
$$

all translated simultaneously as

$$
m_i\to m_i-1.
$$

Equivalently,

$$
(m_1,m_2,\ldots,m_n)\to(m_1-1,m_2-1,\ldots,m_n-1).
$$

The difficulty is that when every parameter changes, preserving the same functional shape is no longer automatic. Ramos' key idea is to separate the parameter dependence into:
- one direction that genuinely translates;
- other combinations that remain invariant under the common translation.

For example, if

$$
m_1\to m_1-1,
$$

and

$$
m_2\to m_2-1,
$$

then

$$
(m_2-1)-(m_1-1)=m_2-m_1.
$$

Thus $m_2-m_1$ is a translation invariant. More generally, a translation invariant is any quantity satisfying

$$
I_j(m_1-1,m_2-1,\ldots,m_n-1)=I_j(m_1,m_2,\ldots,m_n).
$$

Ramos isolates the translating direction through the mean parameter

$$
M=\frac{m_1+m_2+\cdots+m_n}{n}.
$$

Under the common shift,

$$
M\to M-1.
$$

Thus $M$ behaves like the usual single translated parameter. The remaining combinations are chosen as invariants $I_1,I_2,I_3,\ldots$. Therefore:
- $M$ controls the ordinary shape-invariant ladder;
- the $I_j$ add structure without changing under translation.

Ramos proposes the superpotential ansatz

$$
W(x)=M\,G(x)+\sum_j I_jv_j(x).
$$

Here $G(x)$ and $v_j(x)$ determine the spatial form, while the $I_j$ carry translation-invariant parameter dependence. Inserting this ansatz into the shape-invariance condition again produces the same cancellation logic. The result is

$$
G'(x)+G^2(x)=\alpha,
$$

and

$$
v_j'(x)+G(x)v_j(x)=\beta_j.
$$

The first equation is the same Riccati backbone of ordinary translational shape invariance; the second is a first-order linear equation. Thus Ramos' construction preserves the classical Riccati structure but adds new freedom through invariant parameter combinations:

$$
\text{Riccati geometry}+\text{translation invariants}=\text{new exactly solvable families}.
$$

For the Morse realization, choose

$$
G(x)=1.
$$

Then

$$
G'(x)+G^2(x)=0+1=1,
$$

so

$$
\alpha=1.
$$

The equation for $v_j(x)$ becomes

$$
v_j'(x)+v_j(x)=\beta_j.
$$

A solution is

$$
v_j(x)=\beta_j-d_j e^{-x},
$$

where $d_j$ is a constant. Substituting into Ramos' ansatz gives

$$
W(x)=M+\sum_j I_j(\beta_j-d_j e^{-x}).
$$

Therefore,

$$
W(x)=M+\sum_j\beta_jI_j-\sum_jd_jI_je^{-x}.
$$

Define the effective parameters

$$
\epsilon=M+\sum_j\beta_jI_j,
$$

and

$$
\rho=\sum_jd_jI_j.
$$

Then

$$
W(x)=\epsilon-\rho e^{-x}.
$$

This has the familiar Morse form in $x$, but $\epsilon$ and $\rho$ are no longer ordinary constants. They are dressed by translation-invariant functions.

The construction yields infinitely many exactly solvable families because there are infinitely many admissible invariants. A one-parameter invariant may satisfy

$$
I(m-1)=I(m).
$$

For instance,

$$
I(m)=\sin^2(2\pi m)+\cos(2\pi m)+1
$$

is invariant under $m\to m-1$ because sine and cosine are periodic. Defining

$$
\epsilon=m-\beta I(m),
$$

and

$$
\rho=dI(m),
$$

one obtains the Morse-like superpotential

$$
W(x)=\left[m-\beta I(m)\right]-dI(m)e^{-x}.
$$

For Morse-type spectra,

$$
E_k=(2\epsilon-k)k.
$$

Substituting the invariant-dressed parameter gives

$$
E_k=\left[2m-2\beta I(m)-k\right]k.
$$

Thus the exact spectrum can be reshaped by choosing different invariant functions $I(m)$. The potential remains shape invariant, the algebraic solvability is preserved, and infinitely many deformations become possible.

The ordinary shape-invariant route is

$$
\text{superpotential}\to\text{partner potentials}\to\text{parameter shift}\to\text{remainder sum}\to E_n.
$$

Ramos enlarges this route from

$$
W(x;m)=m\,k_1(x)+k_0(x)
$$

to

$$
W(x)=M\,G(x)+\sum_jI_jv_j(x).
$$

In one sentence: shape invariance solves quantum systems because parameter translation turns the spectrum into a sum of constants, while Ramos' construction shows that translation-invariant parameter combinations can be added without destroying exact solvability.