const PLANET_DIAMETERS_CM = {
  earth: 1.37 // 13.7 mm
};

function getPixelsPerCm() {
  const el = document.createElement("div");
  el.style.width = "1cm";
  el.style.position = "absolute";
  el.style.visibility = "hidden";
  document.body.appendChild(el);

  const px = el.offsetWidth;
  document.body.removeChild(el);
  return px;
}

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".planet-image");
  const button = document.querySelector(".planet-scale-toggle");

  if (!img || !button) return;

  let scaled = false;
  let baseWidth;
  let baseHeight;

  function initBaseSize() {
    baseWidth = img.offsetWidth;
    baseHeight = img.offsetHeight;

    // Lock initial size AFTER image has loaded
    img.style.width = `${baseWidth}px`;
    img.style.height = `${baseHeight}px`;
  }

  if (img.complete) {
    initBaseSize();
  } else {
    img.addEventListener("load", initBaseSize, { once: true });
  }

  button.addEventListener("click", () => {
    if (!baseWidth || !baseHeight) return;

    if (!scaled) {
      const pxPerCm = getPixelsPerCm();
      const sizeCm = PLANET_DIAMETERS_CM[img.dataset.planet];
      const sizePx = pxPerCm * sizeCm;

      img.style.width = `${sizePx}px`;
      img.style.height = `${sizePx}px`;

      button.textContent = "Tap to reset";
      button.setAttribute("aria-pressed", "true");
    } else {
      img.style.width = `${baseWidth}px`;
      img.style.height = `${baseHeight}px`;

      button.textContent = "Tap to show true size";
      button.setAttribute("aria-pressed", "false");
    }

    scaled = !scaled;
  });
});
