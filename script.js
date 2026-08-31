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
function toggleMobileMenu() {
  const nav = document.querySelector('.header nav');
  nav.classList.toggle('mobile-open');
}
document.addEventListener("contextmenu", function(e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});

document.addEventListener("dragstart", function(e) {
  if (e.target.tagName === "IMG") {
    e.preventDefault();
  }
});
