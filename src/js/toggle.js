export const slider = document.querySelector('.slider');
export const openMenuBtn = document.querySelector('.menu-hamburger');
export const closeMenuBtn = document.querySelector('.js-close-menu');
slider.addEventListener('click', e => {
  e.preventDefault();
  slider.classList.toggle('active');
});

export const toggleSwitch = document.querySelector('.slider');
toggleSwitch.addEventListener('click', e => {
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
    slider.classList.toggle('active', savedTheme === 'dark');
  }
});
