export function mmToPx(mm) {
  const dpi = parseFloat(sessionStorage.getItem("dpi"));
  if (!dpi || !mm) return null;

  const dppx =
    window.devicePixelRatio ||
    (window.matchMedia &&
      window.matchMedia(
        "(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5)"
      ).matches
        ? 2
        : 1) ||
    1;

  return (dpi / dppx) * (mm / 25.4);
}