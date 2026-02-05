document.addEventListener("DOMContentLoaded", () => {
  const root = "/solarsystem-master";

  const load = (id, file) => {
    fetch(file)
      .then(r => r.text())
      .then(html => document.getElementById(id).innerHTML = html)
      .catch(err => console.error(`Failed to load ${file}`, err));
  };

  if (document.getElementById("site-header")) {
    load("site-header", `${root}/partials/header.html`);
  }

  if (document.getElementById("planet-slider")) {
    load("planet-slider", `${root}/partials/planet-slider.html`);
  }
});
