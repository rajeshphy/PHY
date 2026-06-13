---
title: "Compound-Nucleus Reactions"
summary: "Compound-nucleus formation, statistical decay, cross-section systematics, and angular distributions."
date: 2026-04-13 12:00:00 +0530
categories:
  - notes
  - msc
  - lecture
tags:
  - msc
  - semester-iii
  - nuclear-physics
  - compound-nucleus
  - reactions
permalink: /msc/sem-iii/compound-nucleus-reactions/
hidden: true
---

When an incident particle approaches a target nucleus with impact parameter smaller than the nuclear radius, it can interact strongly with individual nucleons. After the initial encounter, the incident particle and recoiling nucleon undergo successive collisions inside the nucleus, progressively redistributing energy among many degrees of freedom. With small probability, a nucleon (or light cluster) acquires sufficient energy to escape, in close analogy with evaporation from a heated liquid.

## Reaction Scheme and Two-Step Mechanism

The compound-nucleus picture represents the reaction as the formation of an intermediate, highly excited nucleus followed by its decay:

$$
a + X \to C^* \to Y + b
$$

Here $C^*$ denotes the compound nucleus. A compact notation for the overall process is

$$
X(a,b)Y
$$

The mechanism is conventionally separated into:
- Formation of the compound nucleus $C^*$.
- Decay of $C^*$ into a particular exit channel.

A central assumption is that the relative probability for decay into specific final products is independent of how $C^*$ was formed. Under this hypothesis, decay branching depends only on the total excitation energy and is governed by statistical considerations.

## Illustrative Example and Cross-Section Systematics

<img src="{{ '/assets/images/msc/sem-iii/Compound-nuclear.jpeg' | relative_url }}" alt="Compound nucleus formation channels" class="my-custom-class" style="max-width:100%; height:auto;">

A representative case is the compound nucleus $^{64}\mathrm{Zn}^*$, which may be formed through distinct entrance channels such as
- $p + {}^{63}\mathrm{Cu}$,
- $\alpha + {}^{60}\mathrm{Ni}$.

Possible decay modes include, for example,
- ${}^{63}\mathrm{Zn} + n$,
- ${}^{62}\mathrm{Zn} + 2n$,
- ${}^{62}\mathrm{Cu} + p + n$.

If the compound-nucleus hypothesis holds, reactions that populate the same compound nucleus at the same excitation energy should exhibit similar relative cross-sections for corresponding decay channels. Thus, processes such as ${}^{63}\mathrm{Cu}(p,n){}^{63}\mathrm{Zn}$ and ${}^{60}\mathrm{Ni}(\alpha,n){}^{63}\mathrm{Zn}$ are expected to align when the incident energies are chosen to produce the same excitation energy in $^{64}\mathrm{Zn}^*$.

<div style="text-align: center;">
  <img src="{{ '/assets/images/msc/sem-iii/Compound-nuclear-cross.jpeg' | relative_url }}" alt="Cross-section comparison for different entrance channels" class="my-custom-class" style="max-width:80%; height:auto;">
  <figcaption>Figure-1: Experimental cross sections for $(p,n)$, $(p,2n)$, $(p,pn)$ reactions on $^{63}\mathrm{Cu}$ and for $(\alpha,n)$, $(\alpha,2n)$, $(\alpha,pn)$ reactions on $^{60}\mathrm{Ni}$ plotted against $E_p$ and $E_\alpha$, respectively, with the $E_p$ scale shifted by 7 MeV relative to $E_\alpha$. Source: S. N. Goshal, Phys. Rev. 80, 939 (1950).</figcaption>
</div>

## Conditions and Characteristic Angular Behaviour

The model is most effective when the incident energy is low enough that the projectile is unlikely to escape intact, typically in the range

$$
10\text{--}20\ \mathrm{MeV}
$$

It is also most applicable to medium-weight and heavy nuclei, where the nuclear system can efficiently absorb and randomize the incident energy.

Because the decay proceeds after substantial equilibration, emission is generally close to isotropic in angle. A notable exception arises for heavy-ion reactions with significant angular momentum transfer, where preferential emission may appear near $0^\circ$ and $180^\circ$.

<div style="text-align: center;">
  <img src="{{ '/assets/images/msc/sem-iii/Compound-nuclear-angular.jpeg' | relative_url }}" alt="Angular dependence of compound and direct contributions" class="my-custom-class" style="max-width:80%; height:auto;">
  <figcaption>Figure-2: The curve marked NC shows the compound-nucleus contribution to the cross-section of $^{25}\mathrm{Mg}(p,p)^{25}\mathrm{Mg}$, while ID denotes the direct-reaction component. The direct part exhibits strong angular dependence, whereas the compound part is comparatively weakly dependent on angle. Source: A. Gallmann et al., Nucl. Phys. 88, 654 (1966).</figcaption>
</div>

## Energy Dependence and the Evaporation Analogy

In the evaporation picture, increasing excitation energy raises the likelihood of emitting additional particles. Consequently, channels of the form $(a,xn)$ typically show a rise of cross-section to a maximum, followed by a decline as still higher excitation energies favor emission of more particles (shifting strength into channels with larger multiplicity).

<div style="text-align: center;">
  <img src="{{ '/assets/images/msc/sem-iii/Compound-nuclear-energy.jpeg' | relative_url }}" alt="Energy dependence and increased neutron evaporation" class="my-custom-class" style="max-width:100%; height:auto;">
  <figcaption>Figure-3: At higher incident energies, additional neutrons are more likely to “evaporate” from the compound nucleus, redistributing reaction yield among higher-multiplicity channels.</figcaption>
</div>

