import { PLANET_PHYSICS } from "./planetPhysicalData.js";
import { mmToPx } from "./dpiToPx.js";

export function bindPlanetScale({
  triggerSelector,
  imageSelector,
  imagePositionerSelector,
  planetKey,
  resetSize
}) {
  const planet = PLANET_PHYSICS[planetKey];

  $(triggerSelector).click(function () {
    const $img = $(imageSelector);
    const $pos = $(imagePositionerSelector);

    if ($img.hasClass("enlarged")) {
      $img.removeClass("enlarged");

      $img.stop().animate(resetSize, 2000, function () {
        $(this).parent().removeClass("ontop");
      });

      return;
    }

    $img.addClass("enlarged");
    $(this).parent().addClass("ontop");

    if (planet.type === "circle") {
      const sizePx = mmToPx(planet.mm);
      $img.stop().animate({ width: sizePx, height: sizePx }, 2000);
      $pos.stop().animate({ height: sizePx }, 2000);
    }

    if (planet.type === "ellipse") {
      const base = mmToPx(planet.equatorialMm) / planet.ringRatio;
      const height = base / planet.polarRatio;

      $img.stop().animate(
        { width: height, height: base },
        2000
      );
      $pos.stop().animate({ height: base }, 2000);
    }
  });
}