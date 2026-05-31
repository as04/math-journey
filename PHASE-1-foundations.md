# Phase 1 — Foundations

**Duration:** 6–10 weeks. ~45 min/day. Plus your 10 min Phase-0 drill (which never stops).

**Goal:** Every concept from school + first-year college becomes *natural* — not memorized formulas, but understood mental models. When you sit down to watch 3Blue1Brown, your reaction is "yes, of course" — not "what is happening."

---

## The principle for this phase

You are *not* starting from zero. You learned this once. You're refreshing — but this time, with the maturity to actually *understand* what you were doing. Speed will surprise you. A topic that took 3 weeks in school will take 3 days now.

The two anchors of this phase:
1. **3Blue1Brown's "Essence of..." playlists** — every video twice. Pen in hand on the second watch.
2. **Project Euler problems 1–30** — they're solvable with only Phase 1 math. They reinforce the math AND your coding.

---

## Topics in order

### Topic 1 — Algebra fluency (1 week)

Re-build the basic toolkit. You should be able to do these without thinking:
- Factor any quadratic.
- Complete the square.
- Expand and collect polynomial products.
- Solve a linear system (2 or 3 variables) by substitution or elimination.
- Manipulate fractions, exponents, logs without panic.

**Resource:** Khan Academy "Algebra 1" and "Algebra 2" — but skim. Do the unit tests, skip the videos for stuff you already remember.

**Self-test:** "Solve x⁴ - 5x² + 4 = 0." (Substitute u = x², factor.) If you can do this in under 60 seconds, you're done.

### Topic 2 — Functions and graphs (3–4 days)

The mental model: **a function is a machine.** It takes one input, produces one output.

- Function composition. (f ∘ g)(x) = f(g(x)). Order matters.
- Inverses. Geometric meaning: reflection across y = x.
- Transformations: y = a·f(b(x - h)) + k. Each constant does *one specific thing*.
- Domain, range, continuity (informal).

**Resource:** Paul's Online Math Notes, "Algebra → Functions."

### Topic 3 — Trigonometry, from the unit circle (1 week)

The single biggest fix for adult trig: **forget SOH-CAH-TOA. Start at the unit circle.**

Mental model: sin and cos are the **y and x coordinates** of a point traveling around a unit circle at angle θ from the positive x-axis. Every trig identity is a geometric fact about that picture.

Once you have that:
- sin² + cos² = 1 is just Pythagoras on a radius-1 hypotenuse.
- Periodicity: full lap = 2π.
- Symmetries (sin(-θ) = -sin θ, cos(π - θ) = -cos θ, etc.) are reflections.
- Angle-addition formulas are derivable from rotation matrices (skip the rote memorization).

**Resource:** Khan Academy "Trigonometry" → unit circle section. Then Better Explained's "Intuitive Trigonometry."

**Self-test:** Without looking, sketch sin and cos over [0, 2π], mark all zeros and extrema.

### Topic 4 — Single-variable calculus (2–3 weeks)

This is where things click into adulthood. Calculus in school felt mechanical because it *was* taught mechanically. Done right, it's beautiful.

**Mental models to internalize:**
- **Derivative = rate of change = slope of tangent.** All three phrasings are the same idea.
- **Integral = accumulation = signed area under curve.**
- **Fundamental theorem of calculus:** these two operations *undo each other*. This is one of the great results of human thought. Sit with it.

**Curriculum:**
1. Watch *3Blue1Brown — Essence of Calculus* (12 videos, ~3 hours). Twice.
2. Do MIT OCW 18.01 problem sets (free online). Aim for half of them; you don't need all.
3. Implement these in code (Python):
   - Numerical derivative via finite differences.
   - Numerical integral via Simpson's rule.
   - Newton's method for root-finding.

These three short coding exercises will cement calculus in a way that pure book-reading cannot.

**Self-test:** Re-derive the chain rule by writing out the limit definition. Compute the derivative of (sin(x²))³ without looking anything up.

### Topic 5 — Linear algebra, geometrically (2 weeks)

This is the most reused math in CS. If you internalize *one* topic deeply in Phase 1, make it this one.

**The 3B1B framing — internalize it:**
- A **vector** is an arrow from the origin.
- A **matrix** is a *function that transforms space* — it takes vectors to vectors, linearly.
- **Matrix multiplication** = composition of transformations. (AB applied to v = A(Bv).)
- **Determinant** = how much the transformation scales area / volume.
- **Eigenvectors** = directions that don't change direction under the transformation.

**Curriculum:**
1. Watch *3Blue1Brown — Essence of Linear Algebra* (15 videos). Twice.
2. Play with `lessons/linear-algebra-transformations.html` in this repo — type in 2×2 matrices and watch the plane warp.
3. Do problems from Strang's *Introduction to Linear Algebra* (textbook). Chapters 1–6.
4. MIT 18.06 lectures on YouTube — Strang is one of the great teachers of our time. Watch at least the first 10.

**Self-test:**
- Compute the eigenvalues and eigenvectors of [[2,1],[1,2]] on paper.
- Explain to a rubber duck what det(A) = 0 means *geometrically*.

### Topic 6 — Probability basics (1 week)

The mental model: probability is **a function from events to [0,1]**, and events are *subsets of a sample space*.

- Sample spaces, events, axioms.
- Conditional probability: P(A|B) = P(A ∩ B) / P(B). This is just a *renormalization* — given you're in B, what fraction of B is also in A?
- Bayes' theorem — derive it from the definition of conditional probability. Don't memorize it.
- Independence vs mutual exclusivity (people conflate these; they're nearly opposites).
- Random variables, expectation, variance.

**Resource:** Blitzstein's Stat 110 lectures on YouTube — start them now even though we go deeper in Phase 2.

**Self-test:** A test for a disease is 99% accurate. The disease has 1% prevalence. You test positive. What's the probability you have it? (Answer: ~50%, not 99%. This is the Bayes-trap question and it should *not* surprise you anymore.)

---

## Project Euler track

Run this in parallel with the above. Solve problems 1–30 across these 6–10 weeks. Use Python (or any language). The point is to *use the math you're learning*. Some problems align directly with topics — when you see "sum of primes" right after learning divisibility, that's not a coincidence.

If you get stuck on a problem for more than an hour, that's a signal — read the math forum thread *after* solving it.

---

## Exit criteria for Phase 1

- [ ] You've watched both 3B1B *Essence of...* playlists end-to-end at least once.
- [ ] You can re-derive the chain rule from limits, on paper, no notes.
- [ ] You can explain a 2×2 matrix as a transformation and predict what it does to a unit square before computing.
- [ ] You've solved 20+ Project Euler problems.
- [ ] When you open a 3B1B video on a *new* topic, the language and notation feel native — even if the topic is new.

When all five are checked, move to [Phase 2](PHASE-2-applied.md).
