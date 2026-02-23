import { mmToPx } from "./dpiToPx.js";

export function bindPlanetScale(section) {
  const model = section.querySelector(".planet-model");
  const button = section.querySelector(".planet-scale-toggle");

  if (!model || !button) return;

  const mm = parseFloat(model.dataset.diameterMm);
  const heightRatio = parseFloat(model.dataset.heightRatio);

  let isTrueScale = false;

  function updateButton() {
    button.setAttribute("aria-pressed", isTrueScale);

    if (isTrueScale) {
      button.textContent = `Showing true size · ${mm} mm — tap to reset`;
      button.classList.add("is-active");
    } else {
      button.textContent = `Show true size (${mm} mm)`;
      button.classList.remove("is-active");
    }
  }

  function toggleScale() {
    const truePx = mmToPx(mm);
    if (!truePx) return;

    if (!isTrueScale) {
      const targetWidth = truePx;
      const targetHeight = heightRatio
        ? truePx * heightRatio
        : truePx;

      model.style.width = `${targetWidth}px`;
      model.style.height = `${targetHeight}px`;

      isTrueScale = true;
    } else {
      model.style.width = "";
      model.style.height = "400px";

      isTrueScale = false;
    }

    updateButton();
  }

  // Ensure base height always exists
  model.style.height = "400px";

  updateButton();
  button.addEventListener("click", toggleScale);
}