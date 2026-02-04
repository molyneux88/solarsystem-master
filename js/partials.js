// Load a partial into an element by ID
function loadPartial(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(`Error loading ${file}`, err));
}

document.addEventListener("DOMContentLoaded", () => {
  // Use repo-root paths to ensure it works from any page
  const repoRoot = "/solarsystem-master";

  if (document.getElementById("site-head")) {
    loadPartial("site-head", `${repoRoot}/partials/head.html`);
  }

  if (document.getElementById("site-header")) {
    loadPartial("site-header", `${repoRoot}/partials/header.html`);
  }

  if (document.getElementById("planet-slider")) {
    loadPartial("planet-slider", `${repoRoot}/partials/planet-slider.html`);
  }
});
