---
title: "How To Write YAML Front Matter"
summary: "A practical guide to the small YAML block that controls title, date, tags, permalink, and visibility in Jekyll posts."
date: 2024-06-13 00:00:00 +0530
categories: doc
tags:
  - yaml
  - front-matter
  - jekyll
  - documentation
permalink: /how-to-write-front-matter/
---

Front matter is the YAML block at the top of a Jekyll page or post. It is written between two lines of three dashes.

## Basic Post Front Matter

```yaml
---
title: "My Lecture Note"
summary: "A short one-line description for cards, search, and previews."
date: 2026-06-13 10:00:00 +0530
categories: lecture
tags:
  - quantum
  - notes
  - msc
permalink: /my-lecture-note/
---
```

## What Each Field Does

| Field | Purpose |
|---|---|
| `title` | Main title shown on the page and post card |
| `summary` | Short description shown in lists and previews |
| `date` | Publication date and ordering |
| `categories` | Broad grouping such as `lecture`, `doc`, `exam` |
| `tags` | Searchable labels such as `latex`, `quiz`, `msc` |
| `permalink` | Clean URL for the page |
Math rendering is already enabled for posts in `_config.yml`, so `math: true` does not need to be repeated in individual posts.

## Page Front Matter

Pages outside `_posts` usually need a layout and permalink:

```yaml
---
layout: default
title: "Notes"
permalink: /notes/
---
```

## Hidden Template Posts

For material pages that should be linked from Notes but not shown in the main blog list, add `hidden: true`.

```yaml
---
title: "M.Sc Sem-I Material Template"
summary: "Template page for M.Sc Semester-I lecture files."
date: 2026-06-13 00:40:00 +0530
categories:
  - notes
  - msc
tags:
  - msc
  - semester
  - template
permalink: /msc-sem-i-template/
hidden: true
---
```

## Small Rules

- Keep `title` and `summary` in quotes when they contain punctuation.
- Use lowercase tags such as `front-matter`, `latex`, and `quiz`.
- Use a trailing slash in `permalink`, for example `/notes/`.
- Do not repeat `math: true` in posts; the site default already enables it.
- Use `hidden: true` only for pages that should not appear in normal archives.
