(async function () {
  const input = document.getElementById("search-input");
  const output = document.getElementById("search-results");
  if (!input || !output) return;

  const script = document.querySelector("script[data-search]");
  const searchUrl = script ? script.getAttribute("data-search") : null;

  if (!searchUrl) {
    output.innerHTML = "<p>Search index path not found.</p>";
    return;
  }

  let posts = [];

  try {
    const response = await fetch(searchUrl);

    if (!response.ok) {
      throw new Error("Search index not found: " + searchUrl);
    }

    posts = await response.json();
  } catch (error) {
    console.error(error);
    output.innerHTML = "<p>Search index could not be loaded.</p>";
    return;
  }

  function render(query) {
    const needle = query.trim().toLowerCase();

    if (!needle) {
      output.innerHTML = "";
      return;
    }

    const matches = posts.filter((post) => {
      return [
        post.title || "",
        Array.isArray(post.tags) ? post.tags.join(" ") : post.tags || "",
        post.content || ""
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });

    output.innerHTML = matches.length
      ? matches
          .map(
            (post) => `
              <article>
                <time>${post.date || ""}</time>
                <h2><a href="${post.url}">${post.title}</a></h2>
              </article>
            `
          )
          .join("")
      : "<p>No matching notes found.</p>";
  }

  input.addEventListener("input", () => render(input.value));
})();