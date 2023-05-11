export const userLogout = document.querySelector('.logout');
export const userLogin = document.querySelector('.logged-user');
userLogin.addEventListener('click', e => {
  userLogout.classList.remove('visually-hidden');
});

const body = document.querySelector('.main');
body.addEventListener('click', onKeyPress);
function onKeyPress(event) {
  console.log(event);
  userLogout.classList.add('visually-hidden');
  body.removeEventListener('click', onKeyPress);
}

userLogout.addEventListener('click', e => {
  location.reload();
});
