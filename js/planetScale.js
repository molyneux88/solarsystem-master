export default class PlanetScale {
  constructor(section) {
    this.section = section;
    this.img = section.querySelector(".planet-image");
    this.button = section.querySelector(".planet-scale-toggle");

    if (!this.img || !this.button) return;

    this.scaled = false;
    this.baseWidth = 0;
    this.baseHeight = 0;

    this.init();
  }

  getPixelsPerCm() {
    const el = document.createElement("div");
    el.style.width = "1cm";
    el.style.position = "absolute";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    const px = el.offsetWidth;
    document.body.removeChild(el);
    return px;
  }

  init() {
    const onReady = () => {
      this.baseWidth = this.img.offsetWidth;
      this.baseHeight = this.img.offsetHeight;

      this.img.style.width = `${this.baseWidth}px`;
      this.img.style.height = `${this.baseHeight}px`;

      this.bind();
    };

    if (this.img.complete) onReady();
    else this.img.addEventListener("load", onReady, { once: true });
  }

  bind() {
    this.button.addEventListener("click", () => this.toggle());
  }

  toggle() {
    if (!this.scaled) {
      const mm = parseFloat(this.img.dataset.diameterMm);
      const cm = mm / 10;
      const pxPerCm = this.getPixelsPerCm();
      const sizePx = pxPerCm * cm;

      this.img.style.width = `${sizePx}px`;
      this.img.style.height = `${sizePx}px`;

      this.section.classList.add("planet-scale--active");
      this.button.textContent = "Tap to reset";
      this.button.setAttribute("aria-pressed", "true");
    } else {
      this.img.style.width = `${this.baseWidth}px`;
      this.img.style.height = `${this.baseHeight}px`;

      this.section.classList.remove("planet-scale--active");
      this.button.textContent = "Tap to show true size";
      this.button.setAttribute("aria-pressed", "false");
    }

    this.scaled = !this.scaled;
  }
}