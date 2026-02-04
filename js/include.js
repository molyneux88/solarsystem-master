const base = document.createElement('base');
base.href = window.location.pathname.includes('/planets/')
  ? '../'
  : './';

document.head.appendChild(base);

fetch('partials/header.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;
  })
  .catch(err => console.error('Header load failed:', err));