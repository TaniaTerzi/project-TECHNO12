export const mobileMenu = document.querySelector('.menu-container');
export const openMenuBtn = document.querySelector('.menu-button');
export const closeMenuBtn = document.querySelector('.js-close-menu');

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
