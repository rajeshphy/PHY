---
layout: page
title: Categories
permalink: /categories/
---

{% for category in site.categories %}
{% assign visible_posts = category[1] | where_exp: "post", "post.hidden != true" %}
{% if visible_posts.size > 0 %}
## {{ category[0] }}
{% for post in visible_posts %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}
{% endif %}
{% endfor %}
