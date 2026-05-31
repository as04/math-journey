# Phase 2 — Applied / Functional Math

**Duration:** 12–16 weeks. ~60 min/day (plus 10 min daily arithmetic, forever).

**Goal:** The math you said you actually want. By the end:
- You can formulate a real scheduling problem as MILP and solve it with PuLP/Pyomo.
- You can read an applied ML or operations-research paper and follow the math.
- You can compute a Nash equilibrium for a 3×3 game by hand.
- Bayes' theorem is a *natural way of thinking*, not a memorized formula.

---

## Structure of this phase

Seven tracks. **Do not tackle them sequentially** — that's too long. **Interleave.** A reasonable weekly distribution:
- Mon/Wed/Fri: Optimization (Track D) — your main course.
- Tue/Thu: Probability & Stats (Track E).
- Sat: One of the other tracks on rotation (Discrete / LA-deep / MV-calc / Game Theory / Numerical).
- Sun: review + Project Euler problems (you should be on problems 30–80 in this phase).

This is a 60-min/day plan. If you only have 30 min, cut to two tracks at a time (Optimization + Stats).

---

## Track A — Discrete math (~3 weeks total, spread over phase)

**Why:** discrete math is the substrate of CS algorithms and the language of MILP formulations.

**Topics:**
- Counting: permutations, combinations, inclusion-exclusion.
- Generating functions (light touch).
- Graph theory: trees, BFS/DFS, shortest paths, matchings, flows, Eulerian/Hamiltonian.
- Logic & sets (refresher).

**Resources:**
- Rosen, *Discrete Mathematics and Its Applications* — encyclopedia, skim what you know.
- For graph theory specifically: Bondy & Murty, *Graph Theory*.
- Tim Roughgarden's *Algorithms* lectures (YouTube / Coursera) cover a lot of this in context.

**Self-test:** Prove that a tree with n nodes has n-1 edges. (You should be able to do this two ways: by induction and by counting.)

---

## Track B — Multivariable & vector calculus (~2 weeks)

You don't need a full MV-calc course. You need the *working parts*.

**Must learn:**
- Partial derivatives, gradient ∇f.
- Directional derivative.
- Jacobian, Hessian.
- Chain rule in multiple variables.
- Lagrange multipliers (you'll re-encounter them in optimization).
- Multiple integrals only as needed.

**Resource:** Paul's Online Math Notes "Calculus III" section. 3Blue1Brown's videos on gradients and partial derivatives. Khan Academy for problems.

**Self-test:** For f(x, y) = x² + xy + y², compute ∇f and the Hessian. Find and classify all critical points.

---

## Track C — Linear algebra, deep (~3 weeks)

You did the geometric/visual version in Phase 1. Now go deep on the *useful* algebraic machinery.

**Topics:**
- Vector spaces, subspaces, basis, dimension (proper definitions).
- Rank, nullity, the four fundamental subspaces (Strang's framing).
- Eigendecomposition: when it exists, what it means.
- SVD — the most useful decomposition in applied math. *Internalize it.*
- Positive definite matrices, Cholesky.
- Norms, inner products, orthogonality, Gram-Schmidt.

**Resources:**
- Strang, *Introduction to Linear Algebra* — Chapters 6–10.
- Trefethen & Bau, *Numerical Linear Algebra* — read at least lectures 1–5 (free PDF online).
- *3Blue1Brown — Essence of LA* eigenvector videos, again.

**Self-test:** Compute the SVD of a 2×3 matrix by hand. Then verify in NumPy. Explain what the singular values *mean*.

---

## Track D — Optimization (the main course, ~6 weeks of the phase)

This is what you came for. The MILP / convex optimization track.

### Sub-track D1: Convex optimization (3 weeks)

**Mental model:**
- A function is **convex** if it bends like a bowl. (Equivalently, second derivative ≥ 0 in 1D; Hessian PSD in general.)
- Convex problems are *the* problems we can solve efficiently and reliably. Everything else is hope.

**Curriculum:**
1. Stanford EE364a (Boyd) lectures on YouTube. ~30 lectures, watch at 1.25x.
2. Read Boyd & Vandenberghe, *Convex Optimization* (free PDF) — chapters 1–5.
3. Implement gradient descent and Newton's method from scratch in Python. Then use SciPy/CVXPY.
4. Pick one real problem from your work or hobbies. Formulate it as a convex optimization. Solve with CVXPY.

**Key concepts:**
- Convex sets, convex functions.
- The four canonical forms: LP, QP, SOCP, SDP.
- Lagrange duality, KKT conditions.
- Gradient descent, Newton's method, interior-point methods.

### Sub-track D2: Linear programming (1 week, after D1)

**Open `lessons/lp-visualizer.html`** in this repo. Play with it. The 2D LP is the entire pedagogy of LP in one picture.

**Then:**
- Simplex method, by hand, on a small problem. Once. (Don't memorize it; do it once so you have intuition for what solvers are doing.)
- Solve real problems in PuLP or CVXPY.

### Sub-track D3: MILP — Mixed Integer Linear Programming (2 weeks)

This is where things get powerful. MILP lets you model **decisions** (binary 0/1 variables) alongside continuous ones. Scheduling, routing, facility location, packing — all MILP.

**The bible:** H. Paul Williams, *Model Building in Mathematical Programming.* Read at least chapters 1–10. The whole book is about *how to formulate* problems, which is the actual hard skill.

**Tools:**
- PuLP (simple).
- Pyomo (industrial).
- Solvers: CBC (free), Gurobi (free academic license), HiGHS (free, getting very good).

**Project:** Build one real MILP. Examples:
- Weekly meal-plan optimization (minimize cost subject to nutrition constraints).
- Conference room scheduling.
- Personal travel itinerary optimization.

**Self-test:** Explain why MILP is NP-hard but LP is polynomial. Explain branch-and-bound informally.

---

## Track E — Probability + Statistics (~4 weeks over phase)

**Why this matters daily:** Stats is the math of *evidence under uncertainty.* You will use it forever — in product analytics, in evaluating studies, in reasoning about your own life.

### Sub-track E1: Probability (2 weeks)

**Resource:** Blitzstein & Hwang, *Introduction to Probability* — and the matching Stat 110 YouTube lectures.

**Topics:**
- Probability axioms, sample spaces, events.
- Conditional probability, Bayes — internalize until natural.
- Random variables: discrete (Bernoulli, binomial, Poisson, geometric) and continuous (uniform, normal, exponential, beta).
- Expectation, variance, covariance, correlation.
- Joint distributions, marginals.
- Law of large numbers, central limit theorem — *understand why CLT is amazing.*

### Sub-track E2: Statistics (2 weeks)

**Resource:** Wasserman, *All of Statistics* — terse but exactly the right book for someone with math chops.

**Topics:**
- Estimation: MLE, MoM.
- Hypothesis testing — *and its critique* (read about p-hacking, the replication crisis).
- Confidence intervals (the actual meaning, not the wrong-but-common interpretation).
- Bootstrap.
- Bayesian inference — what posteriors are, why they're often more useful than frequentist tools.
- Linear regression as the workhorse model.

**Project:** Take a real dataset (Kaggle, your work logs, anything). Compute basic descriptive stats, fit a regression, do a hypothesis test. Write up what you found.

---

## Track F — Game theory (~2 weeks)

**Resource:** Tadelis, *Game Theory: An Introduction.* Modern, clean. (Alternative: Osborne, free PDF online.)

**Topics:**
- Normal-form games, dominance.
- Nash equilibrium (pure and mixed). Compute by hand for 2×2 and 3×3 games.
- Extensive-form games, backward induction.
- Subgame-perfect equilibrium.
- Repeated games (folk theorem intuition).
- Bayesian games (incomplete information).
- Mechanism design and auctions (a glimpse — go deeper later if interested).

**Self-test:** Compute the mixed-strategy Nash equilibrium for matching pennies, by hand.

---

## Track G — Numerical methods (light, ~1 week)

You don't need a full numerical methods course in Phase 2. You need to *not be naive about floating point.*

**Reading:** Goldberg, "What Every Computer Scientist Should Know About Floating-Point Arithmetic" — one of the most cited tech papers ever. Read it.

**Plus:**
- Watch a couple of Trefethen lectures on YouTube to get the flavor.
- Know what *condition number* means and why it matters.
- Know why solving Ax = b should never be done by computing A⁻¹ then multiplying.

---

## Project Euler track

By the end of Phase 2, you should have solved 50–80 Project Euler problems. Many require Phase 2 math — number theory, dynamic programming, combinatorial counting.

---

## Exit criteria for Phase 2

- [ ] You've built and solved at least one real MILP for a problem from your life.
- [ ] You can read and follow the math in an ML paper (e.g. a NeurIPS optimization or stats paper).
- [ ] You've solved 50+ Project Euler problems.
- [ ] You can derive Bayes' theorem from definitions, in 30 seconds, without notes.
- [ ] You can explain SVD geometrically and use it for a real task (e.g. low-rank approximation of an image).
- [ ] You can compute a 3×3 Nash equilibrium by hand.

When all six are checked, you're ready for [Phase 3 — Mathematician Intuition](PHASE-3-mathematician.md).

At this point you are, by any reasonable definition, *good at math.* The remaining phases are about depth, rigour, and taste.
