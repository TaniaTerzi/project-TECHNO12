import AOS from 'aos';
import Notiflix from 'notiflix';

const shoppingListRef = document.querySelector('.shopping-link-order');
const shoppingListContainerRef = document.querySelector('.container-markup');
let shoppingListDumpBtnRef;

const LOCALSTORAGE_KEY = 'SHOPPINGLIST';

console.log(shoppingListDumpBtnRef);

// document.addEventListener('DOMContentLoaded', onShoppingList);
// document.addEventListener('onloadstart', onShoppingList);
shoppingListRef.addEventListener('click', onShoppingList);

function onShoppingList(e) {
  e.preventDefault();
  try {
    if (localStorage.getItem(LOCALSTORAGE_KEY)) {
      books = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      console.log(books);
      console.log(window);
      shoppingListContainerRef.innerHTML = '';
      shoppingListContainerRef.innerHTML = markupShoppingList(books);
      shoppingListDumpBtnRef = document.querySelector('.container-markup');
      shoppingListDumpBtnRef.addEventListener('click', onDumpBtn);
    }
    else {
      shoppingListContainerRef.innerHTML = '';
      shoppingListContainerRef.innerHTML = markupEmpty();
    }
  } catch (error) {
    Notiflix.Notify.failure("Set state error: ", error.message);
  }
}

async function onDumpBtn(e) {
  e.preventDefault();
  console.log('onDumpBtn');
  Notiflix.Notify.failure("I do not want to do this!");
}

function markupShoppingList(books) {
  return books.reduce((acc, { book_image, title, list_name, description, author, buy_links, _id }) =>
    acc + `
      <div class="container-shopping-card">
            <img class="shopping-card-img" src="${book_image}" alt="Without title">
            <div>
              <p class="shopping-card-title">${title}</p>
              <p class="shopping-card-list-name">${list_name}</p>
              <p class="shopping-card-description">${description}</p>
              <div class="shopping-card-footer">
                <p class="shopping-card-author">${author}</p>
                <ul class="shopping-card-list">
                  <li class="shopping-card-item">
                    <a target="_blank" rel="noopener noreferrer" href="${buy_links[0].url}">
                      <img class="shopping-card-pic" srcset="
                                    ./images/amazon_x1.png 1x,
                                    ./images/amazon_x2.png 2x
                                  " src="./images/amazon_x1.png" alt="amazon" width="48" height="15" />
                    </a>
                  </li>
                  <li class="shopping-card-item">
                    <a target="_blank" rel="noopener noreferrer" href="${buy_links[1].url}">
                      <img class="shopping-card-pic" srcset="
                                    ./images/white_book_x1.png 1x,
                                    ./images/white_book_x2.png 2x
                                  " src="./images/white_book_x1.png" alt="white_book" width="28" height="27" />
                    </a>
                  </li>
                  <li class="shopping-card-item">
                    <a target="_blank" rel="noopener noreferrer" href="${buy_links[4].url}">
                      <img class="shopping-card-pic" srcset="
                                    ./images/black_book_x1.png 1x,
                                    ./images/black_book_x2.png 2x
                                  " src="./images/black_book_x1.png" alt="black_book" width="32" height="30" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" id=${_id} class="shopping-card-dump-btn">
              <svg class="shopping-card-dump-icon">
                <use href="./images/svg/svg_sprite.svg#trash"></use>
              </svg>
            </button>
            <p>${_id}</p>
          </div>
    `, '');
}

 function markupEmpty() {
  return `
      <div class="container-shopping-empty">
        <p class="shopping-empty-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="shopping-empty-img" srcset="./images/books_x1.png 1x, ./images/books_x2.png 2x"
          src="./images/books_x1.png" alt="books" />
      </div>
    `;
}

import { slider, toggleSwitch } from './toggle.js';
import { renderSupportMarkup } from './suppurt-slider.js';
import { userLogin, userLogout } from './userbar.js';
import { mobileMenu, openMenuBtn, closeMenuBtn } from './burger-menu.js';
