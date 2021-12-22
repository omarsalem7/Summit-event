// close and open btns selectors
const openIcon = document.querySelector('#humberger');
const closeIcon = document.querySelector('.closeIcon');

const navbar = document.querySelector('.nav');
const header = document.querySelector('.header');
const main = document.querySelector('.main');

const navbarOverlay = document.getElementById('navbar-overlay');

openIcon.addEventListener('click', () => {
  // creat layout
  navbarOverlay.style.width = '100%';
  // add blur in background
  navbar.classList.add('blur');
  header.classList.add('blur');
  main.classList.add('blur');
});

closeIcon.addEventListener('click', () => {
  //    remove the overlay
  navbarOverlay.style.width = '0%';
  //    remove blur from background
  navbar.classList.remove('blur');
  header.classList.remove('blur');
  main.classList.remove('blur');
});
const overlayContent = document.querySelector('.overlay-content');
overlayContent.addEventListener('click', () => {
  navbarOverlay.style.width = '0%';
  navbar.classList.remove('blur');
  header.classList.remove('blur');
  main.classList.remove('blur');
});
