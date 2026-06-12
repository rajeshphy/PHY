---
title: "TikZ Diagram Studio"
summary: "A custom diagram post with a rendered TikZ figure, source code, and a short explanation for lecture use."
date: 2026-06-12 21:45:00 +0530
categories: diagram
tags:
  - tikz
  - diagram
  - quantum
permalink: /tikz-diagram-studio/
math: true
---

<section class="studio-intro">
  <p>
    TikZ is useful when a lecture figure must be precise, reproducible, and consistent with mathematical notation. The figure below sketches a finite square well with the first three bound-state energy levels.
  </p>
</section>

<figure class="diagram-figure">
  <img src="{{ '/assets/tikz/finite-well-1261x738.png' | relative_url }}" alt="TikZ finite square well diagram with three energy levels">
  <figcaption>Finite square well with bound-state levels $E_1$, $E_2$, and $E_3$.</figcaption>
</figure>

## TikZ Source

```tex
\begin{tikzpicture}
  \draw[->] (-4.2,0) -- (4.4,0) node[right] {$x$};
  \draw[->] (-4,-.3) -- (-4,4.1) node[above] {$V(x)$};
  \draw[very thick] (-3,3.1) -- (-1.5,3.1) -- (-1.5,.7) -- (1.5,.7) -- (1.5,3.1) -- (3.4,3.1);
  \foreach \y/\name in {1.15/E_1,1.8/E_2,2.45/E_3} {
    \draw[teal, thick] (-1.35,\y) -- (1.35,\y);
    \node[right] at (1.45,\y) {$\name$};
  }
  \draw[dashed] (-1.5,.2) -- (-1.5,3.35);
  \draw[dashed] (1.5,.2) -- (1.5,3.35);
  \node[below] at (-1.5,0) {$-a$};
  \node[below] at (1.5,0) {$a$};
  \node at (0,.35) {$V=0$};
  \node at (-2.35,3.45) {$V_0$};
\end{tikzpicture}
```

<section class="note-panel">
  <h2>Lecture Use</h2>
  <p>
    Use this diagram before solving the boundary conditions. It gives students a visual anchor for the regions $x<-a$, $-a<x<a$, and $x>a$ before the wavefunction matching begins.
  </p>
</section>
