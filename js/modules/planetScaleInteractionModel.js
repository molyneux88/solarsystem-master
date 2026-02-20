import { mmToPx } from "./dpiToPx.js";

export function bindPlanetScale(section) {
  const model = section.querySelector(".planet-model");
  const button = section.querySelector(".planet-scale-toggle");
  let initialWidth;
  let initialHeight;

  if (!model || !button) return;

  const mm = parseFloat(model.dataset.diameterMm);
  const heightRatio = parseFloat(model.dataset.heightRatio); // optional, for Saturn
  let isTrueScale = false;

  // ----------------------------
  // Helpers
  // ----------------------------

  function shouldPinButton() {
    const rect = model.getBoundingClientRect();
    return rect.height > window.innerHeight * 0.75;
  }

  function updateButton() {
    button.setAttribute("aria-pressed", isTrueScale);

    if (isTrueScale) {
      button.textContent = `Showing true size · ${mm} mm — tap to reset`;
      button.classList.add("is-active");

      if (shouldPinButton()) {
        button.classList.add("is-pinned");
      }
    } else {
      button.textContent = `Show true size (${mm} mm)`;
      button.classList.remove("is-active", "is-pinned");
    }
  }

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

  // ----------------------------
  // Scale toggle
  // ----------------------------
  function toggleScale() {
    const truePx = mmToPx(mm);
    if (!truePx) return;

    if (!isTrueScale) {
      // --- SCALE UP ---
      const targetWidth = truePx;
      const targetHeight = heightRatio ? truePx * heightRatio : truePx;

      model.style.width = targetWidth + "px";
      model.style.height = targetHeight + "px";

      model.classList.add("is-scaled");
      isTrueScale = true;

    } else {
      // --- SCALE DOWN ---
      model.style.width = initialWidth + "px";
      model.style.height = initialHeight + "px";

      model.addEventListener(
        "transitionend",
        () => {
          model.classList.remove("is-scaled");
        },
        { once: true }
      );

      isTrueScale = false;
    }

    updateButton();
  }

  // ----------------------------
  // Init
  // ----------------------------
  updateButton();
  button.addEventListener("click", toggleScale);
}