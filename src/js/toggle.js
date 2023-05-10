export const slider = document.querySelector('.slider');
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
  } else {
    localStorage.setItem('theme', 'light');
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

///     USERBAR ///

export const userLogout = document.querySelector('.logout');
export const userLogin = document.querySelector('.logged-user');
userLogin.addEventListener('click', e => {
  userLogout.classList.remove('visually-hidden');
});

export const body = document.querySelector('.main');
body.addEventListener('mouseover', onKeyPress);
function onKeyPress(event) {
  console.log(event);
  userLogout.classList.add('visually-hidden');
}
onKeyPress();

userLogout.addEventListener('click', e => {
  location.reload();
});
