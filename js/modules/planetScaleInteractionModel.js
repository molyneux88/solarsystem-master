import { mmToPx } from "./dpiToPx.js";

export function bindPlanetScale(section) {
  const model = section.querySelector(".planet-model");
  const button = section.querySelector(".planet-scale-toggle");
  let initialWidth;
  let initialHeight;


  if (!img || !button) return;

  const mm = parseFloat(img.dataset.diameterMm);
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
    const rect = img.getBoundingClientRect();
    initialWidth = rect.width;
    initialHeight = rect.height;

    }

    window.addEventListener("load", initDimensions);
  

    function toggleScale() {
      const px = mmToPx(mm);
      if (!px) return;

      if (!isTrueScale) {
        const rect = model.getBoundingClientRect();

        // Lock current size
        model.style.width = rect.width + "px";
        model.style.height = rect.height + "px";

        model.offsetHeight; // force reflow

        model.classList.add("is-scaled");

        // Make it a square true-size container
        model.style.width = px + "px";
        model.style.height = px + "px";

        isTrueScale = true;

      } else {
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
