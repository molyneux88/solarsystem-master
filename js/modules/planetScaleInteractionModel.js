import { mmToPx } from "./dpiToPx.js";

export function bindPlanetScale(section) {
  const model = section.querySelector(".planet-model");
  const button = section.querySelector(".planet-scale-toggle");
  let initialWidth;
  let initialHeight;


  if (!model || !button) return;

  const mm = parseFloat(model.dataset.diameterMm);
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
  // Scale toggle
  // ----------------------------
    


    function initDimensions() {
    const rect = model.getBoundingClientRect();
    initialWidth = rect.width;
    initialHeight = rect.height;

    }

    window.addEventListener("load", initDimensions);
  

    let baseHeight = null;

    function cacheBaseHeight() {
      const rect = model.getBoundingClientRect();
      baseHeight = rect.height;
    }

    window.addEventListener("load", cacheBaseHeight);

    function toggleScale() {
      const px = mmToPx(mm);
      if (!px || !baseHeight) return;

      if (!isTrueScale) {
        const scaleFactor = px / baseHeight;

        requestAnimationFrame(() => {
          model.style.transform = `scale(${scaleFactor})`;
        });

        isTrueScale = true;
      } else {
        requestAnimationFrame(() => {
          model.style.transform = "scale(1)";
        });

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
