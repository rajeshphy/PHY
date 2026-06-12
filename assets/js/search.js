(async function () {
  const input = document.getElementById("search-input");
  const output = document.getElementById("search-results");
  if (!input || !output) return;

  const script = document.currentScript;
  const searchUrl = script ? script.dataset.search : "/search.json";
  const posts = await fetch(searchUrl)
    .then((response) => response.json())
    .catch(() => []);

  function render(query) {
    const needle = query.trim().toLowerCase();
    if (!needle) {
      output.innerHTML = "";
      return;
    }

    const matches = posts.filter((post) => {
      return [post.title, post.tags, post.content].join(" ").toLowerCase().includes(needle);
    });

    output.innerHTML = matches.length
      ? matches.map((post) => `
          <article>
            <time>${post.date}</time>
            <h2><a href="${post.url}">${post.title}</a></h2>
          </article>
        `).join("")
      : "<p>No matching notes found.</p>";
  }

  input.addEventListener("input", () => render(input.value));
})();
