import { userLogout, userLogin, logOutBtn } from './registration/reg-const';

userLogin.addEventListener('click', e => {
  userLogout.classList.remove('visually-hidden');
});

export const hugeback = document.querySelector('.hugeback');
userLogin.addEventListener('click', e => {
  userLogout.classList.remove('visually-hidden');
  hugeback.classList.remove('visually-hidden');
});

hugeback.addEventListener('click', onKeyPress);
function onKeyPress(event) {
  console.log(event);
  userLogout.classList.add('visually-hidden');
  hugeback.classList.add('visually-hidden');
}

userLogout.addEventListener('click', e => {
  location.reload();
});
