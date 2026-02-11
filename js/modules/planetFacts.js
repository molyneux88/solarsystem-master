import { planetFacts } from "./planetFactsData.js";

export function bindPlanetFacts({ planetKey, count = 3 }) {
  const sliderList = document.querySelector(".uk-slider-items");
  if (!sliderList) return;

  const facts = planetFacts[planetKey];
  if (!facts || facts.length === 0) return;

  // Shuffle facts
  const shuffled = [...facts].sort(() => 0.5 - Math.random());

  // Select requested amount
  const selectedFacts = shuffled.slice(0, count);

  // Clear existing content
  sliderList.innerHTML = "";

  // Build slides
  selectedFacts.forEach(fact => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="fact-card fact-card--${fact.theme}">
        ${fact.text}
      </div>
    `;

    sliderList.appendChild(li);
  });

  // Reinitialise UIkit slider (important)
  if (window.UIkit) {
    UIkit.update(sliderList.closest("[uk-slider]"));
  }
}