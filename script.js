const menu = document.querySelector('.menu');
const nav = document.querySelector('.header nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('mobile-open');
  });
});
