// Initialize medium zoom.
$(document).ready(function () {
  // zoomCoverage controls how much of the screen the zoomed image can occupy (0.0 - 1.0).
  // Increase to zoom in more, decrease to zoom in less. Default: 0.8 (80% of screen).
  var zoomCoverage = 0.8;
  var zoomMargin = Math.min(window.innerWidth, window.innerHeight) * ((1 - zoomCoverage) / 2);

  medium_zoom = mediumZoom("[data-zoomable]", {
    margin: zoomMargin,
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });
});
