// const firebase = require('firebase');
// require('firebase/firestore');
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// // Import the functions you need from the SDKs you need

// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import firebase from 'firebase/app';
// // import 'firebase/auth';
// import 'firebase/database';

// // Функція авторизації з електронною поштою та паролем

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: 'AIzaSyDMnXjhWjIMeE1EJ6KOnyUAYjgWeRJevIU',
//   authDomain: 'project-techno12-public.firebaseapp.com',
//   projectId: 'project-techno12-public',
//   storageBucket: 'project-techno12-public.appspot.com',
//   messagingSenderId: '353320685234',
//   appId: '1:353320685234:web:1ac20ad763e02539e643ab',
//   measurementId: 'G-P3W3NGWD78',
// };

// // Ініціалізуємо Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Функція авторизації з електронною поштою та паролем
// export function signInWithEmail(email, password) {
//   return firebase.auth().signInWithEmailAndPassword(email, password);
// }

// // Функція вихід з облікового запису користувача
// export function signOut() {
//   return firebase.auth().signOut();
// }

// // Функція збереження списку покупок в базі даних Firebase
// export function saveShoppingList(userId, shoppingList) {
//   const dbRef = firebase.database().ref(`users/${userId}/shoppingList`);
//   return dbRef.set(shoppingList);
// }

// // Приклад використання функцій
// // Авторизація користувача
// signInWithEmail('user@example.com', 'password123')
//   .then(userCredential => {
//     const user = userCredential.user;
//     console.log(`User ${user.uid} signed in successfully.`);

//     // Збереження списку покупок у базі даних Firebase
//     const userId = user.uid;
//     const shoppingList = ['bread', 'milk', 'eggs'];
//     saveShoppingList(userId, shoppingList)
//       .then(() => {
//         console.log('Shopping list saved successfully.');
//       })
//       .catch(error => {
//         console.error('Error saving shopping list:', error);
//       });

//     // Вихід з облікового запису користувача
//     signOut()
//       .then(() => {
//         console.log('User signed out successfully.');
//       })
//       .catch(error => {
//         console.error('Error signing out:', error);
//       });
//   })
//   .catch(error => {
//     console.error('Error signing in:', error);
//   });
