(async function () {
  const nav = document.querySelector(".main-nav");
  const toggle = document.querySelector(".nav-search-toggle");
  const input = document.getElementById("nav-search-input");
  const results = document.getElementById("nav-search-results");

  if (!nav || !toggle || !input || !results) return;

  const script = document.querySelector("script[data-search][src*='inline-search']");
  const searchUrl = script ? script.getAttribute("data-search") : null;

  let posts = null;

  if (!searchUrl) {
    console.error("Inline search index path not found.");
    return;
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  async function loadPosts() {
    if (posts) return posts;

    try {
      const response = await fetch(searchUrl);

      if (!response.ok) {
        throw new Error("Search index not found: " + searchUrl);
      }

      posts = await response.json();
    } catch (error) {
      console.error(error);
      posts = [];
    }

    return posts;
  }

  function openSearch() {
    nav.classList.add("search-open");
    toggle.setAttribute("aria-expanded", "true");
    input.focus();
  }

  function closeSearch() {
    nav.classList.remove("search-open");
    toggle.setAttribute("aria-expanded", "false");
    input.value = "";
    results.innerHTML = "";
  }

  function render(query) {
    const needle = query.trim().toLowerCase();

    if (!needle) {
      results.innerHTML = "";
      return;
    }

    const matches = posts
      .filter((post) => {
        return [
          post.title || "",
          Array.isArray(post.tags) ? post.tags.join(" ") : post.tags || "",
          post.content || ""
        ]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      })
      .slice(0, 6);

    results.innerHTML = matches.length
      ? matches.map((post) => `
          <a href="${post.url}">
            <strong>${escapeHtml(post.title)}</strong>
            <small>${escapeHtml(post.date)} · ${escapeHtml(
              Array.isArray(post.tags) ? post.tags.join(", ") : post.tags || ""
            )}</small>
          </a>
        `).join("")
      : "<p>No matching posts found.</p>";
  }

  toggle.addEventListener("click", async () => {
    await loadPosts();

    if (nav.classList.contains("search-open")) {
      closeSearch();
    } else {
      openSearch();
    }
  });

  input.addEventListener("input", () => render(input.value));

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSearch();
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) closeSearch();
  });
})();