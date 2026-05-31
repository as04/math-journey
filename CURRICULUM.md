# Curriculum — The Daily Applied-First Path

This is the **day-by-day spine** of the math journey. One interactive lesson per day, ~25–35 minutes, in your browser, hands-on. The longer-arc Phase 0–5 docs (see `ROADMAP.md`) remain as reference material — this curriculum is what you actually *do* each day.

**Two parallel daily blocks:**
- **10 min — Arithmetic drill** (`lessons/arithmetic-drill.html`). Forever. Non-negotiable. Kills the fear layer in week 1.
- **30 min — Today's lesson.** Open `index.html` in a browser; it shows you which day you're on and the next lesson.

**Total daily commitment: 40–45 min.** That's the deal. Not 2 hours. Not 4. Just 45 minutes done well.

---

## What you can do at the end of each month

### Month 1 — "Useful at work" (the speed-run)

By Day 30 you can:
- Do Fermi estimation in meetings without anxiety.
- Read ML / data-science notation without panic.
- Compute and explain mean / median / std / percentiles correctly — and know when each lies.
- Apply Bayes' rule to a real workplace scenario.
- Predict what a 2×2 matrix does to space before computing — the 3Blue1Brown view.
- Use vectors and dot products as similarity / projection in code.
- Identify and call out percentage / growth-rate misuses.
- Quote the right summary statistic for the right distribution.

### Month 2 — "Decision math"

By Day 60 you can:
- Design and power-analyze a basic A/B test correctly.
- Distinguish a confidence interval from a credible interval and explain both.
- Formulate a real scheduling / allocation / packing problem as LP or MILP and solve it with PuLP.
- Reason about expected value, variance, covariance for portfolios of decisions.
- Explain CLT intuitively and use it to ballpark sample sizes.
- Run a basic regression and interpret coefficients, residuals, R².

### Month 3 — "ML & strategic math"

By Day 90 you can:
- Derive backprop on a 2-layer network by hand.
- Implement gradient descent + logistic regression from scratch.
- Apply PCA / SVD to a real dataset and explain what the components mean.
- Compute a Nash equilibrium for a small game.
- Model an auction or a pricing decision strategically.
- Read an ML paper and follow the math (not all of it — but most).

### Month 4 — "Bayesian + causal"

By Day 120 you can:
- Run a Bayesian model in PyMC or NumPyro on real data.
- Distinguish correlation from causation rigorously.
- Apply diff-in-differences and regression discontinuity.
- Read econometrics papers (Wooldridge / Angrist territory) and follow them.
- Reason about confounders and instrumental variables.

### Month 5 — "Proof literacy"

By Day 150 you can:
- Read and write real math proofs (ε-δ, induction, contradiction).
- Have finished Abbott's *Understanding Analysis* chapters 1–4.
- Keep shipping math at work weekly while reading rigorous math evenings.

### Month 6 — "Topology intuition"

By Day 180 you can:
- Talk about compactness, connectedness, the fundamental group fluently.
- Have read Weeks's *The Shape of Space* end-to-end.
- Be working through Armstrong or Munkres.

### Months 7–9 — depth + capstone

- Abstract algebra (Pinter).
- Convex optimization deep dive (Boyd lectures).
- A capstone work project — something the old you wouldn't have shipped.

### Months 9–18 — specialization

Pick one and go deep:
- **Stats track:** Gelman BDA, Wasserman.
- **Numerical track:** Trefethen.
- **Econometrics track:** Wooldridge → Angrist → Imbens-Rubin.
- **Pure track:** Hatcher *Algebraic Topology*, Dummit & Foote algebra.

After 18 months of 45-min days, you are objectively strong at math. By many definitions, a working mathematician.

---

## Month 1 — Day-by-day (this is what's built so far)

### Week 1 — Restart the engine

| Day | Title | What you learn | Status |
|-----|-------|----------------|--------|
| 1 | Fermi & estimation | Order-of-magnitude reasoning, decomposition, anchoring | ✅ built |
| 2 | Percentages, ratios, growth | % gotchas, compound growth, rule of 72, log thinking | ✅ built |
| 3 | Vectors as arrows | Vectors, magnitude, dot product as similarity | ✅ built |
| 4 | Matrices as transformations | 2×2 matrix warps space; det, eigenvectors | ✅ built |
| 5 | Summary statistics | Mean / median / std / IQR / percentiles — when each lies | ✅ built |
| 6 | The shape of randomness | Distributions: normal, uniform, exponential; CLT preview | ✅ built |
| 7 | Your first real estimate | Combine all of week 1 into a workplace ROI estimate | ✅ built |

### Week 2 — Probability & Bayes (to be built when you finish week 1)

| Day | Title | What you learn |
|-----|-------|----------------|
| 8 | Sample spaces & events | What probability *is*, not just rules |
| 9 | Conditional probability | The renormalization view; common traps |
| 10 | Bayes — naturally | Derive Bayes from the definition; apply to workplace cases |
| 11 | Random variables & expectation | RVs, E[X], linearity of expectation |
| 12 | Variance, std, covariance | Spread, joint behavior |
| 13 | Independence vs uncorrelated | Two distinct concepts; common conflation |
| 14 | Bayes-in-real-life capstone | Apply Bayes to disease tests, A/B significance, more |

### Week 3 — Linear algebra deeper + calculus warmup

| Day | Title |
|-----|-------|
| 15 | Vector spaces, basis, dimension |
| 16 | Linear combinations & span — geometric |
| 17 | Solving Ax = b — what it means |
| 18 | Determinant beyond 2×2 — area/volume scaling |
| 19 | Limits & rate of change — calculus restart |
| 20 | Derivative as slope — interactive |
| 21 | Chain rule — derive it, don't memorize |

### Week 4 — Putting it together: first ML math

| Day | Title |
|-----|-------|
| 22 | Gradient: the direction of steepest ascent |
| 23 | Gradient descent — by hand, then in code |
| 24 | Linear regression from scratch |
| 25 | Loss functions — squared, absolute, log |
| 26 | Overfitting & regularization intuition |
| 27 | Cross-validation — why and how |
| 28 | First ML capstone — predict something at work |

### Days 29–30: Review and self-assessment

| Day | Title |
|-----|-------|
| 29 | Month 1 review — re-derive 5 key results |
| 30 | Month 1 capstone — apply Month 1 to a real work problem |

---

## Month 2 — preview

Will be detailed when you finish Month 1. Focus: **probability deep**, **A/B testing**, **linear & integer programming**, **regression**. By end of month 2 you formulate and solve a real MILP at work.

---

## How to use the curriculum

1. Open `index.html` in your browser. It shows today's lesson, your streak, and your overall progress.
2. Do your **10 min arithmetic drill first**. Always. Even on lesson days.
3. Then do today's lesson. Read the explainer, play with the widget, do the exercises.
4. Click **"mark as completed"** at the bottom. Your progress is saved in your browser.
5. **Don't skip days.** Missing two days breaks the streak. Missing five days breaks the habit. Three weeks rebuilds it.

The lessons unlock themselves — there's no gate. But the curriculum is designed in order. Each day builds on the prior. Don't jump.

---

## On output

You're not just consuming lessons. You're building a public artifact. Every two weeks, extend this repo with **your own lesson** on something you learned that you want to teach. Push it to GitHub. The teaching is half of the learning, and the public record is half of your motivation.

You said you wanted others to learn from this. The way that happens is: you keep adding.
