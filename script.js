document.getElementById('year').textContent = new Date().getFullYear();

// Premium image protection
document.addEventListener('contextmenu', function (e) {
  if (e.target.closest('.premium-card, #premium img')) {
    e.preventDefault();
  }
});

document.addEventListener('dragstart', function (e) {
  if (e.target.matches('img')) {
    e.preventDefault();
  }
});

document.addEventListener('keydown', function (e) {
  if (
    (e.ctrlKey || e.metaKey) &&
    ['s', 'u'].includes(e.key.toLowerCase())
  ) {
    e.preventDefault();
  }
});
