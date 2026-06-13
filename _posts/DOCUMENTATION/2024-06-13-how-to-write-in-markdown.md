---
title: "How To Write In Markdown"
summary: "A clear demonstration of headings, paragraphs, lists, links, tables, code blocks, and academic note structure."
date: 2024-06-13 00:30:00 +0530
categories: doc
tags:
  - markdown
  - writing
  - doc
permalink: /how-to-write-in-markdown/
---

Markdown is the simplest way to write clean academic posts. It keeps the source readable while Jekyll turns it into a polished page.

## Headings

```markdown
## Main Section

### Smaller Section
```

Use `##` for main sections inside a post. The page title already comes from the front matter.

## Paragraphs And Emphasis

```markdown
This is a paragraph.

This sentence has **bold text** and *italic text*.
```

Rendered result:

This sentence has **bold text** and *italic text*.

## Lists

```markdown
- Define the physical system.
- Write the governing equation.
- Interpret the result.
```

Rendered result:

- Define the physical system.
- Write the governing equation.
- Interpret the result.

## Links

```markdown
[Visit the research page]({{ '/research/' | relative_url }})
```

Rendered result:

[Visit the research page]({{ '/research/' | relative_url }})

## Tables

```markdown
| Symbol | Meaning |
|---|---|
| $E$ | Energy |
| $\psi$ | Wavefunction |
```

Rendered result:

| Symbol | Meaning |
|---|---|
| $E$ | Energy |
| $\psi$ | Wavefunction |

## Code Blocks

Use fenced code blocks for commands, programs, or source examples:

````markdown
```bash
bundle exec jekyll build
```
````

## Recommended Post Structure

Start with a short introduction, then use clear section headings. Keep equations near the text that explains them. End with a small note, example, or checklist the reader can use immediately.
