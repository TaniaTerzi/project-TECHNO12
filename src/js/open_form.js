const backdrop = document.querySelector('.reg-modal-backdrop');
const closeButton = document.querySelector('.reg-close-button');
const openButton = document.querySelector('#header-signup-link');
const registrationForm = document.getElementById('myForm');
const form = document.querySelector('.reg-form-register');
const emailInput = form.querySelector('input[name="email"]');
const passwordInput = form.querySelector('input[name="password"]');
const signInBtn = form.querySelector('#login');
const signUpBtn = form.querySelector('#register');

function openForm() {
	backdrop.classList.remove('visually-hidden');
 signInBtn.style.display = 'none';
}
function closeForm() {
backdrop.classList.toggle('visually-hidden');
}
backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    closeForm();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
		closeForm();
		return
  }
});

function toggleForm(action) {
  if (action === 'login') {
    signUpBtn.style.display = 'inline-block';
    signInBtn.style.display = 'none';
    form.setAttribute('action', 'signInWithEmailPassword()'); // Firebase функція для входу
  } else if (action === 'register') {
    signInBtn.style.display = 'inline-block';
    signUpBtn.style.display = 'none';
    form.setAttribute('action', 'createUserWithEmailPassword()'); // Firebase функція для реєстрації
  }
}

// Функція для переключення форми між SIGN IN та SIGN UP
function toggleForm(action) {
  if (action === 'login') {
    signUpBtn.style.display = 'none';
    signInBtn.style.display = 'inline-block';
    form.setAttribute('action', 'signInWithEmailPassword()'); // Firebase функція для входу
  } else if (action === 'register') {
    signInBtn.style.display = 'none';
    signUpBtn.style.display = 'inline-block';
    form.setAttribute('action', 'createUserWithEmailPassword()'); // Firebase функція для реєстрації
  }
}
// Функція для входу
function signIn() {
  const email = emailInput.value;
  const password = passwordInput.value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Залогінено користувача
      form.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}
// Функція для реєстрації
function signUp() {
  const email = emailInput.value;
  const password = passwordInput.value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Користувач створено успішно
      form.reset();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}
// обробник подій для посилань SIGN IN та SIGN UP
const signUpLink = form.querySelector('.reg-signup-btn');
const signInLink = form.querySelector('.reg-signin-btn');

signUpLink.addEventListener('click', event => {
  event.preventDefault();
  toggleForm('register');
});

signInLink.addEventListener('click', event => {
  event.preventDefault();
  toggleForm('login');
});

closeButton.addEventListener('click', closeForm);
openButton.addEventListener('click', openForm);


