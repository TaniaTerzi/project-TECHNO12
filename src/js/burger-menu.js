export const mobileMenu = document.querySelector('.menu-container');
export const openMenuBtn = document.querySelector('.menu-button');
export const closeMenuBtn = document.querySelector('.js-close-menu');
export const slider1 = document.querySelector('.slider1');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('visually-hidden');
  console.log('slkdj');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('visually-hidden');
  console.log('slkdj');
});

// const toggleMenu = () => {
//   const isMenuOpen =
//     openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//   openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//   mobileMenu.classList.toggle('is-open');

//   const scrollLockMethod = !isMenuOpen
//     ? 'disableBodyScroll'
//     : 'enableBodyScroll';
//   bodyScrollLock[scrollLockMethod](document.body);
// };

// openMenuBtn.addEventListener('click', toggleMenu);
// closeMenuBtn.addEventListener('click', toggleMenu);

// // Close the mobile menu on wider screens if the device orientation changes
// window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//   if (!e.matches) return;
//   mobileMenu.classList.remove('is-open');
//   openMenuBtn.setAttribute('aria-expanded', false);
//   bodyScrollLock.enableBodyScroll(document.body);
// });

slider1.addEventListener('click', e => {
  e.preventDefault();
  slider1.classList.toggle('active');
});

const toggleSwitch1 = document.querySelector('.slider1');
toggleSwitch1.addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container-header').classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    openMenuBtn.style.stroke = 'white';
    closeMenuBtn.style.stroke = 'white';
  } else {
    localStorage.setItem('theme', 'light');
    openMenuBtn.style.stroke = 'black';
    closeMenuBtn.style.stroke = 'black';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    document
      .querySelector('.container-header')
      .classList.toggle('dark-mode', savedTheme === 'dark');
    slider1.classList.toggle('active', savedTheme === 'dark');
  }
});
