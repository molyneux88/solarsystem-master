export function mmToPx(mm) {
  const dpi = parseFloat(sessionStorage.getItem("dpi"));
  if (!dpi) return null;

  const dppx =
    window.devicePixelRatio ||
    (window.matchMedia &&
      window.matchMedia("(min-resolution: 2dppx)").matches
      ? 2
      : 1) ||
    1;

  return (dpi / dppx) *0.5393701;
}
