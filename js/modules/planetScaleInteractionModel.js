import { mmToPx } from "./dpiToPx.js";

export function bindPlanetScale(section) {
  const model = section.querySelector(".planet-model");
  const button = section.querySelector(".planet-scale-toggle");
  const inner = section.querySelector(".planet-scale-inner");



  let initialWidth;
  let initialHeight;

  if (!model || !button) return;

  const mm = parseFloat(model.dataset.diameterMm);
  const heightRatio = parseFloat(model.dataset.heightRatio);
  const bodyRatio = parseFloat(model.dataset.bodyRatio) || 1; // Saturn only

  let isTrueScale = false;

// ----------------------------
  // Initialize base dimensions
  // ----------------------------
  function initDimensions() {
    const rect = model.getBoundingClientRect();
    initialWidth = rect.width;
    initialHeight = rect.height;

    // Lock the initial height for smooth transition
    model.style.height = initialHeight + "px";
    model.style.width = initialWidth + "px";
  }

  if (document.readyState === "complete") {
    initDimensions();
  } else {
    window.addEventListener("load", initDimensions);
  }

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

      // Compensate for Saturn ring padding
      const compensation = 1 / bodyRatio;

      const targetWidth = truePx * compensation;

      const targetHeight = heightRatio
        ? targetWidth * heightRatio
        : targetWidth;

      inner.style.width = `${targetWidth}px`;
      inner.style.height = `${targetHeight}px`;

      isTrueScale = true;

    } else {

      inner.style.width = `${initialWidth}px`;   // restore stable base
      inner.style.height = `${initialHeight}px`;

      isTrueScale = false;
    }

    updateButton();
  }

  // Stable base size (important for model-viewer)
    inner.style.width = `${initialWidth}px`;   // restore stable base
    inner.style.height = `${initialHeight}px`;

  updateButton();
  button.addEventListener("click", toggleScale);
}