/* Shared lesson scaffolding: progress tracking, exercise grader, completion UI.
 * Used by every daily lesson. Stored progress lives in localStorage. */

(function (global) {
  'use strict';

  const KEY = 'math-journey-progress';

  const todayStr = () => new Date().toISOString().slice(0, 10);
  const yesterdayStr = () =>
    new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);

  const Progress = {
    load() {
      try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
      catch (_) { return {}; }
    },
    save(p) { localStorage.setItem(KEY, JSON.stringify(p)); },
    completed() {
      const p = this.load();
      return p.completed || {};
    },
    isCompleted(id) { return !!this.completed()[id]; },
    streak() { return this.load().streak || 0; },
    lastDay() { return this.load().lastDay || null; },
    totalCompleted() { return Object.keys(this.completed()).length; },
    markCompleted(id) {
      const p = this.load();
      p.completed = p.completed || {};
      if (p.completed[id]) return; // already done
      p.completed[id] = todayStr();
      // streak update
      const t = todayStr();
      if (p.lastDay === t) {
        // already advanced today (some other lesson) — keep streak
      } else if (p.lastDay === yesterdayStr()) {
        p.streak = (p.streak || 0) + 1;
      } else {
        p.streak = 1;
      }
      p.lastDay = t;
      this.save(p);
    },
    reset() {
      if (!confirm('Reset ALL progress? This cannot be undone.')) return;
      localStorage.removeItem(KEY);
      location.reload();
    },
  };

  /* Lesson scaffolding: call Lesson.init({id, day, title, estMin}) at top of lesson body.
   * Renders header bar with day badge + completion button. */
  const Lesson = {
    current: null,
    init(opts) {
      this.current = opts;

      // header
      const header = document.createElement('div');
      header.className = 'lesson-header';
      header.innerHTML = `
        <a class="back" href="../index.html">← back to hub</a>
        <div class="lesson-meta">
          <span class="day-badge">Day ${opts.day}</span>
          <span class="muted mono">${opts.estMin || 25} min · streak ${Progress.streak()}</span>
        </div>
        <h1>${opts.title}</h1>
      `;
      document.body.querySelector('main').prepend(header);

      // footer
      const footer = document.createElement('div');
      footer.className = 'lesson-footer panel';
      footer.innerHTML = `
        <button id="lesson-complete-btn">mark today complete</button>
        <span id="lesson-complete-status" class="muted mono"></span>
      `;
      document.body.querySelector('main').appendChild(footer);

      const btn = document.getElementById('lesson-complete-btn');
      btn.addEventListener('click', () => {
        Progress.markCompleted(opts.id);
        this.updateCompletionUI();
      });
      this.updateCompletionUI();
    },
    updateCompletionUI() {
      const done = Progress.isCompleted(this.current.id);
      const btn = document.getElementById('lesson-complete-btn');
      const status = document.getElementById('lesson-complete-status');
      if (done) {
        btn.textContent = '✓ completed';
        btn.disabled = true;
        status.textContent = `done on ${Progress.completed()[this.current.id]} · streak ${Progress.streak()}`;
      } else {
        btn.textContent = 'mark today complete';
        btn.disabled = false;
        status.textContent = '';
      }
    },
  };

  /* Exercises: pass a container element and an array of exercise specs.
   * Each spec:
   *   { q: 'question html', type: 'numeric'|'mcq'|'range'|'text',
   *     answer (numeric: number; mcq: index; range: [lo,hi]; text: string),
   *     tol (numeric, default 0.01),
   *     options (mcq: array of strings),
   *     explain: 'shown after answering' }
   */
  const Exercises = {
    render(container, exercises) {
      container.innerHTML = '';
      exercises.forEach((ex, i) => {
        const wrap = document.createElement('div');
        wrap.className = 'exercise';
        wrap.innerHTML = `
          <div class="ex-num">Q${i + 1}</div>
          <div class="ex-body">
            <div class="ex-question">${ex.q}</div>
            <div class="ex-input"></div>
            <div class="ex-feedback"></div>
          </div>
        `;
        const inputDiv = wrap.querySelector('.ex-input');
        const feedback = wrap.querySelector('.ex-feedback');

        if (ex.type === 'mcq') {
          ex.options.forEach((opt, idx) => {
            const b = document.createElement('button');
            b.className = 'secondary mcq-opt';
            b.innerHTML = opt;
            b.addEventListener('click', () => this.checkMcq(ex, idx, wrap, feedback));
            inputDiv.appendChild(b);
          });
        } else {
          const inp = document.createElement('input');
          inp.type = 'text';
          inp.inputMode = ex.type === 'text' ? 'text' : 'decimal';
          inp.placeholder = ex.type === 'range' ? 'your estimate' : 'answer';
          inp.style.width = '180px';
          const btn = document.createElement('button');
          btn.textContent = 'check';
          btn.addEventListener('click', () => this.check(ex, inp.value, wrap, feedback));
          inp.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') btn.click();
          });
          inputDiv.appendChild(inp);
          inputDiv.appendChild(btn);
        }
        container.appendChild(wrap);
      });
    },
    check(ex, raw, wrap, feedback) {
      raw = String(raw).trim();
      if (!raw) return;
      let ok = false;
      let actualMsg = '';
      if (ex.type === 'numeric') {
        const v = parseFloat(raw);
        if (isNaN(v)) { feedback.innerHTML = '<span class="error">enter a number</span>'; return; }
        const tol = ex.tol != null ? ex.tol : 0.01;
        ok = Math.abs(v - ex.answer) <= tol + Math.abs(ex.answer) * 0.001;
        actualMsg = ok ? '' : ` (correct: ${ex.answer})`;
      } else if (ex.type === 'range') {
        const v = parseFloat(raw);
        if (isNaN(v)) { feedback.innerHTML = '<span class="error">enter a number</span>'; return; }
        ok = v >= ex.answer[0] && v <= ex.answer[1];
        actualMsg = ok ? '' : ` (target range: ${ex.answer[0].toExponential(1)}–${ex.answer[1].toExponential(1)})`;
      } else if (ex.type === 'text') {
        ok = raw.toLowerCase().trim() === String(ex.answer).toLowerCase().trim();
        actualMsg = ok ? '' : ` (correct: ${ex.answer})`;
      }
      this.markResult(wrap, feedback, ok, actualMsg, ex.explain);
    },
    checkMcq(ex, picked, wrap, feedback) {
      const ok = picked === ex.answer;
      wrap.querySelectorAll('.mcq-opt').forEach((b, i) => {
        b.disabled = true;
        if (i === ex.answer) b.classList.add('correct');
        else if (i === picked) b.classList.add('incorrect');
      });
      this.markResult(wrap, feedback, ok, '', ex.explain);
    },
    markResult(wrap, feedback, ok, actualMsg, explain) {
      wrap.classList.add(ok ? 'correct' : 'incorrect');
      const tag = ok ? '<span class="score">✓ correct</span>' : `<span class="error">✗ not quite${actualMsg}</span>`;
      feedback.innerHTML = explain ? `${tag} <div class="explain">${explain}</div>` : tag;
    },
  };

  global.Progress = Progress;
  global.Lesson = Lesson;
  global.Exercises = Exercises;
})(window);
