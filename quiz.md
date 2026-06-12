---
layout: page
title: Physics Quiz
permalink: /quiz/
---

{% capture quiz_questions %}
Q: Which relation expresses mass-energy equivalence?
A: $E=mc^2$
B: $F=ma$
C: $p=mv$
D: $V=IR$
ANSWER: A
EXPLAIN: $E=mc^2$ relates rest energy to mass through the speed of light.
---
Q: For a quantum particle, what is the canonical commutator of position and momentum?
A: $[x,p]=0$
B: $[x,p]=i\hbar$
C: $[x,p]=\hbar^2$
D: $[x,p]=mc^2$
ANSWER: B
EXPLAIN: The nonzero commutator $[x,p]=i\hbar$ is the algebraic seed of uncertainty.
---
Q: Which equation is the time-dependent Schrodinger equation?
A: $i\hbar\frac{\partial \psi}{\partial t}=\hat{H}\psi$
B: $\nabla \cdot \mathbf{E}=0$
C: $E_n=nkT$
D: $\Delta x\Delta p=0$
ANSWER: A
EXPLAIN: The Hamiltonian operator controls time evolution through $i\hbar\partial_t\psi=\hat{H}\psi$.
---
Q: What does the uncertainty principle require?
A: $\Delta x\Delta p \geq \hbar/2$
B: $\Delta x\Delta p = 0$
C: $\Delta E=mc^2$
D: $\nabla \times \mathbf{E}=\rho$
ANSWER: A
EXPLAIN: Position and momentum spreads cannot both be made arbitrarily small.
---
Q: In electrostatics, Gauss law in differential form is
A: $\nabla \cdot \mathbf{E}=\rho/\epsilon_0$
B: $\nabla \times \mathbf{E}=\mu_0\mathbf{J}$
C: $\mathbf{F}=q\mathbf{v}$
D: $\hat{H}\psi=0$
ANSWER: A
EXPLAIN: Gauss law connects electric flux density to charge density.
{% endcapture %}

{% include quiz.html source=quiz_questions %}
