import { mmToPx } from "./dpiToPx.js";

export function bindPlanetScale(section) {
  const img = section.querySelector(".planet-image");
  const button = section.querySelector(".planet-scale-toggle");
  let initialWidth;
  let initialHeight;
  let aspectRatio;

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
    


    function initDimensions() {
    const rect = img.getBoundingClientRect();
    initialWidth = rect.width;
    initialHeight = rect.height;
    aspectRatio = initialWidth / initialHeight;
    }

    window.addEventListener("load", initDimensions);
  

    function toggleScale() {
        const px = mmToPx(mm);
        if (!px) return;

        const targetHeight = px;
        const targetWidth = px * aspectRatio;

        if (!isTrueScale) {
            // --- LOCK CURRENT SIZE FIRST ---
            const rect = img.getBoundingClientRect();
            img.style.width = rect.width + "px";
            img.style.height = rect.height + "px";

            // Force reflow
            img.offsetHeight;

            // --- SCALE UP ---
            img.classList.add("is-scaled");
            img.style.height = targetHeight + "px";
            img.style.width = targetWidth + "px";

            isTrueScale = true;
        }  else {
          // Animate down first
          img.style.width = initialWidth + "px";
          img.style.height = initialHeight + "px";

          // Wait for transition to finish before removing constraint
          img.addEventListener(
            "transitionend",
            () => {
              img.classList.remove("is-scaled");
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
