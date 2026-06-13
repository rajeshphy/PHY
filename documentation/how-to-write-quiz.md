A quiz can be written directly inside any Markdown page. Each question uses simple lines: `Q`, `A`, `B`, `C`, `D`, `ANSWER`, and `EXPLAIN`.

## Syntax

{% raw %}
```liquid
{% capture quiz_questions %}
Q: Which expression gives the de Broglie wavelength?
A: $\lambda=h/p$
B: $\lambda=pc$
C: $\lambda=ma$
D: $\lambda=IR$
ANSWER: A
EXPLAIN: Matter waves satisfy $\lambda=h/p$.
---
Q: What is the canonical commutator?
A: $[x,p]=0$
B: $[x,p]=i\hbar$
C: $[x,p]=\hbar^2$
D: $[x,p]=mc$
ANSWER: B
EXPLAIN: The standard position-momentum commutator is $[x,p]=i\hbar$.
{% endcapture %}

{% include quiz.html source=quiz_questions %}
```
{% endraw %}

Use `---` between questions. The answer can be written as `A`, `B`, `C`, or `D`. LaTeX works inside the question, options, and explanation.

## Live Demonstration

{% capture quiz_questions %}
Q: Which expression gives the de Broglie wavelength?
A: $\lambda=h/p$
B: $\lambda=pc$
C: $\lambda=ma$
D: $\lambda=IR$
ANSWER: A
EXPLAIN: Matter waves satisfy $\lambda=h/p$.
---
Q: What is the canonical commutator?
A: $[x,p]=0$
B: $[x,p]=i\hbar$
C: $[x,p]=\hbar^2$
D: $[x,p]=mc$
ANSWER: B
EXPLAIN: The standard position-momentum commutator is $[x,p]=i\hbar$.
---
Q: Which operator generates time evolution?
A: $\hat{H}$
B: $\hat{x}$
C: $\hat{p}$
D: $\hat{L}_z$
ANSWER: A
EXPLAIN: The Hamiltonian $\hat{H}$ generates time evolution.
{% endcapture %}

{% include quiz.html source=quiz_questions %}
