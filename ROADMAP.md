# Roadmap

The full plan. Six phases. Each phase has a separate detailed file; this is the overview.

---

## Phase 0 — Arithmetic Fluency (2–4 weeks)

**Goal:** Kill the fear. You used to multiply triple-digit numbers in your head. You can do it again. Two-digit × two-digit in under 5 seconds, in your head, with confidence.

**Daily:** 10–15 min mental drill. Use `lessons/arithmetic-drill.html`. Or pen-and-paper. Or Anki.

**Techniques to learn (one per week):**
- Week 1: left-to-right addition and subtraction. Estimation. Round-then-correct.
- Week 2: Vedic cross-multiplication (Urdhva-Tiryagbhyam) for 2×2 and 3×2.
- Week 3: squaring tricks (numbers ending in 5, near 100, near 50). Fast divisibility tests.
- Week 4: Fermi problems. Sanity-check large numbers. "How many piano tuners in Chicago?"

**Exit criteria:** 2×2 multiplication in under 5 seconds. 3×3 in under 20. You can estimate a restaurant bill faster than your friend can find their calculator.

Detailed plan: [`PHASE-0-arithmetic.md`](PHASE-0-arithmetic.md).

---

## Phase 1 — Foundations (6–10 weeks)

**Goal:** Everything you learned in school + first-year college, but *understood* this time, not memorized. When you watch 3Blue1Brown, the math is familiar, not alien.

**Topics, in order:**
1. **Algebra fluency** — manipulate expressions without panic. Factoring, polynomials, completing the square.
2. **Functions & graphs** — function-as-machine, transformations, inverses.
3. **Trigonometry from the unit circle** — not from SOH-CAH-TOA. Identities as geometric facts.
4. **Single-variable calculus** — derivative as rate, integral as accumulation. Watch all of 3B1B's *Essence of Calculus* (highest-leverage 3 hours in your math life).
5. **Linear algebra, geometrically** — 3B1B's *Essence of Linear Algebra*. Then exercises from Strang.
6. **Probability basics** — sample spaces, conditional, Bayes from first principles.

**Resources:**
- 3Blue1Brown's *Essence of...* playlists. Watch each video twice.
- Khan Academy for exercises when you need reps.
- Project Euler problems 1–30 (use only basic tools — these problems were designed for this level).

**Exit criteria:** You can re-derive the chain rule on a napkin. You can explain a matrix as a linear transformation without notes. You've solved 20+ Project Euler problems.

Detailed plan: [`PHASE-1-foundations.md`](PHASE-1-foundations.md).

---

## Phase 2 — Applied / Functional Math (12–16 weeks)

**Goal:** The math you actually wanted when you said "useful for CS." MILP. Optimization. Game theory. Stats. The math that pays the bills and wins the arguments.

**Tracks (interleave them):**

### A. Discrete math
- Combinatorics (Tucker or Rosen).
- Graph theory (Bondy & Murty, or Diestel light).
- Why: discrete math is the substrate of CS algorithms and optimization formulations.

### B. Multivariable + vector calculus (just the working parts)
- Partial derivatives, gradient, Jacobian, Hessian.
- Multiple integrals as needed.
- Why: gradient = the engine of every ML optimizer; Jacobian = how vector functions change.

### C. Linear algebra, deep
- Eigenvalues/vectors, SVD, rank, null space, change of basis.
- Trefethen & Bau, *Numerical Linear Algebra* (read first 5 lectures even if you don't go deep).
- Why: this is the *single most reused* math in CS.

### D. Optimization — the main course
- Convex optimization: Boyd's free book + Stanford CVX101 lectures on YouTube.
- Linear programming: simplex method by hand once. Then PuLP / CVXPY in Python.
- MILP: H. Paul Williams, *Model Building in Mathematical Programming* — the bible. Pair with practical MILP modeling in Pyomo or PuLP.
- Why: real-world decision problems live here.

### E. Probability + statistics
- Blitzstein, *Introduction to Probability* (also a free Harvard Stat 110 lecture series).
- Then: Wasserman, *All of Statistics* (terse but excellent for someone with math background).
- Why: stats is everywhere. Bayes will rewire how you think about evidence.

### F. Game theory
- Tadelis, *Game Theory: An Introduction* (clean, modern).
- Or Osborne, *An Introduction to Game Theory*.
- Why: strategic reasoning, mechanism design, auction theory — useful far beyond economics.

### G. Numerical methods (light)
- Floating-point representation and pitfalls (read "What Every Computer Scientist Should Know About Floating Point" by Goldberg).
- Why: every numerical bug you'll ever hit traces back to these ideas.

**Exit criteria:**
- You can formulate a real scheduling problem as a MILP and solve it with PuLP.
- You can read an applied paper that uses optimization or stats and follow the math.
- You can explain Nash equilibrium and compute one by hand for a 3×3 game.

Detailed plan: [`PHASE-2-applied.md`](PHASE-2-applied.md).

---

## Phase 3 — Mathematician Intuition (6+ months, open-ended)

**Goal:** Think like a mathematician. Read proofs. Write proofs. Develop the taste for what makes a statement *interesting*. Topology, analysis, algebra.

**Track 1 — Real Analysis (the bridge to rigor)**
- Abbott, *Understanding Analysis* (the friendliest rigorous intro — written for exactly your situation).
- Then optionally: Rudin, *Principles of Mathematical Analysis* (the classic, terse).

**Track 2 — Topology (your stated interest)**
- Start with intuition: Jeffrey Weeks, *The Shape of Space* — readable, beautiful, no prerequisites.
- Then rigour: Armstrong, *Basic Topology*, or Munkres, *Topology* (the standard).
- Algebraic topology if you fall in love: Hatcher, *Algebraic Topology* (free PDF from author).

**Track 3 — Abstract Algebra**
- Pinter, *A Book of Abstract Algebra* (gentle, story-driven).
- Then Dummit & Foote if you want the encyclopedia.

**Track 4 — Differential geometry (optional, if topology hooks you)**
- Pressley, *Elementary Differential Geometry*.

**How to study at this level:**
- Read with pen in hand. Re-derive every example.
- Do exercises. Not optional. A topology chapter without exercises is a Netflix episode about topology.
- Find a study partner or an online group (math.stackexchange, /r/math, university Discord).
- Expect to spend hours on a single proof. That's the work.

Detailed plan: [`PHASE-3-mathematician.md`](PHASE-3-mathematician.md).

---

## Phase 4 — Specialization (ongoing)

**Goal:** Be genuinely good at the things you said matter for daily life: stats, econometrics, numerical methods, microeconomics.

- **Statistics deep dive:** Gelman, *Regression and Other Stories*. Then *Bayesian Data Analysis*.
- **Econometrics:** Wooldridge, *Introductory Econometrics*. Then Angrist & Pischke, *Mostly Harmless Econometrics* (causal inference — the most useful applied stats book of the last 20 years).
- **Microeconomics:** Varian, *Intermediate Microeconomics* → *Microeconomic Analysis*.
- **Numerical methods:** Trefethen, *Numerical Linear Algebra*. Then *Spectral Methods in MATLAB* if you want beautiful.

Detailed plan: [`PHASE-4-specialization.md`](PHASE-4-specialization.md).

---

## Phase 5 — Lifelong Practice

Math is a habit, not a destination. Keep doing it.

- **Project Euler:** one problem a week, minimum. Aim for the first 200 over time.
- **One paper a month:** pick a paper that uses math from one of your tracks. Read it actively.
- **Teach:** write a lesson here in the repo. Explain to a friend. Answer a question on math.stackexchange. The fastest learning is teaching.
- **Re-derive:** every six months, re-derive a foundational result from memory. Chain rule. Bayes' theorem. Lagrange multipliers. If you can't, revisit.

Detailed plan: [`PHASE-5-lifelong.md`](PHASE-5-lifelong.md).

---

## Resources you'll want bookmarked

- **3Blue1Brown** YouTube channel — visual math at its best.
- **Project Euler** (projecteuler.net) — math-flavored programming challenges.
- **Paul's Online Math Notes** — clean reference for calc and DE.
- **Khan Academy** — for filling specific gaps fast.
- **Stanford EE364a (Boyd, Convex Optimization)** — full course on YouTube.
- **MIT OCW 18.06 (Strang, Linear Algebra)** — full course on YouTube.
- **Harvard Stat 110 (Blitzstein, Probability)** — full course on YouTube.
- **Anki** — for spaced-repetition of definitions and theorems.

---

## On time and patience

This is a multi-year arc. That's fine. The version of you a year from now will be unrecognizable to current-you only if you do the daily 10 minutes. Math fluency doesn't come from heroic weekends; it comes from a steady drip. The fear evaporates faster than you think — usually within Phase 0.

Start with `lessons/arithmetic-drill.html`. Today.
