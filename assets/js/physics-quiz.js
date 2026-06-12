(function () {
  if (window.__physicsQuizInitialized) return;
  window.__physicsQuizInitialized = true;

  const shells = document.querySelectorAll(".physics-quiz");
  if (!shells.length) return;

  let mathJaxLoading = null;

  function ensureMathJax() {
    if (window.MathJax?.typesetPromise) return Promise.resolve();
    if (mathJaxLoading) return mathJaxLoading;

    const existingMathJaxScript = document.querySelector('script[src*="mathjax"]');
    if (existingMathJaxScript && window.MathJax && !window.MathJax.typesetPromise) {
      mathJaxLoading = new Promise((resolve) => {
        const started = Date.now();
        const timer = window.setInterval(() => {
          if (window.MathJax?.typesetPromise || Date.now() - started > 5000) {
            window.clearInterval(timer);
            resolve();
          }
        }, 100);
      });
      return mathJaxLoading;
    }

    window.MathJax = {
      tex: { inlineMath: [["$", "$"], ["\\(", "\\)"]], displayMath: [["$$", "$$"], ["\\[", "\\]"]] },
      svg: { fontCache: "global" }
    };

    mathJaxLoading = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
      script.defer = true;
      script.onload = resolve;
      script.onerror = resolve;
      document.head.appendChild(script);
    });

    return mathJaxLoading;
  }

  function typeset(shell) {
    ensureMathJax().then(() => {
      if (window.MathJax?.typesetPromise) MathJax.typesetPromise([shell]);
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function decodeHtml(value) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = value;
    return textarea.value;
  }

  function parseQuizSource(source) {
    return decodeHtml(source)
      .split(/\n---+\n/g)
      .map((block) => block.trim())
      .filter(Boolean)
      .map((block) => {
        const lines = block.split(/\n/);
        const item = { question: "", options: [], correct: 0, explanation: "" };
        const optionMap = { A: 0, B: 1, C: 2, D: 3, E: 4 };

        lines.forEach((line) => {
          const match = line.match(/^([A-EQ]|ANSWER|EXPLAIN):\s*(.*)$/i);
          if (!match) return;

          const key = match[1].toUpperCase();
          const value = match[2].trim();

          if (key === "Q") item.question = value;
          else if (key === "ANSWER") item.correct = optionMap[value.toUpperCase()] ?? Number(value);
          else if (key === "EXPLAIN") item.explanation = value;
          else item.options[optionMap[key]] = value;
        });

        return item;
      })
      .filter((item) => item.question && item.options.length);
  }

  async function loadQuiz(shell) {
    const source = shell.querySelector(".quiz-source")?.value || "";
    const questions = parseQuizSource(source);

    const countEl = shell.querySelector(".quiz-count");
    const scoreMiniEl = shell.querySelector(".quiz-score-mini");
    const progressEl = shell.querySelector(".quiz-progress-fill");
    const questionEl = shell.querySelector(".quiz-question");
    const optionsEl = shell.querySelector(".quiz-options");
    const feedbackEl = shell.querySelector(".quiz-feedback");
    const nextBtn = shell.querySelector(".quiz-next");

    let current = 0;
    let score = 0;
    let answered = false;

    function renderQuestion() {
      const item = questions[current];
      answered = false;
      nextBtn.disabled = true;
      nextBtn.textContent = current === questions.length - 1 ? "Show Result" : "Next";
      feedbackEl.textContent = "";

      countEl.textContent = `Question ${current + 1} of ${questions.length}`;
      scoreMiniEl.textContent = `Score ${score}`;
      progressEl.style.width = `${(current / questions.length) * 100}%`;
      questionEl.innerHTML = item.question;

      optionsEl.innerHTML = item.options.map((option, index) => `
        <button class="quiz-option" type="button" data-index="${index}">
          <span>${String.fromCharCode(65 + index)}</span>
          <strong>${option}</strong>
        </button>
      `).join("");

      optionsEl.querySelectorAll(".quiz-option").forEach((button) => {
        button.addEventListener("click", () => chooseAnswer(button));
      });

      typeset(shell);
    }

    function chooseAnswer(button) {
      if (answered) return;
      answered = true;
      nextBtn.disabled = false;

      const item = questions[current];
      const chosen = Number(button.dataset.index);
      const correct = chosen === item.correct;

      if (correct) score += 1;

      optionsEl.querySelectorAll(".quiz-option").forEach((option) => {
        const index = Number(option.dataset.index);
        option.disabled = true;
        if (index === item.correct) option.classList.add("is-correct");
        if (index === chosen && !correct) option.classList.add("is-wrong");
      });

      feedbackEl.innerHTML = correct
        ? `Correct. ${item.explanation}`
        : `Not quite. ${item.explanation}`;
      scoreMiniEl.textContent = `Score ${score}`;
      typeset(shell);
    }

    function finishQuiz() {
      const total = questions.length;
      const percent = Math.round((score / total) * 100);
      const message = percent >= 80
        ? "Excellent command of the essentials."
        : percent >= 60
          ? "Good progress. Revisit the missed ideas once."
          : "Useful start. Review the formulas and try again.";

      shell.innerHTML = `
        <div class="quiz-result-card">
          <p class="eyebrow">Quiz Result</p>
          <div class="quiz-score-ring">${percent}%</div>
          <h2>${score} / ${total} Correct</h2>
          <p>${escapeHtml(message)}</p>
          <button class="quiz-next quiz-restart" type="button">Restart Quiz</button>
        </div>
      `;

      shell.querySelector(".quiz-restart").addEventListener("click", () => {
        window.location.reload();
      });
    }

    nextBtn.addEventListener("click", () => {
      if (!answered) return;
      current += 1;
      if (current < questions.length) renderQuestion();
      else finishQuiz();
    });

    if (questions.length) renderQuestion();
    else shell.innerHTML = "<p class=\"quiz-feedback\">No quiz questions found.</p>";
  }

  shells.forEach((shell) => {
    loadQuiz(shell).catch(() => {
      shell.innerHTML = "<p class=\"quiz-feedback\">Could not load the quiz file.</p>";
    });
  });
})();
