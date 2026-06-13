---
title: "Canonical Maps"
summary: "Canonical transformations, generating functions, and infinitesimal generators in Hamiltonian mechanics."
date: 2026-05-04 09:10:00 +0530
categories:
  - notes
  - msc
  - lecture
tags:
  - msc
  - semester-i
  - classical-mechanics
  - canonical-transformations
  - generating-functions
permalink: /msc/sem-i/canonical-maps/
hidden: true
---

Hamilton–Jacobi theory naturally extends to canonical transformations because the action function $S$ itself behaves like a generating function. This extension clarifies why Hamiltonian mechanics can be simplified by changing phase-space variables and how continuous symmetry transformations arise from infinitesimal generators.

## Canonical transformations

In Hamiltonian mechanics, the state of a system is described by canonical coordinates and momenta $(q_i,p_i)$. A transformation to new variables $(Q_i,P_i)$ is called a canonical transformation **if the new variables also satisfy Hamilton’s equations in canonical form.** The importance of such transformations is that they preserve the structure of mechanics while possibly making the problem much simpler.

The differential form of Hamilton’s principal function is

$$
dS=\sum_i p_i\,dq_i-H\,dt
$$

Suppose we transform to new variables $(Q_i,P_i)$ with a new Hamiltonian $K$. Then the corresponding canonical differential form is

$$
dS'=\sum_i P_i\,dQ_i-K\,dt
$$

A transformation is canonical if the difference between the old and new one-forms is an exact differential. Thus one requires

$$
\sum_i p_i\,dq_i-H\,dt-\left(\sum_i P_i\,dQ_i-K\,dt\right)=dF
$$

where $F$ is some function. **This is the basic condition for a canonical transformation.** It means that the equations of motion preserve their Hamiltonian form under the transformation.

Thus canonical transformations preserve the symplectic structure of phase space. They do not merely change coordinates; they preserve the dynamical framework itself.


<div style="background:linear-gradient(135deg,#f8fbff 0%,#eef4ff 100%); border:1px solid #d6e4ff; border-radius:18px; padding:22px; box-shadow:0 10px 30px rgba(30,60,120,0.08);">


Starting with the canonical condition

$$
\sum_i p_i\,dq_i-\sum_i P_i\,dQ_i+(K-H)\,dt=dF
$$

We decide which variables $F$ depends on, we expand $dF$ in terms of those variables and then compare coefficients of the independent differentials.

For example, if

$$
F_1=F_1(q_i,Q_i,t)
$$

then its exact differential is

$$
dF_1=\sum_i \frac{\partial F_1}{\partial q_i}\,dq_i+\sum_i \frac{\partial F_1}{\partial Q_i}\,dQ_i+\frac{\partial F_1}{\partial t}\,dt
$$

But from the canonical condition,

$$
dF_1=\sum_i p_i\,dq_i-\sum_i P_i\,dQ_i+(K-H)\,dt
$$

Now compare coefficients of the same independent differentials:
<ul>
  <li>coefficient of $dq_i$:</li>
</ul>

$$
\frac{\partial F_1}{\partial q_i}=p_i
$$

<ul>
  <li>coefficient of $dQ_i$:</li>
</ul>

$$
\frac{\partial F_1}{\partial Q_i}=-P_i
$$

<ul>
  <li>coefficient of $dt$:</li>
</ul>

$$
\frac{\partial F_1}{\partial t}=K-H
$$
Hence

$$
p_i=\frac{\partial F_1}{\partial q_i},\qquad
P_i=-\frac{\partial F_1}{\partial Q_i},\qquad
K=H+\frac{\partial F_1}{\partial t}
$$

That is what is meant by “expand $dF$ and compare coefficients.”
<br>
<strong>Now suppose we do not want the generating function in terms of $Q_i$.</strong> We want a new generating function in terms of $P_i$ instead. Since $P_i$ is related to $Q_i$ by

$$

P_i=-\frac{\partial F_1}{\partial Q_i}

$$

the natural way to replace the variable $Q_i$ by its conjugate quantity $P_i$ is by a <strong>Legendre transform</strong>.

So define

$$

F_2(q_i,P_i,t)=F_1(q_i,Q_i,t)+\sum_i Q_iP_i

$$

This is exactly the Legendre transformation of $F_1$ with respect to $Q_i$ because:
<ul>
    <li> old independent variable: $Q_i$ </li>

    <li> conjugate derivative variable: $-P_i=\dfrac{\partial F_1}{\partial Q_i}$ </li>
</ul>

The plus sign appears because

$$

P_i=-\frac{\partial F_1}{\partial Q_i}

$$

If the sign had been positive, the Legendre term would have appeared with a minus sign instead.



Now differentiate:

$$
dF_2=dF_1+\sum_i Q_i\,dP_i+\sum_i P_i\,dQ_i
$$

Using the canonical condition for $F_1$,

$$
dF_1=\sum_i p_i\,dq_i-\sum_i P_i\,dQ_i+(K-H)\,dt
$$

we get

$$
dF_2=\sum_i p_i\,dq_i+\sum_i Q_i\,dP_i+(K-H)\,dt
$$

Since $F_2=F_2(q_i,P_i,t)$, its exact differential is also

$$
dF_2=\sum_i \frac{\partial F_2}{\partial q_i}\,dq_i+\sum_i \frac{\partial F_2}{\partial P_i}\,dP_i+\frac{\partial F_2}{\partial t}\,dt
$$

Now compare coefficients of the independent differentials $dq_i$, $dP_i$, and $dt$. This gives

$$
p_i=\frac{\partial F_2}{\partial q_i},\qquad
Q_i=\frac{\partial F_2}{\partial P_i},\qquad
K=H+\frac{\partial F_2}{\partial t}
$$

So here “expansion” means writing the total differential of $F_2$ in its chosen variables, but the crucial missing step is that the canonical one-form must first be rewritten in terms of $dq_i$, $dP_i$, and $dt$.


</div>



## Generating functions

The function $F$ appearing above is called a generating function. Depending on which old and new variables are chosen as independent arguments, there are four standard types of generating functions.
<div style="background:linear-gradient(135deg,#f8fbff 0%,#eef4ff 100%); border:1px solid #d6e4ff; border-radius:18px; padding:22px; box-shadow:0 10px 30px rgba(30,60,120,0.08);">

  <div style="text-align:center; margin-bottom:18px;">
    <span style="display:inline-block; background:#2b6cb0; color:white; padding:8px 18px; border-radius:999px; font-size:0.95rem; font-weight:700; letter-spacing:0.5px;">
      Generating Functions: Four Standard Forms
    </span>
  </div>

  <div style="display:grid; gap:16px;">

    <div style="background:white; border-left:6px solid #2b6cb0; border-radius:14px; padding:16px 18px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
      <p style="margin:0 0 10px 0; font-size:1.05rem; font-weight:700; color:#1a365d;">
        If $F_1 = F_1(q,Q,t)$, then
      </p>
      <div style="background:#f7faff; border-radius:10px; padding:12px 14px;">
        $$
        p_i=\frac{\partial F_1}{\partial q_i}, \qquad
        P_i=-\frac{\partial F_1}{\partial Q_i}, \qquad
        K=H+\frac{\partial F_1}{\partial t}
        $$
      </div>
    </div>

    <div style="background:white; border-left:6px solid #38a169; border-radius:14px; padding:16px 18px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
      <p style="margin:0 0 10px 0; font-size:1.05rem; font-weight:700; color:#22543d;">
        If $F_2 = F_2(q,P,t)$, then
      </p>
      <div style="background:#f7fff9; border-radius:10px; padding:12px 14px;">
        $$
        p_i=\frac{\partial F_2}{\partial q_i}, \qquad
        Q_i=\frac{\partial F_2}{\partial P_i}, \qquad
        K=H+\frac{\partial F_2}{\partial t}
        $$
      </div>
    </div>

    <div style="background:white; border-left:6px solid #d69e2e; border-radius:14px; padding:16px 18px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
      <p style="margin:0 0 10px 0; font-size:1.05rem; font-weight:700; color:#744210;">
        If $F_3 = F_3(p,Q,t)$, then
      </p>
      <div style="background:#fffdf7; border-radius:10px; padding:12px 14px;">
        $$
        q_i=-\frac{\partial F_3}{\partial p_i}, \qquad
        P_i=-\frac{\partial F_3}{\partial Q_i}, \qquad
        K=H+\frac{\partial F_3}{\partial t}
        $$
      </div>
    </div>

    <div style="background:white; border-left:6px solid #805ad5; border-radius:14px; padding:16px 18px; box-shadow:0 4px 14px rgba(0,0,0,0.05);">
      <p style="margin:0 0 10px 0; font-size:1.05rem; font-weight:700; color:#44337a;">
        If $F_4 = F_4(p,P,t)$, then
      </p>
      <div style="background:#faf7ff; border-radius:10px; padding:12px 14px;">
        $$
        q_i=-\frac{\partial F_4}{\partial p_i}, \qquad
        Q_i=\frac{\partial F_4}{\partial P_i}, \qquad
        K=H+\frac{\partial F_4}{\partial t}
        $$
      </div>
    </div>

  </div>
</div>
Among these, the type-$2$ generating function is especially important in Hamilton–Jacobi theory. If one writes

$$
F_2(q,P,t)=S(q,P,t)
$$

then

$$
p_i=\frac{\partial S}{\partial q_i}, \qquad
Q_i=\frac{\partial S}{\partial P_i}
$$

If the new Hamiltonian is chosen to vanish,

$$
K=K(Q,P)=0
$$

then the condition

$$
K=H+\frac{\partial S}{\partial t}=0
$$

becomes

$$
\frac{\partial S}{\partial t}+H\left(q_i,\frac{\partial S}{\partial q_i},t\right)=0
$$

which is precisely the Hamilton–Jacobi equation. **Thus Hamilton–Jacobi theory is the special case of a canonical transformation generated by $S$ that transforms the dynamics into a trivial one with constant new variables.**

This also explains the origin of the constants in Hamilton–Jacobi theory. If $P_i=\alpha_i$, then

$$
Q_i=\frac{\partial S}{\partial \alpha_i}=\beta_i
$$

and because $K=0$, Hamilton’s equations in the new variables give

$$
\dot p_i=0, \qquad \dot Q_i=0
$$

Hence both $\alpha_i$ and $\beta_i$ are constants.

## Infinitesimal Canonical Transformations

Take an infinitesimal canonical transformation as one which is very close to the identity transformation:

$$
Q_i=q_i+\delta q_i,\qquad P_i=p_i+\delta p_i
$$

where $\delta q_i$ and $\delta p_i$ are very small quantities of first order in a small parameter $\varepsilon$.

Now begin with a **type-2 generating function** and choose it in the form

$$
F_2(q,P,t)=\sum_i q_iP_i+\varepsilon G(q,P,t)
$$

Here:

- $\sum_i q_iP_i$ gives the identity transformation
- $\varepsilon G$ gives a small deviation from identity
- $G$ is called the **infinitesimal generator**

**Why $\sum_i q_iP_i$ gives identity**

For a type-2 generating function, the transformation equations are

$$
p_i=\frac{\partial F_2}{\partial q_i},\qquad
Q_i=\frac{\partial F_2}{\partial P_i}
$$

If

$$
F_2=\sum_i q_iP_i
$$

then

$$
p_i=P_i,\qquad Q_i=q_i
$$

So the old and new variables are the same. Hence this is the identity transformation.

**Add a small correction**

Now take

$$
F_2(q,P,t)=\sum_i q_iP_i+\varepsilon G(q,P,t)
$$

Then

$$
p_i=\frac{\partial F_2}{\partial q_i}
= P_i+\varepsilon \frac{\partial G}{\partial q_i}
$$

and

$$
Q_i=\frac{\partial F_2}{\partial P_i}
= q_i+\varepsilon \frac{\partial G}{\partial P_i}
$$

Since the transformation is infinitesimal, the difference between $P_i$ and $p_i$ is already of order $\varepsilon$. Therefore, inside first-order terms, we may replace $P_i$ by $p_i$. Thus

$$
Q_i=q_i+\varepsilon \frac{\partial G}{\partial p_i}
$$

Hence

$$
\delta q_i=Q_i-q_i=\varepsilon \frac{\partial G}{\partial p_i}
$$

Now from

$$
p_i=P_i+\varepsilon \frac{\partial G}{\partial q_i}
$$

we get

$$
P_i=p_i-\varepsilon \frac{\partial G}{\partial q_i}
$$

Therefore

$$
\delta p_i=P_i-p_i=-\varepsilon \frac{\partial G}{\partial q_i}
$$

So the infinitesimal canonical transformation is

$$
\boxed{\delta q_i=\varepsilon \frac{\partial G}{\partial p_i},\qquad
\delta p_i=-\varepsilon \frac{\partial G}{\partial q_i}}
$$

## Why this looks like Hamilton’s equations

Hamilton’s equations are

$$
\dot q_i=\frac{\partial H}{\partial p_i},\qquad
\dot p_i=-\frac{\partial H}{\partial q_i}
$$

Now compare with

$$
\delta q_i=\varepsilon \frac{\partial G}{\partial p_i},\qquad
\delta p_i=-\varepsilon \frac{\partial G}{\partial q_i}
$$

Dividing by $\varepsilon$,

$$
\frac{\delta q_i}{\varepsilon}=\frac{\partial G}{\partial p_i},\qquad
\frac{\delta p_i}{\varepsilon}=-\frac{\partial G}{\partial q_i}
$$

This has exactly the same structure as Hamilton’s equations, except that:

- $H$ is replaced by $G$
- time $t$ is replaced by the transformation parameter $\varepsilon$

So $G$ generates motion in phase space with respect to $\varepsilon$, just as $H$ generates motion with respect to time.

## Main idea

- $H$ generates **time evolution**
- $G$ generates a **canonical transformation**
- infinitesimal means the transformation is only a very small step away from identity
- a finite canonical transformation can be built by repeating many such infinitesimal steps




These relations have exactly the same form as Hamilton’s equations, except that the evolution parameter is now $\varepsilon$ instead of time.

Using Poisson brackets, these can be written compactly as

$$
\delta q_i=\varepsilon \{q_i,G\}, \qquad
\delta p_i=\varepsilon \{p_i,G\}
$$

and for any dynamical quantity $f(q,p,t)$,

$$
\delta f=\varepsilon \{f,G\}
$$

Thus the infinitesimal generator produces canonical transformations through Poisson brackets. This is the phase-space analogue of the way a generator produces a continuous symmetry in other branches of physics.

## Meaning of the generator

The generator $G$ determines the direction in which the phase-space point moves under the infinitesimal transformation. Different choices of $G$ produce different transformations.

If

$$
G=p
$$

for one degree of freedom, then

$$
\delta q=\varepsilon, \qquad \delta p=0
$$

which is a translation in coordinate.

If

$$
G=-q
$$

then

$$
\delta q=0, \qquad \delta p=\varepsilon
$$

which is a translation in momentum.

If the Hamiltonian itself acts as the generator, then

$$
\delta q_i=\varepsilon \frac{\partial H}{\partial p_i}, \qquad
\delta p_i=-\varepsilon \frac{\partial H}{\partial q_i}
$$

which is exactly the time development of the system for an interval $\varepsilon$. Therefore the Hamiltonian is the generator of time evolution.

## Relation with Poisson brackets and conservation laws

For any quantity $f(q,p,t)$, the total time evolution is

$$
\frac{df}{dt}=\{f,H\}+\frac{\partial f}{\partial t}
$$

If a quantity $G$ has no explicit time dependence and satisfies

$$
\{G,H\}=0
$$

then

$$
\frac{dG}{dt}=0
$$

so $G$ is conserved. Hence conserved quantities are deeply connected with generators. A symmetry generator that leaves the Hamiltonian unchanged gives a constant of motion.

This idea links canonical transformations with conservation laws and prepares the way for more advanced ideas such as action-angle variables, Lie transformations, and Noether-type symmetry analysis in Hamiltonian form.

## Main points

- A canonical transformation preserves Hamilton’s equations in canonical form.
- The condition for canonicity is that the difference of the old and new phase-space one-forms is an exact differential.
- That exact differential defines a generating function.
- There are four standard types of generating functions.
- Hamilton–Jacobi theory is a special canonical transformation generated by $S$ with new Hamiltonian $K=0$.
- Infinitesimal canonical transformations are generated by a function $G$.
- The change of any quantity under an infinitesimal canonical transformation is given by its Poisson bracket with $G$.
- The Hamiltonian itself is the generator of time evolution.

## Practice questions

1. Show that a transformation is canonical if the difference between the old and new phase-space one-forms is an exact differential.
2. Derive the relations for the type-$2$ generating function $F_2(q,P,t)$.
3. Explain how Hamilton’s principal function $S$ acts as a generating function in Hamilton–Jacobi theory.
4. Prove that an infinitesimal canonical transformation generated by $G$ preserves Poisson bracket structure.
5. Show that the Hamiltonian generates time translations in phase space.