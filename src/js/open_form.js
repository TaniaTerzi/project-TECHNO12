import firebase from 'firebase/app';
import 'firebase/database';
import Notiflix from 'notiflix';
import {
  backdrop,
  closeButton,
  openButton,
  form,
  emailInput,
  passwordInput,
  signUpBtn,
  signInBtn,
  linkUp,
  linkIn,
  nameInput,
} from './registration/reg-const';

const firebaseConfig = {
apiKey: "AIzaSyDMnXjhWjIMeE1EJ6KOnyUAYjgWeRJevIU",
  authDomain: "project-techno12-public.firebaseapp.com",
  projectId: "project-techno12-public",
  storageBucket: "project-techno12-public.appspot.com",
  messagingSenderId: "353320685234",
  appId: "1:353320685234:web:1ac20ad763e02539e643ab",
  measurementId: "G-P3W3NGWD78"
};





const showModal = () => {
  backdrop.classList.toggle('visually-hidden');
  signInBtn.style.display = 'none';
};

const hideModal = () => {
  backdrop.classList.toggle('visually-hidden');
};

closeButton.addEventListener('click', hideModal);
openButton.addEventListener('click', showModal);

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    hideModal();
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hideModal();
  }
});

// Зміна відображення кнопок
const toogleClassBtnLinkUp = () => {
  signUpBtn.style.display = 'block';
  signInBtn.style.display = 'none';
  nameInput.style.display = 'block';
};
const toogleClassBtnLinkIn = () => {
  signUpBtn.style.display = 'none';
  nameInput.style.display = 'none';
  signInBtn.style.display = 'block';
};

linkUp.addEventListener('click', toogleClassBtnLinkUp);
linkIn.addEventListener('click', toogleClassBtnLinkIn);
signUpBtn.addEventListener('click', validateForm);

function validateForm(event) {
  event.preventDefault(); // Зупиняємо відправку форми на сервер
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const emailPattern = /\S+@\S+.\S+/; // Регулярний вираз для перевірки правильності формату електронної пошти

  let formIsValid = true;

  // Перевіряємо, чи заповнені поля електронної пошти та пароля
  if (!emailValue || !passwordValue) {
    Notiflix.Notify.failure('Please fill in all fields!');
    emailInput.classList.add('red_border');
    passwordInput.classList.add('red_border');
    formIsValid = false;
  }

  // Перевіряємо правильність формату електронної пошти
  if (!emailPattern.test(emailValue)) {
    Notiflix.Notify.failure('Please enter the correct email format!');
    emailInput.classList.add('red_border');
    formIsValid = false;
  }

  if (emailPattern.test(emailValue)) {
    emailInput.classList.remove('red_border');
  }

  // Перевіряємо довжину пароля (не менше 6 символів)
  if (passwordValue.length < 6) {
    Notiflix.Notify.failure('The password must contain at least 6 characters!');
    passwordInput.classList.add('red_border');
    formIsValid = false;
  }

  if (passwordValue.length >= 6) {
    passwordInput.classList.remove('red_border');
  }

  // Якщо всі перевірки успішні, можна відправляти форму на сервер
  if (formIsValid) {
    // Відправка форми на сервер
    // ...
 hideModal();
    Notiflix.Notify.success(
      'Congratulations! You have successfully registered!'
    );
  }
}
