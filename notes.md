---
layout: default
title: "Notes"
permalink: /notes/
---

<section class="notes-page">
  <!-- <header class="notes-hero">
    <p class="eyebrow">UG & PG Page</p>
    <h1>Semester Notice Board</h1>
    <p>Current semester material stays open at the top. Earlier material remains folded below for quick reference.</p>
  </header> -->

  <section class="notice-board current-board" aria-label="Current semester material">
    <div class="board-pin pin-left"></div>
    <div class="board-pin pin-right"></div>
    <div class="board-heading">
      <span>Current Semester</span>
    </div>

    <details class="semester-box" open>
      <summary>
        <span>M.Sc</span>
        <strong>Sem-I, Sem-III, practicals, dissertation</strong>
      </summary>
      <div class="semester-links">
        <a href="{{ '/msc-sem-i/' | relative_url }}">Sem-I</a>
        <a href="{{ '/msc-sem-iii/' | relative_url }}">Sem-III</a>
        <a href="{{ '/msc-practicals-template/' | relative_url }}">Practicals</a>
        <a href="{{ '/msc-dissertation-template/' | relative_url }}">Dissertation</a>
      </div>
    </details>

    <details class="semester-box" open>
      <summary>
        <span>B.Sc</span>
        <strong>Sem-I and practical files</strong>
      </summary>
      <div class="semester-links">
        <a href="{{ '/bsc-sem-i-template/' | relative_url }}">Sem-I</a>
        <a href="{{ '/bsc-practicals-template/' | relative_url }}">Practicals</a>
      </div>
    </details>

    <details class="semester-box exam-box" open>
      <summary>
        <span>JET, NET & GATE</span>
        <strong>Exam-oriented study templates</strong>
      </summary>
      <div class="semester-links">
        <a href="{{ '/exam-physical-science-template/' | relative_url }}">Physical Science</a>
        <a href="{{ '/exam-paper-i-template/' | relative_url }}">Paper I</a>
      </div>
    </details>
  </section>

  <section class="notice-board old-board" aria-label="Old semester archive">
    <div class="board-heading">
      <span>Archive</span>
      <!-- <h2>Old Semester Material</h2> -->
    </div>

    <details class="semester-box">
      <summary>
        <span>M.Sc Old</span>
        <strong>Earlier semester references</strong>
      </summary>
      <div class="semester-links">
        <a href="{{ '/msc-sem-ii-old-template/' | relative_url }}">Sem-II</a>
      </div>
    </details>
  </section>

  <section class="notice-board docs-board" aria-label="Jekyll documentation">
    <div class="board-heading">
      <span>Jekyll Documentation</span>
    </div>

    <details class="semester-box">
      <summary>
        <span>Site Writing Guides</span>
        <strong>Front matter, Markdown, LaTeX, quiz, and SCSS style editing</strong>
      </summary>
      <div class="semester-links">
        <a href="{{ '/how-to-write-front-matter/' | relative_url }}">Front Matter</a>
        <a href="{{ '/how-to-write-in-markdown/' | relative_url }}">Markdown</a>
        <a href="{{ '/how-to-write-latex-equations/' | relative_url }}">LaTeX</a>
        <a href="{{ '/how-to-write-quiz/' | relative_url }}">Quiz</a>
        <a href="{{ '/how-to-edit-scss-partials/' | relative_url }}">SCSS Styles</a>
      </div>
    </details>
  </section>
</section>
