// Mobile navigation toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Copy T3 Hub repository URL button
const copyUrlBtn = document.getElementById("copyUrlBtn");
const t3hubUrl = document.getElementById("t3hubUrl");

if (copyUrlBtn && t3hubUrl) {
  copyUrlBtn.addEventListener("click", async () => {
    const text = t3hubUrl.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyUrlBtn.textContent = "Copied!";
      setTimeout(() => {
        copyUrlBtn.textContent = "Copy";
      }, 1800);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(t3hubUrl);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand("copy");
      copyUrlBtn.textContent = "Copied!";
      setTimeout(() => {
        copyUrlBtn.textContent = "Copy";
      }, 1800);
    }
  });
}
