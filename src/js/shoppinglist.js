import Notiflix from 'notiflix';

const shoppingListRef = document.querySelector('.shopping-link-order');
const shoppingListContainerRef = document.querySelector('.container-shopping-card');

const LOCALSTORAGE_KEY = 'SHOPPINGLIST';

shoppingListRef.addEventListener('click', onShoppingList);

function onShoppingList(e) {
  e.preventDefault();
  Notiflix.Notify.info('Hi from onShoppingList');
  try {
    if (localStorage.getItem(LOCALSTORAGE_KEY)) {
      userData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      console.log(userData);
      console.log(shoppingListContainerRef);
      

      

      // formRef.email.value = userData.email;
      // formRef.message.value = userData.message;    
    }
    else {
      // Рендерім пустишку
      Notiflix.Notify.failure('Shopping list is empty!');
    }
  } catch (error) {
    Notiflix.Notify.failure("Set state error: ", error.message);
  }
}