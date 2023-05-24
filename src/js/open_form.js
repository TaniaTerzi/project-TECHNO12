// Імпортуємо необхідні бібліотеки та константи з модуля ./registration/reg-const
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
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
  signUpCheckbox,
  userLogout,
  logOutBtn,
  userbar,
  regIGree,
} from './registration/reg-const';

// Конфігурація Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDMnXjhWjIMeE1EJ6KOnyUAYjgWeRJevIU',
  authDomain: 'project-techno12-public.firebaseapp.com',
  projectId: 'project-techno12-public',
  storageBucket: 'project-techno12-public.appspot.com',
  messagingSenderId: '353320685234',
  appId: '1:353320685234:web:1ac20ad763e02539e643ab',
  measurementId: 'G-P3W3NGWD78',
};

// Ініціалізуємо Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Функція для показу модального вікна
const showModal = () => {
  backdrop.classList.toggle('visually-hidden');
  signInBtn.style.display = 'none';
};

// Функція для приховування модального вікна
const hideModal = () => {
  backdrop.classList.toggle('visually-hidden');
};

// Додаємо обробники подій для кнопок закриття та відкриття модального вікна
closeButton.addEventListener('click', hideModal);
openButton.addEventListener('click', showModal);

// Додаємо обробник події для закриття модального вікна при кліку на фон
backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    hideModal();
  }
});

// Додаємо обробник події для закриття модального вікна при натисканні на клавішу "Escape"
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hideModal();
  }
});

// Функція для перемикання форми між реєстрацією та входом
const toggleClassBtnLinkUp = () => {
  signUpBtn.style.display = 'block';
  signInBtn.style.display = 'none';
  nameInput.style.display = 'block';
  regIGree.style.display = 'flex';
};

const toggleClassBtnLinkIn = () => {
  signUpBtn.style.display = 'none';
  nameInput.style.display = 'none';
  signInBtn.style.display = 'block';
  regIGree.style.display = 'none';
};

// Додаємо обробники подій для перемикання форми
linkUp.addEventListener('click', toggleClassBtnLinkUp);
linkIn.addEventListener('click', toggleClassBtnLinkIn);

// Додаємо обробник події для валідації форми при натисканні на кнопку реєстрації
signUpBtn.addEventListener('click', validateForm);

// Функція для валідації форми
function validateForm(event) {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const emailPattern = /\S+@\S+.\S+/;

  let formIsValid = true;

  // Перевірка на заповнення полів
  if (!emailValue || !passwordValue) {
    Notiflix.Notify.failure('Будь ласка, заповніть всі поля!');
    emailInput.classList.add('red_border');
    passwordInput.classList.add('red_border');
    formIsValid = false;
  }

  // Перевірка на коректний формат електронної пошти
  if (!emailPattern.test(emailValue)) {
    Notiflix.Notify.failure(
      'Будь ласка, введіть коректний формат електронної пошти!'
    );
    emailInput.classList.add('red_border');
    formIsValid = false;
  } else {
    emailInput.classList.remove('red_border'); // Видалення червоної підкреслювання у полі електронної пошти
  }

  // Перевірка на довжину пароля
  if (passwordValue.length < 6) {
    Notiflix.Notify.failure('Пароль повинен містити принаймні 6 символів!');
    passwordInput.classList.add('red_border');
    formIsValid = false;
  } else {
    passwordInput.classList.remove('red_border'); // Видалення червоної підкреслювання у полі пароля
  }

  // Реєстрація користувача, якщо форма валідна
  if (formIsValid) {
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(userCredential => {
        const user = userCredential.user;
        hideModal();
        Notiflix.Notify.success('Вітаємо! Ви успішно зареєструвалися!');
        toggleClassBtnLinkIn(); // Відкриття форми для входу

        // Очистка значень полів електронної пошти та пароля
        emailInput.value = '';
        passwordInput.value = '';
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notiflix.Notify.failure(errorMessage);
      });

    hideModal();
    Notiflix.Notify.success('Вітаємо! Ви успішно зареєструвалися!');

    // Очистка значень полів електронної пошти та пароля
    emailInput.value = '';
    passwordInput.value = '';
  }
}
// Функція для входу користувача
function signInUser() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then(userCredential => {
      const user = userCredential.user;
      // Виконання дій після успішного входу
      // Наприклад, можна перенаправити користувача на нову сторінку або відобразити повідомлення про успішний вхід.
      console.log('Користувач увійшов:', user);
      backdrop.style.display = 'none';
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
}

// Додаємо обробник події для входу користувача при натисканні на кнопку входу
signInBtn.addEventListener('click', signInUser);

// Функція, яка викликається при зміні стану авторизації користувача
auth.onAuthStateChanged(user => {
  if (user) {
    // Користувач авторизований (увійшов)
    console.log('Користувач авторизований:', user);
    openButton.style.display = 'none';
    userbar.style.display = 'block';
  } else {
    // Користувач неавторизований (вийшов)
    console.log('Користувач неавторизований');
    userbar.style.display = 'none';
  }
});

// Обробник події для чекбоксу при реєстрації
signUpCheckbox.addEventListener('change', function () {
  if (this.checked) {
    signUpBtn.removeAttribute('disabled');
  } else {
    signUpBtn.setAttribute('disabled', 'disabled');
  }
});

// Обробник події для виходу з облікового запису
userLogout.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      // Виконання дій після успішного виходу
      console.log('Користувач вийшов');
      location.reload(); // Оновлення сторінки
    })
    .catch(error => {
      // Обробка помилки виходу
      console.error('Помилка виходу:', error);
    });
});
