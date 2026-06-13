---
layout: page
title: Posts
permalink: /posts/
---

{% assign visible_posts = site.posts | where_exp: "post", "post.hidden != true" %}
{% for post in visible_posts %}
- {{ post.date | date: "%d %b %Y" }}: [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
