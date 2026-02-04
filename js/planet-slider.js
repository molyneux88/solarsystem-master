fetch('../partials/planet-slider.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('planet-slider').innerHTML = html;
  })
  .catch(err => console.error('Slider load failed:', err));