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
  const planet = img.dataset.planet;
  const baseWidth = img.offsetWidth;
  const baseHeight = img.offsetHeight;

  // Lock initial dimensions so first animation behaves correctly
  img.style.width = `${baseWidth}px`;
  img.style.height = `${baseHeight}px`;

  button.addEventListener("click", () => {
    if (!scaled) {
      const pxPerCm = getPixelsPerCm();
      const sizeCm = PLANET_DIAMETERS_CM[planet];
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
