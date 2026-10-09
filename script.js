// ---------- Tabs ----------
// Each tab is a <section class="panel" id="..."> and the URL hash picks which
// one is shown, so links like courierrrrr.github.io/#coding work directly.
const panels = document.querySelectorAll(".panel");
const tabLinks = document.querySelectorAll("nav a[data-tab]");

function showTab() {
  const id = location.hash.slice(1) || "about";
  const target = document.getElementById(id) ? id : "about";

  panels.forEach((panel) => (panel.hidden = panel.id !== target));
  tabLinks.forEach((link) => link.classList.toggle("active", link.dataset.tab === target));
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", showTab);
showTab();

// ---------- Light / dark mode ----------
const root = document.documentElement;
const themeIcon = document.querySelector(".theme-icon");

function updateIcon() {
  themeIcon.textContent = root.dataset.theme === "light" ? "☀" : "☾";
}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateIcon();
});

updateIcon();

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
