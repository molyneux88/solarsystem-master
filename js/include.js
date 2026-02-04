const depth = location.pathname.split('/').length - 2;
const prefix = '../'.repeat(depth);

fetch(`${prefix}partials/header.html`)
  .then(r => r.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;
  });