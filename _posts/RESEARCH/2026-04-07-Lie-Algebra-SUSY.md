---
title: Harmonic Oscillator and Lie Superalgebra
date: 2026-04-07 07:30:00 +0530
categories: research
tags:
  - harmonic-oscillator
  - lie-superalgebra
  - supersymmetry
permalink: "/Supersymmetry-Matrix-Lie-Superalgebra/"
---
The harmonic oscillator provides the simplest setting where operator factorization leads naturally to supersymmetric structure. The Hamiltonian is written as

$$H^{(\mathrm{LHO})}=p^2+q^2$$

with canonical commutation relation

$$[q,p]=i$$

where $\hbar=1$. Define first-order operators

$$A=q+ip,\qquad B=q-ip$$

and compute

$$AB=(q+ip)(q-ip)=q^2+p^2+i(pq-qp)$$

using $[q,p]=i\Rightarrow pq-qp=-i$ gives

$$AB=q^2+p^2+1=H^{(\mathrm{LHO})}+1$$

similarly

$$BA=(q-ip)(q+ip)=q^2+p^2+i(qp-pq)=H^{(\mathrm{LHO})}-1$$

hence

$$H^{(\mathrm{LHO})}=AB-1=BA+1$$

which shows two distinct factorizations differing by a constant shift. Define partner Hamiltonians

$$H^{(L)}=BA=H^{(\mathrm{LHO})}-1,\qquad H^{(R)}=AB=H^{(\mathrm{LHO})}+1$$

and combine them into a matrix super-Hamiltonian

$$\mathcal H=\begin{pmatrix}H^{(L)}&0\\0&H^{(R)}\end{pmatrix}$$

acting on two-component states

$$\Psi(q)=\begin{pmatrix}\psi_L(q)\\\psi_R(q)\end{pmatrix}$$

introducing two sectors. Define supercharges

$$Q=\begin{pmatrix}0&0\\A&0\end{pmatrix},\qquad \tilde Q=\begin{pmatrix}0&B\\0&0\end{pmatrix}$$

which map $\Psi$ as

$$Q\Psi=\begin{pmatrix}0\\A\psi_L\end{pmatrix},\qquad \tilde Q\Psi=\begin{pmatrix}B\psi_R\\0\end{pmatrix}$$

exchanging sectors. The algebra uses commutator $[X,Y]=XY-YX$ and anticommutator $\\{X,Y\\}=XY+YX$. The generators $\mathcal H$ (even) and $Q,\tilde Q$ (odd) form a Lie superalgebra. Compute nilpotency

$$Q^2=0,\qquad \tilde Q^2=0$$

hence

$$\{Q,Q\}=0,\qquad \{\tilde Q,\tilde Q\}=0$$

and evaluate

$$Q\tilde Q=\begin{pmatrix}0&0\\0&AB\end{pmatrix},\qquad \tilde Q Q=\begin{pmatrix}BA&0\\0&0\end{pmatrix}$$

giving

$$\{Q,\tilde Q\}=\begin{pmatrix}BA&0\\0&AB\end{pmatrix}=\mathcal H$$

and commutation

$$[\mathcal H,Q]=0,\qquad [\mathcal H,\tilde Q]=0$$

since

$$H^{(R)}A=(AB)A=A(BA)=AH^{(L)},\qquad H^{(L)}B=(BA)B=B(AB)=BH^{(R)}$$

establishing conserved supercharges. Introduce fermionic operators

$$F^\dagger=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad F=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad N_F=\begin{pmatrix}0&0\\0&1\end{pmatrix}$$

satisfying

$$F^2=0,\qquad (F^\dagger)^2=0,\qquad F^\dagger F=N_F,\qquad FF^\dagger=\begin{pmatrix}1&0\\0&0\end{pmatrix}$$

encoding two-state fermionic structure. The supercharges factorize as

$$Q\sim a\,F^\dagger,\qquad \tilde Q\sim a^\dagger F$$

combining bosonic ladder operators with fermionic operators. The vacuum is

$$\langle q|0\rangle=\begin{pmatrix}e^{-q^2/2}/\sqrt{\pi}\\0\end{pmatrix}$$

satisfying

$$Q|0\rangle=0,\qquad \tilde Q|0\rangle=0$$

indicating unbroken supersymmetry. With oscillator energies

$$E_n=2n+1$$

the partner spectra become

$$E_n^{(L)}=2n,\qquad E_n^{(R)}=2n+2$$

showing paired excited states and a single unpaired zero-energy ground state. This construction establishes the full supersymmetric structure via factorization, matrix formulation, supercharges, and Lie superalgebra relations.