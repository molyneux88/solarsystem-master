export const PLANETS = [
  { key: "thesun", name: "Sun", image: "sunPlanet.png", distance: "62.45"  },
  { key: "mercury", name: "Mercury", image: "mercuryPlanet.png", distance: "54.06"},
  { key: "venus", name: "Venus", image: "venusPlanet.png", distance: "44.68" },
  { key: "earth", name: "Earth", image: "earthPlanet.png", distance: "84.35" },
  { key: "mars", name: "Mars", image: "marsPlanet.png", distance: "593.04"},
  { key: "jupiter", name: "Jupiter", image: "jupiterPlanet.png", distance: "699.25" },
  { key: "saturn", name: "Saturn", image: "saturnPlanet.png", distance: "1555.4" },
  { key: "uranus", name: "Uranus", image: "uranusPlanet.png", distance: "1756.16" },
  { key: "neptune", name: "Neptune", image: "neptunePlanet.png", distance: "1522.85" },
  { key: "pluto", name: "Pluto", image: "plutoPlanet.png" }
];

export function buildPlanetFooter() {
  const currentKey = document.body.dataset.planet;
  const footer = document.querySelector(".planet-footer-nav");
  if (!footer) return;

  const index = PLANETS.findIndex(p => p.key === currentKey);
  if (index === -1) return;

  const prev = PLANETS[index - 1] || null;
  const next = PLANETS[index + 1] || null;
  const current = PLANETS[index] || null;

  const container = footer.querySelector(".uk-grid");
  container.innerHTML = "";

  if (prev) {
    container.innerHTML += `
      <a href="${prev.key}.html" class="planet-footer-card planet-footer-prev">
        <span class="planet-footer-arrow">←</span>
        <img src="/solarsystem-master/images/${prev.image}" alt="${prev.name}">
        <div class="planet-footer-text">
          <span class="planet-footer-name">${prev.name}</span>
          <span class="planet-footer-distance">${prev.distance}m south</span>
        </div>
      </a>
    `;
  }

  if (next) {
    container.innerHTML += `
      <a href="${next.key}.html" class="planet-footer-card planet-footer-next">
        <div class="planet-footer-text">
          <span class="planet-footer-name">${next.name}</span>
          <span class="planet-footer-distance">${current.distance}m north</span>
        </div>
        <img src="/solarsystem-master/images/${next.image}" alt="${next.name}">
        <span class="planet-footer-arrow">→</span>
      </a>
    `;
  }
}