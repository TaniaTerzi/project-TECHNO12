export const userLogout = document.querySelector('.logout');
export const userLogin = document.querySelector('.logged-user');
userLogin.addEventListener('click', e => {
  userLogout.classList.remove('visually-hidden');
});

const body = document.querySelector('.main');
body.addEventListener('mouseover', onKeyPress);
function onKeyPress(event) {
  console.log(event);
  userLogout.classList.add('visually-hidden');
}
onKeyPress();

userLogout.addEventListener('click', e => {
  location.reload();
});
