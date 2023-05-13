const backdrop = document.querySelector('.reg-modal-backdrop');
const closeButton = document.querySelector('.reg-close-button');
const openButton = document.querySelector('#header-signup-link');
const form = document.querySelector('.reg-form-register');
const signUpBtn = form.querySelector('#sign_up');
const signInBtn = form.querySelector('#sign_in');
const linkUp = form.querySelector('.reg-signup-btn');
const linkIn = form.querySelector('.reg-signin-btn');


const showModal = () => {
	backdrop.classList.toggle('visually-hidden');
	signInBtn.style.display = 'none';
}
openButton.addEventListener('click', showModal);
closeButton.addEventListener('click', showModal);


// Зміна відображення кнопок 
const toogleClassBtnLinkUp = () => {
	signUpBtn.style.display = 'block';
	signInBtn.style.display = 'none';
};
const toogleClassBtnLinkIn = () => {
	signUpBtn.style.display = 'none';
	signInBtn.style.display = 'block';
};

linkUp.addEventListener('click', toogleClassBtnLinkUp);
linkIn.addEventListener('click', toogleClassBtnLinkIn);

