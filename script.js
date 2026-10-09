// ---------- Tabs ----------
// Each tab is a <section class="panel" id="..."> and the URL hash picks which
// one is shown, so links like courierrrrr.github.io/#coding work directly.
const panels = document.querySelectorAll(".panel");
const tabLinks = document.querySelectorAll(".tabs a");

function showTab() {
  const id = location.hash.slice(1) || "about";
  const target = document.getElementById(id) ? id : "about";

  panels.forEach((panel) => (panel.hidden = panel.id !== target));
  tabLinks.forEach((link) => {
    const active = link.dataset.tab === target;
    link.classList.toggle("active", active);
    link.setAttribute("aria-selected", active);
  });
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", showTab);
showTab();

// ---------- Dark mode ----------
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "dark" || (!savedTheme && prefersDark)) root.dataset.theme = "dark";

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
