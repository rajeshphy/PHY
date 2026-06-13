---
layout: default
title: Research
permalink: /research/
---

<section class="post-list premium-post-list research-archive" aria-label="Research articles">
  <div class="section-heading">
    <h2>Research Articles</h2>
    <p>Only posts filed under the <strong>research</strong> category are listed here.</p>
  </div>

  {% assign research_posts = site.posts | where_exp: "post", "post.categories contains 'research'" %}

  {% if research_posts.size > 0 %}
    {% assign grouped_posts = research_posts | group_by_exp: "post", "post.date | date: '%Y'" %}

    {% for year_group in grouped_posts %}
      <h2 class="research-year">{{ year_group.name }}</h2>

      {% for post in year_group.items %}
        {% assign read_minutes = post.content | number_of_words | divided_by: 180 | plus: 1 %}

        <article class="premium-post-card">
          <a class="premium-post-card-link" href="{{ post.url | relative_url }}">
            <div class="premium-post-topline">
              <span>{{ post.categories | first | default: "Research" }}</span>
              <span>{{ post.date | date: "%d %b %Y" }}</span>
              <span>{{ read_minutes }} min read</span>
            </div>

            <h2>{{ post.title }}</h2>

            <p>
              {{ post.summary | default: post.excerpt | strip_html | normalize_whitespace | truncate: 145 }}
            </p>

            <div class="premium-tag-row">
              {% for tag in post.tags limit: 3 %}
                <span>{{ tag }}</span>
              {% endfor %}
            </div>
          </a>
        </article>
      {% endfor %}
    {% endfor %}
  {% else %}
    <section class="note-panel">
      <h2>No Research Articles Yet</h2>
      <p>When a post is filed under the <strong>research</strong> category, it will appear here automatically in yearwise order.</p>
    </section>
  {% endif %}
</section>
