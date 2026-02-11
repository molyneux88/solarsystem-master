import { mmToPx } from "./dpiToPx.js";

export function bindPlanetScale(section) {
  const img = section.querySelector(".planet-image");
  const button = section.querySelector(".planet-scale-toggle");
  const initialWidth = img.offsetWidth + "px";
  const initialHeight = img.offsetHeight + "px";
  const aspectRatio = initialWidth / initialHeight;

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
  // Scale toggle
  // ----------------------------
    
    
  

  function toggleScale() {
    const px = mmToPx(mm);
    if (!px) return;

    img.getBoundingClientRect();

    const targetHeight = px;                 // physical diameter in px
    const targetWidth = px * aspectRatio;   // preserve shape

    

    if (isTrueScale) {
      // SCALE DOWN
      img.style.width = initialWidth;
      img.style.height = initialHeight;
      img.classList.remove("is-scaled");
      isTrueScale = false;
    } else {
      // SCALE UP
      img.style.height = `${targetHeight}px`;
      img.style.width = `${targetWidth}px`;
      img.classList.add("is-scaled");
      isTrueScale = true;
    }

    updateButton();
  }

  // ----------------------------
  // Init
  // ----------------------------

  updateButton();

  button.addEventListener("click", toggleScale);
}
