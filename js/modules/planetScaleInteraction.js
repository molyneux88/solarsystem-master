import { PLANET_PHYSICS } from "./planetPhysicalData.js";
import { mmToPx } from "./dpiToPx.js";

export function bindPlanetScale(section) {
  const img = section.querySelector(".planet-image");
  const button = section.querySelector(".planet-scale-toggle");
  const overlay = section.querySelector(".planet-measurement-overlay");

  if (!img || !button) return;

  const mm = parseFloat(img.dataset.diameterMm);
  let isTrueScale = false;

  // ----------------------------
  // Helpers
  // ----------------------------

  function shouldPinButton() {
    const rect = img.getBoundingClientRect();
    return rect.height > window.innerHeight * 0.75;
  }

  function updateButton() {
    button.setAttribute("aria-pressed", isTrueScale);

    if (isTrueScale) {
      button.textContent = `Showing true size · ${mm} mm — tap to shrink`;
      button.classList.add("is-active");

      if (shouldPinButton()) {
        button.classList.add("is-pinned");
      }
    } else {
      button.textContent = `Show true size (${mm} mm)`;
      button.classList.remove("is-active", "is-pinned");
    }
  }

  function updateOverlay() {
    if (!overlay) return;

    if (isTrueScale) {
      overlay.textContent = `${mm} mm`;
      overlay.classList.add("is-visible");
    } else {
      overlay.classList.remove("is-visible");
    }
  }

  // ----------------------------
  // Scale toggle
  // ----------------------------

  function toggleScale() {
    const px = mmToPx(mm);
    if (!px) return;

    if (isTrueScale) {
      // SCALE DOWN
      img.style.width = "";
      img.style.height = "";
      img.classList.remove("is-scaled");
      isTrueScale = false;
    } else {
      // SCALE UP
      img.style.width = `${px}px`;
      img.style.height = `${px}px`;
      img.classList.add("is-scaled");
      isTrueScale = true;
    }

    updateButton();
    updateOverlay();
  }

  // ----------------------------
  // Init
  // ----------------------------

  updateButton();
  updateOverlay();

  button.addEventListener("click", toggleScale);
}
