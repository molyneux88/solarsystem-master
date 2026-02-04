function loadPartial(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(`Error loading ${file}`, err));
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("site-head")) {
    loadPartial("site-head", "/partials/head.html");
  }

  if (document.getElementById("site-header")) {
    loadPartial("site-header", "/partials/header.html");
  }

  if (document.getElementById("planet-slider")) {
    loadPartial("planet-slider", "/partials/planet-slider.html");
  }
});
