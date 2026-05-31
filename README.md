# Math Journey

A self-directed curriculum to rebuild math from scratch — for someone who **used to be good at it**, lost fluency over years of disuse, and wants to climb back to MSc-level intuition.

This repo is one part **plan** (what to learn, in what order, with what resources) and one part **practice** (interactive HTML lessons you can open in a browser, no build step).

---

## How to use this repo

1. Open [`ROADMAP.md`](ROADMAP.md) — the bird's-eye view of all six phases.
2. Pick your current phase. Open the matching file (`PHASE-0-arithmetic.md` etc.) — that's the detailed weekly plan with resources, problems, and exit criteria.
3. For practice, open `index.html` in any browser. Each lesson is a self-contained HTML file under `lessons/` — no install, no server.
4. Add to the repo. When you build intuition on a topic, write a lesson for it. Teaching it = learning it.

---

## The phases at a glance

| Phase | Goal | Typical duration |
|-------|------|------------------|
| **0. Arithmetic fluency** | No more fear of mental math | 2–4 weeks |
| **1. Foundations** | School + early-college math feels natural | 6–10 weeks |
| **2. Applied / functional** | MILP, optimization, stats, game theory — usable | 12–16 weeks |
| **3. Mathematician intuition** | Analysis, topology, algebra — proof-shaped thinking | 6+ months |
| **4. Specialization** | Numerical methods, econometrics, advanced stats | ongoing |
| **5. Lifelong practice** | Project Euler, papers, teaching | forever |

Don't skip phases — but you can interleave them. Spend 70% on your current phase, 20% reviewing the previous, 10% peeking at the next.

---

## Daily / weekly rhythm

**Every day (60 min minimum):**
- 10 min — arithmetic warm-up (always, regardless of phase — fluency is a muscle)
- 30–40 min — current phase main concept (read / watch / take notes by hand)
- 10–15 min — one problem solved end-to-end (Project Euler, textbook exercise, etc.)

**Every Saturday (90 min):**
- Build or extend one interactive HTML lesson on what you learned this week.

**Every Sunday (30 min):**
- Review: re-derive on paper one concept from this week. If it's not fluent, it's not learned.

---

## Repo structure

```
math-journey/
├── README.md                 ← you are here
├── ROADMAP.md                ← the whole plan in one document
├── PHASE-0-arithmetic.md     ← detailed phase plans
├── PHASE-1-foundations.md
├── PHASE-2-applied.md
├── PHASE-3-mathematician.md
├── PHASE-4-specialization.md
├── PHASE-5-lifelong.md
├── index.html                ← lesson hub (open in browser)
├── styles.css                ← shared styling
└── lessons/
    ├── arithmetic-drill.html
    ├── linear-algebra-transformations.html
    └── lp-visualizer.html
```

---

## Philosophy

Three things that make this work:

1. **No skipping the basics.** The fear of arithmetic isn't intellectual — it's a confidence gap. Fix it directly. Ten minutes a day for a month.
2. **Concrete before abstract.** Always. Visualize a 2×2 matrix as a transformation of the plane *before* you read about eigenvalues. Solve a 2-variable LP by hand before opening CVXPY. 3Blue1Brown's pedagogy is the gold standard — copy it.
3. **Output your understanding.** Build a lesson. Solve a problem. Explain it to imaginary you. Passive reading produces an illusion of competence that collapses on contact with a real problem.

---

## License

MIT. Fork it, use it, share it. The point is for others to benefit too.
