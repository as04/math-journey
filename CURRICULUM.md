# Curriculum — Daily Path to Google (SWE / ML-Eng / Research-stretch)

This is the **day-by-day spine**, optimized for someone who is currently a backend SWE, wants to move into ML/DS, and is targeting Google. Project Euler is woven in weekly as both signal and practice.

The longer-arc Phase 0–5 docs (see `ROADMAP.md`) remain as reference material. This curriculum is what you actually *do* each day.

---

## The 4 woven daily tracks

Total: ~45 min/day. Saturday extends to ~90 min for the side-project block.

| Track | Time | What | Why |
|---|---|---|---|
| **A. Fluency drill** | 10 min | `lessons/arithmetic-drill.html` | Kills the fear layer in week 1, keeps arithmetic sharp forever. Non-negotiable. |
| **B. Math concept of the day** | 20 min | Today's lesson on linear algebra / prob / calc / optimization | Foundation for ML Eng and Research roles. |
| **C. Algorithm / code track** | 15 min | Alternates daily: algorithm/DS topic (SWE) OR one Project Euler problem | Direct SWE-interview prep + code/math integration. |
| **D. Saturday side project** | +60 min | Extends the day's lesson into something you ship | The "signal to Google" — your GitHub becomes the proof. |

The daily lesson HTML pages embed Tracks B and C — you do them in one ~35-min sitting.

---

## Realistic targets at Google

| Path | Realistic timeline | Math required | Notes |
|---|---|---|---|
| **SWE L4** | 6–18 months | Light (algorithms, discrete, Big-O, light prob) | Most attainable. Project Euler practice IS the math practice. |
| **ML Engineer** | 12–24 months | Medium (lin alg deep, calc, prob/stats, optimization, PyTorch fluency) | The math plan helps directly. Need a real ML project on GitHub. |
| **Research (Brain/DeepMind)** | Multi-year, normally needs PhD or strong publications | Heavy (above + analysis + info theory + research taste) | Math is necessary but not sufficient. Plan to publish/replicate papers, not just study. |

The curriculum optimizes for **SWE + ML Eng intersection**. Research is a stretch goal that opens up if you also publish.

---

## Monthly outcomes (what you can do at the end of each month)

### Month 1 — Foundations restart
- Fermi estimates in meetings without anxiety.
- Vector/matrix geometric intuition (the 3B1B view).
- Big-O intuition — read code, name its complexity instantly.
- Basic discrete probability (counting, sample spaces).
- NumPy fluency — array ops without Googling.
- **10+ Project Euler problems solved.**
- **First small side project shipped** (e.g., a simple optimizer or analyzer).

### Month 2 — Probability deep + algorithms warm-up + first ML
- Probability & stats fluent (CLT, Bayes, distributions).
- Core algorithms: sorting, hashing, recursion, DP intro.
- Linear algebra deep — SVD, eigenvectors, change of basis.
- **Implement linear and logistic regression from scratch.**
- **25+ Project Euler problems.**

### Month 3 — Calculus, optimization, first neural net
- Multivariable calc + gradients + Jacobian/Hessian.
- **Derive backprop on a small net by hand.**
- Gradient descent + variants (SGD, momentum, Adam intuition).
- **Build a 2-layer neural net from scratch (NumPy only).**
- Convex optimization intro (Boyd lectures begin).
- Trees, graphs, DP — SWE interview prep depth.
- **40+ Project Euler problems.**

### Month 4 — PyTorch + portfolio piece + system-design math
- PyTorch fluent — replicate a small model end-to-end.
- **Ship a real ML side project** (Kaggle competition or paper replication).
- Information theory basics (entropy, KL, mutual info).
- Causal inference basics (DiD, RDD).
- System-design probabilistic reasoning (load estimates, capacity).
- **60+ Project Euler problems.**

### Month 5 — Real analysis + advanced ML math
- Abbott *Understanding Analysis* chapters 1–4 — write your first real proofs.
- Variational methods intro.
- Reinforcement learning math (Markov chains, MDPs, Bellman).
- Advanced algorithms (max flow, advanced DP).
- Continued side project work.
- **80+ Project Euler problems.**

### Month 6 — Specialization + Google prep
- Commit to a direction: **SWE deep-prep** OR **ML-Eng paper-replication track**.
- Capstone project you can show in an interview.
- Begin mock interviews (LeetCode mediums daily for SWE; ML system design for ML Eng).
- **100+ Project Euler problems.**

### Months 7–12 — Become the candidate
- **SWE path:** deep system design + LeetCode hards + behavioral interview prep + referral hunting.
- **ML Eng path:** production-grade ML side project + technical blog series + replicate 2–3 recent papers.
- **Research stretch:** publish a paper (workshop counts) OR contribute substantively to a known open-source ML project.

After 12 months of this regime + applying actively, you have a realistic shot at SWE / ML-Eng interviews. Research timeline is honest: typically more like 24+ months and requires output, not just study.

---

## Month 1 — Day by day

### Week 1 — Restart the engine + introduce the four tracks

| Day | Title | Tracks | Status |
|---|---|---|---|
| 1 | Fermi & estimation | A, B | ✅ built |
| 2 | Percentages, growth, and the start of Big-O thinking | A, B, C | ✅ built |
| 3 | Vectors as arrows | A, B | ✅ built |
| 4 | Matrices as transformations | A, B | ✅ built (uses LA visualizer) |
| 5 | Algorithm complexity — your first analysis | A, C | ✅ built |
| 6 | Discrete probability — counting & sample spaces | A, B | ✅ built |
| 7 | Your first Project Euler problem, properly | A, C | ✅ built |

### Week 2 — Probability & Bayes + algorithms warm-up

| Day | Title |
|---|---|
| 8 | Sample spaces, events, axioms |
| 9 | Conditional probability — the renormalization view |
| 10 | Bayes — derive it, don't memorize |
| 11 | Random variables & expectation |
| 12 | Variance, std, covariance |
| 13 | Sorting algorithms — comparison & intuition (Track C focus) |
| 14 | Bayes capstone + 2nd Project Euler problem |

### Week 3 — Linear algebra deeper + calculus restart + recursion

| Day | Title |
|---|---|
| 15 | Vector spaces, basis, dimension |
| 16 | Linear combinations & span |
| 17 | Solving Ax = b — what it means |
| 18 | Determinant — area/volume scaling |
| 19 | Limits & rate of change |
| 20 | Recursion + first DP problem (Track C focus) |
| 21 | Chain rule — derive it |

### Week 4 — Putting it together: first ML math + first portfolio commit

| Day | Title |
|---|---|
| 22 | Gradient: direction of steepest ascent |
| 23 | Gradient descent — by hand, then NumPy |
| 24 | Linear regression from scratch — Part 1 (the math) |
| 25 | Linear regression from scratch — Part 2 (the code) |
| 26 | Hashing & dictionaries (Track C: SWE staple) |
| 27 | Cross-validation — why and how |
| 28 | **Month 1 capstone** — push your linear-regression repo + write README |
| 29 | Month 1 review — re-derive 5 key results |
| 30 | Plan Month 2: pick your next side project |

---

## Month 2 — preview

To be detailed when you finish Month 1. Focus:
- **Probability deep**: Blitzstein Stat 110 alongside.
- **Stats basics**: estimators, hypothesis testing critique.
- **Algorithms**: core DP, recursion, trees, graphs.
- **Linear algebra deep**: eigendecomposition, SVD.
- **Optimization start**: gradient methods.
- **Project**: implement linear + logistic regression from scratch on a real dataset.

---

## How to use the curriculum

1. Open `index.html` in your browser. It shows today's lesson, your streak, and overall progress.
2. **10 min — drill first.** Always. Even on lesson days.
3. **30 min — today's lesson.** Read the explainer, play with the widget, do the exercises (which combine Tracks B and C).
4. Click **"mark today complete"** at the bottom. Progress saved in your browser.
5. **Saturdays — side project block** extends the day's lesson into ~60 extra min of building/shipping.
6. **Don't skip days.** Missing two days breaks the streak. If you can only do 10 min, just do the drill — the streak stays alive.

---

## On output (the Google-signal piece)

You're not just consuming lessons. You're building **public artifacts**:

- **This repo** (fork it as your own personal version) — your daily progress is public.
- **Monthly capstone projects** — shipped to your own GitHub. Each becomes a portfolio piece.
- **Lesson contributions** — every 2 weeks, write your own lesson on something that clicked. Teaching = learning.
- **Blog posts** — by Month 4, start a technical blog (just a GitHub Pages repo). One post a month.

Google recruiters skim GitHub. A consistent green commit graph + a few well-explained projects + a blog matters more than another LeetCode-grinder profile.
