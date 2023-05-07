export const slider = document.querySelector('.slider');

slider.addEventListener('click', () => {
  slider.classList.toggle('active');
});

export const toggleSwitch = document.querySelector('.slider');
toggleSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container-header').classList.toggle('dark-mode');
});


