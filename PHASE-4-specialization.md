# Phase 4 — Specialization

**Duration:** Ongoing. No fixed end.

**Goal:** Become genuinely strong in the *applied* areas you said matter daily: **statistics, econometrics, numerical methods, economics.** With Phase 3 mathematical maturity behind you, these books that would have been opaque before now read clearly.

---

## How this phase differs

By Phase 4 you can:
- Read a real textbook at the speed of one chapter a week.
- Tell when an author is hand-waving vs. being rigorous, and when each is appropriate.
- Self-direct: you no longer need a curriculum, you can build your own.

So this file is less a *plan* and more a *menu* — pick the tracks that match your interests and life situation.

---

## Track 1 — Statistics, deep

**Why:** Stats is the most universally useful applied math there is. If you only do one track in Phase 4, do this.

**Path:**
1. **Gelman, Hill & Vehtari — *Regression and Other Stories.*** A wonderful book that re-grounds you in applied regression with modern (Bayesian-flavored, but accessible) sensibility. Read cover-to-cover with a dataset open in R or Python.
2. **Gelman et al. — *Bayesian Data Analysis (BDA3).*** The bible of Bayesian stats. Will take months. Worth every hour.
3. **Murphy — *Probabilistic Machine Learning: An Introduction* and *Advanced Topics.*** Reference texts. The connection between stats and ML in one source.

**Practical skills to build alongside reading:**
- R (yes, even if you primarily use Python — many stats books use R, and the tooling for statistics in R is still better than in Python).
- Stan, PyMC, or NumPyro for Bayesian modeling.

**Projects:**
- Take a dataset from your life or work. Fit a hierarchical Bayesian model. Compare to a frequentist counterpart. Write up the differences.
- Replicate one figure or finding from a paper you respect.

---

## Track 2 — Econometrics

**Why:** Econometrics is where statistics meets *causal inference*. The "does X cause Y" question is fundamentally different from "does X correlate with Y," and econometrics is the field that has thought hardest about the difference.

**Path:**
1. **Wooldridge — *Introductory Econometrics: A Modern Approach.*** The standard graduate intro. Comprehensive, careful.
2. **Angrist & Pischke — *Mostly Harmless Econometrics.*** The most readable book on causal inference ever written. Short. Funny. Indispensable. Read it twice.
3. **Imbens & Rubin — *Causal Inference for Statistics, Social, and Biomedical Sciences.*** The deep one. Read when you've digested Angrist.

**Key concepts to internalize:**
- Endogeneity, instrumental variables.
- Difference-in-differences.
- Regression discontinuity.
- Propensity-score methods.
- Potential outcomes framework (Rubin).
- The "credibility revolution" in empirical economics.

**Projects:**
- Find a public policy change (a tax change, a regulation). Design a DiD or RDD to evaluate its effect using a public dataset.
- Read one paper from the latest *American Economic Review* and reproduce its main result.

---

## Track 3 — Numerical Methods

**Why:** Numerical analysis is the math of how computers compute. Every scientific computation, every ML training run, every simulation rests on these foundations. As a CS person, this is *your* applied math.

**Path:**
1. **Trefethen & Bau — *Numerical Linear Algebra.*** Re-read. Now with Phase 3 maturity, the proofs land differently.
2. **Trefethen — *Approximation Theory and Approximation Practice.*** Beautiful book. The math of polynomial / rational approximation.
3. **Press et al. — *Numerical Recipes.*** Use as reference. Don't read cover-to-cover.
4. **Heath — *Scientific Computing.*** Broad survey of numerical analysis topics.

**Topics:**
- Numerical linear algebra: LU, QR, SVD, iterative methods.
- Numerical ODE/PDE solvers.
- Optimization (already covered in Phase 2, but go deeper here).
- Quadrature and spectral methods.
- Stability and conditioning, throughout.

**Projects:**
- Implement a small ODE solver (RK4) from scratch. Compare to SciPy's. Where do they agree, where do they diverge?
- Build a tiny finite-element solver for the 1D heat equation.

---

## Track 4 — Economics

You said econ is useful in daily life. It is. Especially microeconomics.

**Path:**
1. **Varian — *Intermediate Microeconomics: A Modern Approach.*** Standard undergraduate text. Read it; it'll change how you see prices, choices, and incentives in everyday life.
2. **Varian — *Microeconomic Analysis.*** The graduate companion. More math, deeper.
3. **Mas-Colell, Whinston & Green — *Microeconomic Theory.*** The reference text. Only if you really want to go pro.

**Topics worth absorbing as life-skills:**
- Opportunity cost (the central economic idea).
- Marginal thinking.
- Elasticity.
- Consumer theory: indifference curves, utility maximization.
- Producer theory: cost curves, profit max.
- Game-theoretic foundations of competition.
- Welfare economics, externalities, public goods.
- Market failures.

**Macro:** Skip in early Phase 4 unless interested. Mankiw's intro text is the gentle entry; Romer's *Advanced Macroeconomics* is the next step.

---

## Track 5 — Pick-your-own

Other Phase 4 directions worth considering depending on your interests:

- **Information theory:** Cover & Thomas, *Elements of Information Theory*. Underrated for ML.
- **Functional analysis:** Kreyszig (intro), Rudin (graduate). For PDE, quantum, advanced optimization.
- **Differential equations (PDEs):** Evans, *Partial Differential Equations*. For physics-adjacent fields.
- **Mathematical logic / category theory:** Awodey, *Category Theory*. If type theory or pure math hooks you.
- **Cryptography (number theory):** Hoffstein, Pipher, Silverman, *Mathematical Cryptography*.

---

## Daily structure in Phase 4

There's no longer a one-size schedule. A common shape:

- **30 min/day** on your current main track (e.g. BDA chapter).
- **15 min/day** on whichever track you're keeping warm.
- **One paper/article a week** in a track you're not actively studying — keep multiple plates spinning slowly.
- **Daily arithmetic drill** — still 10 min. Forever.

---

## Signals you've "made it"

You're in Phase 4 indefinitely; there's no exit. But signals you've achieved real competence:

- [ ] You can give a 20-minute talk on any subtopic of your main track without preparation.
- [ ] You write code that uses these methods correctly, and *know why it's correct.*
- [ ] You can spot statistical / methodological errors in published work (this is harder than it sounds — about half of published applied stats has issues).
- [ ] You enjoy reading math papers in your tracks the way other people enjoy reading novels.

When you hit that point, the math journey is no longer self-improvement — it's your normal mode of thought.

See [Phase 5](PHASE-5-lifelong.md) for the lifelong-maintenance practices.
