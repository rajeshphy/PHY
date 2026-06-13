LaTeX equations can be written inline inside a sentence or placed as display equations when the expression needs more space.

## Inline Equations

Write inline mathematics with single dollar signs:

```markdown
The rest energy is $E=mc^2$, and the photon energy is $E=h\nu$.
```

Rendered result:

The rest energy is $E=mc^2$, and the photon energy is $E=h\nu$.

## Display Equations

Use double dollar signs for equations that should stand alone:

```markdown
$$
i\hbar \frac{\partial \psi}{\partial t}=\hat{H}\psi
$$
```

Rendered result:

$$
i\hbar \frac{\partial \psi}{\partial t}=\hat{H}\psi
$$

## Aligned Derivation

For multi-line derivations, use `aligned` inside display math:

```tex
$$
\begin{aligned}
\hat{H}\psi
&=
\left[
-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}
+\frac{1}{2}m\omega^2x^2
\right]\psi \\
&= E\psi .
\end{aligned}
$$
```

Rendered result:

$$
\begin{aligned}
\hat{H}\psi
&=
\left[
-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}
+\frac{1}{2}m\omega^2x^2
\right]\psi \\
&= E\psi .
\end{aligned}
$$

## Mobile-Friendly Habit

Long equations can overflow on phones. Break them into aligned lines before they become too wide:

$$
\begin{aligned}
\Delta x\,\Delta p
&\geq \frac{\hbar}{2}, \\
\Delta E\,\Delta t
&\geq \frac{\hbar}{2}.
\end{aligned}
$$
