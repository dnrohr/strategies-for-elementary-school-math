const input = document.querySelector("[data-chapter-search]");
const cards = [...document.querySelectorAll("[data-search]")];
const status = document.querySelector("[data-search-status]");

input?.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();
  let shown = 0;
  for (const card of cards) {
    const visible = !query || card.dataset.search.includes(query);
    card.hidden = !visible;
    if (visible) shown += 1;
  }
  status.textContent = query ? `${shown} chapter${shown === 1 ? "" : "s"} match “${input.value.trim()}”.` : "";
});

const themeToggle = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("book-theme");
const applyTheme = theme => {
  document.documentElement.dataset.theme = theme;
  if (themeToggle) {
    const night = theme === "night";
    themeToggle.setAttribute("aria-pressed", String(night));
    themeToggle.setAttribute("aria-label", `Use ${night ? "light" : "dark"} color theme`);
  }
};
applyTheme(savedTheme === "night" ? "night" : "day");
themeToggle?.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "night" ? "day" : "night";
  applyTheme(theme);
  localStorage.setItem("book-theme", theme);
});
