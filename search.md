---
layout: page
title: Search
permalink: /search/
---

<label class="search-box">
  <span>Search notes</span>
  <input id="search-input" type="search" placeholder="Type a title, tag, or phrase" autocomplete="off">
</label>
<div id="search-results" class="search-results"></div>
<script src="{{ '/assets/js/search.js' | relative_url }}" data-search="{{ '/search.json' | relative_url }}" defer></script>
