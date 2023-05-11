// //  opem modal
// //  function openForm() {
// //   document.getElementById("myForm").style.display = "block";
// // }

// // function closeForm() {
// //   document.getElementById("myForm").style.display = "none";
// // }
 
//  const loginText = document.querySelector(".title-text .login");
//       const loginForm = document.querySelector("form.login");
//       const loginBtn = document.querySelector("label.login");
//       const signupBtn = document.querySelector("label.signup");
//       const signupLink = document.querySelector("form .signup-link a");
//       signupBtn.onclick = (()=>{
//         loginForm.style.marginLeft = "-50%";
        
//       });
//       loginBtn.onclick = (()=>{
//         loginForm.style.marginLeft = "0%";
        
//       });
//       signupLink.onclick = (()=>{
//         signupBtn.click();
//         return false;
//       });


// // Create user

// function createUser(event) {
//   event.preventDefault();
//     const formElements = {
//     username: event.currentTarget.elements.username.value,
//     email: event.currentTarget.elements.email.value,
//     password: event.currentTarget.elements.password.value,
    
//   };
//   // Створення користувача за поштою та емейлом
//   createUserWithEmailAndPassword(
//     auth,
//     formElements.email,
//     formElements.password,
//     formElements.username
//   )
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;
//       alert(`Welcome to Bookshelf, ${formElements.username}!`);
//       modal.classList.toggle('visually-hidden');
//       return user;
//     })
//     .then(user => {
//       set(ref(database, 'users/' + user.uid), {
//         username: formElements.username,
//         email: formElements.email,
//         uid: user.uid,
//       });
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
//   event.currentTarget.reset();
// }; //Функція виходу зі сторінки користувача
// function logOutUser(event) {
//   signOut(auth)
//     .then(() => {
//       document.location.href = 'index.html';

//       // Sign-out successful.
//     })
//     .catch(error => {
//       // An error happened.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });

// };


// // Get the modal
// // var modalWrapper = document.getElementById("myWrapper");



// // firebase

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDGzmoR0NXZi-78KRaSzsXdTYxIM2vehx8",
//   authDomain: "bookshelveshere.firebaseapp.com",
//   projectId: "bookshelveshere",
//   storageBucket: "bookshelveshere.appspot.com",
//   messagingSenderId: "62726498466",
//   appId: "1:62726498466:web:840fa857146f9fb8f60ffb",
//   measurementId: "G-CJ91XDP7BR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// // Get the modal
// var modalWrapper = document.getElementById("myWrapper"); // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modalWrapper) {
//     modalWrapper.style.display = "none";
//   }

// }
