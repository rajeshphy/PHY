---
title: "Quiz Testing Page"
summary: "Three reusable inline quiz sets written directly inside a Markdown post, including LaTeX questions and options."
date: 2026-06-12 22:10:00 +0530
categories: quiz
tags:
  - quiz
  - latex
  - interactive
permalink: /quiz-testing/
---

This post demonstrates three quiz sets on the same page. Each set is written directly in Markdown and contains three questions.

## Set 1: Formula Basics

{% capture quiz_set_1 %}
Q: Which formula gives the rest energy of a particle?
A: $E=mc^2$
B: $E=h\nu$
C: $F=ma$
D: $p=\hbar k$
ANSWER: A
EXPLAIN: The rest energy relation is $E=mc^2$.
---
Q: Which formula gives photon energy?
A: $E=h\nu$
B: $E=mc^2$
C: $V=IR$
D: $F=ma$
ANSWER: A
EXPLAIN: Photon energy is proportional to frequency: $E=h\nu$.
---
Q: Which expression gives de Broglie wavelength?
A: $\lambda=h/p$
B: $\lambda=pc$
C: $\lambda=ma$
D: $\lambda=IR$
ANSWER: A
EXPLAIN: Matter waves satisfy $\lambda=h/p$.
{% endcapture %}

{% include quiz.html source=quiz_set_1 %}

## Set 2: Quantum Mechanics

{% capture quiz_set_2 %}
Q: What is the value of the commutator $[x,p]$?
A: $0$
B: $i\hbar$
C: $\hbar^2$
D: $mc$
ANSWER: B
EXPLAIN: The canonical commutator is $[x,p]=i\hbar$.
---
Q: Which operator generates time evolution?
A: $\hat{H}$
B: $\hat{x}$
C: $\hat{L}_z$
D: $\hat{S}$
ANSWER: A
EXPLAIN: The Hamiltonian $\hat{H}$ generates time evolution.
---
Q: Which expression is the uncertainty principle?
A: $\Delta x\Delta p \geq \hbar/2$
B: $\Delta x\Delta p = 0$
C: $\Delta E = mc^2$
D: $\nabla \cdot \mathbf{B}=\rho$
ANSWER: A
EXPLAIN: Position and momentum cannot both have arbitrarily small uncertainty.
{% endcapture %}

{% include quiz.html source=quiz_set_2 %}

## Set 3: Electromagnetism

{% capture quiz_set_3 %}
Q: In Gauss law, $\nabla \cdot \mathbf{E}$ is proportional to
A: charge density
B: magnetic flux
C: angular momentum
D: entropy
ANSWER: A
EXPLAIN: Gauss law is $\nabla \cdot \mathbf{E}=\rho/\epsilon_0$.
---
Q: Which Maxwell equation states that there are no magnetic monopoles?
A: $\nabla \cdot \mathbf{B}=0$
B: $\nabla \cdot \mathbf{E}=\rho/\epsilon_0$
C: $\nabla \times \mathbf{E}=0$
D: $\mathbf{F}=q\mathbf{E}$
ANSWER: A
EXPLAIN: The equation $\nabla \cdot \mathbf{B}=0$ means magnetic field lines have no beginning or end.
---
Q: Lorentz force on a charge is
A: $\mathbf{F}=q(\mathbf{E}+\mathbf{v}\times\mathbf{B})$
B: $\mathbf{F}=m\mathbf{v}$
C: $\mathbf{F}=q\nabla \cdot \mathbf{E}$
D: $\mathbf{F}=h\nu$
ANSWER: A
EXPLAIN: The Lorentz force combines electric and magnetic force terms.
{% endcapture %}

{% include quiz.html source=quiz_set_3 %}
