(function () {
  const buttons = document.querySelectorAll("[data-copy-share]");
  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const url = button.dataset.copyShare;
      const status = button.closest(".share-strip")?.querySelector(".share-status");
      try {
        if (navigator.share) {
          await navigator.share({ title: document.title, text: "Sharing from Physics Studio", url });
          if (status) status.textContent = "Shared.";
          return;
        }
        await navigator.clipboard.writeText(url);
        if (status) status.textContent = "Link copied. Paste it into Instagram.";
      } catch (error) {
        if (status) status.textContent = "Link ready to copy from the address bar.";
      }
    });
  });
})();
