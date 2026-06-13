---
title: "Resonance Scattering"
summary: "Partial-wave scattering, resonances, phase shifts, resonance width, and Breit-Wigner form."
date: 2026-04-13 12:00:00 +0530
categories:
  - notes
  - msc
  - lecture
tags:
  - msc
  - semester-iii
  - nuclear-physics
  - resonance-scattering
  - partial-waves
permalink: /msc/sem-iii/resonance-scattering/
hidden: true
---

In nuclear scattering, an incident particle approaches a target nucleus, interacts through the nuclear (and possibly Coulomb) forces, and then emerges in some outgoing channel. The experimentally measured quantity is the differential or total cross-section, which quantifies the probability of scattering per target nucleus. For spherically symmetric (central) interactions, the most systematic and physically transparent description is the **partial-wave method**, where the scattering amplitude is resolved into contributions labelled by orbital angular momentum $l$.  
Resonance reactions lie between the extremes of direct reactions and compound nucleus reactions. They involve discrete, quasibound nuclear states in the energy spectrum.

- **Resonance states**: Quasibound states with lifetimes long enough to form distinct energy levels, but still unstable against decay.
- **High cross-section**: Resonances exhibit a significantly increased probability of interaction at specific energies.

#### Formation of Resonances
The nuclear potential seen by the incident particle can be approximated by a square-well potential. The wavefunctions inside and outside the well must match smoothly. This matching varies with the incident particle’s energy, leading to the formation of resonances at specific energies. The energy at which the cross-section reaches a maximum is called **Resonance energy ($E_r$)**. The measure of width of peak shown at the top figure is the **Resonance width ($\Gamma$)**, which is a measure of the energy uncertainty of a quasibound state, which is inversely proportional to its lifetime ($\tau$), as given by $\tau = \hbar / \Gamma$.



#### Phase Shift Analysis
The phase shift $\delta$ of the scattering wavefunction is crucial for understanding resonances:
- A resonance occurs when the phase shift $\delta$ passes through $\pi / 2$.
- Near a resonance, the phase shift can be expanded as:
$$
\cot \delta_l = \frac{E - E_r}{\Gamma / 2}
$$
where $l$ denotes the partial wave contributing to the resonance.

## Detailed Calculations: 

The cross section for pure elastic scattering for the $l$th partial wave is

$$
\sigma_\text{el}^l=\int_{\Omega}\frac{d\sigma}{d\Omega}d\Omega = \frac{4\pi}{k^2} (2l + 1) \sin^2 \delta_l = \frac{4\pi}{k^2} (2l + 1) \frac{1}{1 + \cot^2 \delta_l}.
$$

This has a maximum when $\delta_l = \pi/2$. For a spinless (there is no intrinsic spin angular momentum) beam and target, the phase can only depend on the invariant mass of the system, i.e., $\delta_l = \delta_l(E)$, where $E = \sqrt{s}$ and $s = (p_1 + p_2)^2$ is the square of the total four-momentum of the system, so the maximum will occur at some energy $E_r$, and we can make an expansion

$$
\sigma_\text{el}^l = \frac{4\pi}{k^2} (2l + 1) \frac{1}{1 + \left[ \cot \delta_l(E_r) + (E - E_r) \left( \frac{d \cot \delta_l(E)}{dE} \right)_{E = E_r} + \dots \right]^2}.
$$

In lowest order, noting that $\cot \delta_l(E_r)=0$ we have

$$
\sigma_\text{el}^l = \frac{4\pi}{k^2} (2l + 1) \frac{1}{1 + \left[\frac{ 2(E - E_r) }{\Gamma}\right]^2},
$$

where

$$
\frac{2}{\Gamma} \equiv -\left( \frac{d \cot \delta_l(E)}{dE} \right)_{E = E_r}.
$$

This is the Breit-Wigner resonance formula for a particle with lifetime $\tau = 1/\Gamma$:

$$
\sigma_\text{el}^l = \frac{4\pi}{k^2} (2l + 1) \frac{\Gamma^2 / 4}{(E - E_r)^2 + \Gamma^2 / 4}.
$$

The Breit-Wigner formula is a fundamental expression in nuclear and particle physics, describing the resonant scattering cross-section as a function of energy. It is particularly useful in characterizing systems where a temporary intermediate state, or resonance, dominates the interaction. The formula peaks at the resonance energy $ E_r $, where the cross-section is maximized, and its shape is governed by the resonance width $ \Gamma $, also known as the full width at half maximum (FWHM). This width is inversely proportional to the lifetime of the resonance, providing insights into its stability. The prefactor $ (2l + 1) $ accounts for the contribution of angular momentum $ l $, reflecting the degeneracy of the resonant state. The denominator, $ (E - E_r)^2 + \Gamma^2 / 4 $, determines the characteristic Lorentzian shape of the curve, indicating how the cross-section decreases as energy deviates from $ E_r $. The wave number $ k $ in the prefactor links the cross-section to the momentum of the incoming particle. Widely applicable in areas such as nuclear reactions, particle decay, and quantum scattering, the Breit-Wigner formula provides a quantitative framework to analyze resonant phenomena and extract physical parameters like resonance energy, width, and angular momentum.


