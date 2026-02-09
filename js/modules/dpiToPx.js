export function mmToPx(mm) {
  const dpi = parseFloat(sessionStorage.getItem("dpi"));
  if (!dpi) return null;

  const dppx =
    window.devicePixelRatio ||
            (window.matchMedia && 
                window.matchMedia(
                    "(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
            1;

  // Existing, proven scale factors
  const SCALE_MAP = {
    earth: 0.5393701,
    mars: 0.284,   // example
    jupiter: 6.14  // example
  };

  return (dpi / dppx) * SCALE_MAP[planetKey];
}
