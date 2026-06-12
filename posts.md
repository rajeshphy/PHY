---
layout: page
title: Posts
permalink: /posts/
---

{% for post in site.posts %}
- {{ post.date | date: "%d %b %Y" }}: [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
