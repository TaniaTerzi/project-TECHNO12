// import { FirebaseApp } from 'firebase/app';
// import { initializeApp } from 'firebase/app';

// Ініціалізація Firebase з використанням конфігураційного об'єкту
firebase.initializeApp(firebaseConfig);

try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.error('Помилка ініціалізації Firebase:', error);
  alert('Сценарій вмісту більше не доступний. Спробуйте пізніше.');
}

console.error('Помилка ініціалізації Firebase:', error);
alert("Помилка з'єднання з Firebase. Спробуйте пізніше.");

const firebaseConfig = {
  apiKey: 'AIzaSyDMnXjhWjIMeE1EJ6KOnyUAYjgWeRJevIU',
  authDomain: 'project-techno12-public.firebaseapp.com',
  projectId: 'project-techno12-public',
  storageBucket: 'project-techno12-public.appspot.com',
  messagingSenderId: '353320685234',
  appId: '1:353320685234:web:1ac20ad763e02539e643ab',
  measurementId: 'G-P3W3NGWD78',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Обробник події для кнопки "SIGN UP"
 export function signUp() {
  const name = document.getElementsByName('name')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  // Перевірка доступності Firebase
  if (!firebase) {
    alert("Помилка з'єднання з Firebase. Спробуйте пізніше.");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      return userCredential.user.updateProfile({
        displayName: name,
      });
    })
    .then(() => {
      toggleForm('register');
    })
    .catch(error => {
      const errorMessage = error.message;
      console.error(errorMessage);
      alert(errorMessage);
    });
}


// Обробник події для кнопки "SIGN IN"
export function signIn() {
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  // Перевірка доступності Firebase
  if (!firebase) {
    alert("Помилка з'єднання з Firebase. Спробуйте пізніше.");
    return;
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      toggleForm('login');
    })
    .catch(error => {
      const errorMessage = error.message;
      console.error(errorMessage);
      alert(errorMessage);
    });

// Функція для переключення між формами SIGN UP та SIGN IN
function toggleForm(formName) {
  const registerForm = document.querySelector('.reg-form-register');
  const loginLink = document.querySelector('.reg-signin-btn');
  const signupLink = document.querySelector('.reg-signup-btn');

  if (formName === 'register') {
    registerForm.reset();
    loginLink.style.display = 'block';
    signupLink.style.display = 'none';
  } else if (formName === 'login') {
    registerForm.reset();
    loginLink.style.display = 'none';
    signupLink.style.display = 'block';
  }
}

// Обробник події для кнопки "SIGN OUT"
document.getElementById('signOut').addEventListener('click', () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Успішний вихід з системи - перенаправляємо користувача на сторінку входу
      window.location.href = 'login.html';
    })
    .catch(error => {
      // Обробка помилок
      const errorMessage = error.message;
      console.error(errorMessage);
      alert(errorMessage);
    });
});

// Обробник події для кнопки "Reset Password"
function resetPassword() {
  // Отримання значення поля email
  const email = document.getElementsByName('email')[0].value;

  // Відправлення електронного листа з інструкціями для скидання пароля
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      // Лист з інструкціями для скидання пароля успішно відправлено - закриваємо модальне вікно
      toggleForm('login');
      alert('A password reset email has been sent to your email address.');
    })
    .catch(error => {
      // Обробка помилок
      const errorMessage = error.message;
      console.error(errorMessage);
      alert(errorMessage);
    });
}

// Функція для перевірки, чи користувач увійшов в систему
function checkAuthState() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // Якщо користувач увійшов в систему, вітаємо його
      const displayName = user.displayName || 'Anonymous';
      alert('Welcome to Bookshalf, ${displayName}!');
    } else {
      // Якщо користувач не увійшов в систему, перенаправляємо його на сторінку входу
      window.location.href = 'login.html';
    }
  });
}

// Викликаємо функцію для перевірки, чи користувач увійшов в систему
checkAuthState();
