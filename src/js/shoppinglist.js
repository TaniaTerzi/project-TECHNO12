import Notiflix from 'notiflix';
import photoAmazonx1 from '../images/amazon_x1.png'
import photoAmazonx2 from '../images/amazon_x2.png'
import photoAppleBookx1 from '../images/white_book_x1.png'
import photoAppleBookx2 from '../images/white_book_x2.png'
import photoBlackBookx1 from '../images/black_book_x1.png'
import photoBlackBookx2 from '../images/black_book_x2.png'
import photoBooksx1 from '../images/books_x1.png'
import photoBooksx2 from '../images/books_x2.png'

const shoppingListContainerRef = document.querySelector('.container-markup');
const paginationContainerRef = document.querySelector('.container-pagination');
const LOCALSTORAGE_KEY = 'SHOPPINGLIST';
let shoppingListDumpBtnRef;
let books;

(function onShoppingList() {
  try {
    if (localStorage.getItem(LOCALSTORAGE_KEY) && localStorage.getItem(LOCALSTORAGE_KEY).length > 2) {
      books = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      renderShoppingList(books);
    }
    else {
      renderEmpty();
    } 
  } catch (error) {
    Notiflix.Notify.failure("Set state error: ", error.message);
  }
})();

function onDumpBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  
  books = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  const filteredBooks = books.filter(book => book._id !== e.target.id);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filteredBooks));
  books = filteredBooks;

  if (books.length !== 0) {
    renderShoppingList(books);
  }
  else {
    renderEmpty();
  }
}

function renderShoppingList(books) {
  let quantityOfBooksPerPage = 0;
  let currentPage = 1;
  let offset = 0;

  let quantityOfButtons = 0;

  const screenWidth = window.screen.width;

  if (screenWidth > 767) {
    quantityOfBooksPerPage = 3;
  } else {
    quantityOfBooksPerPage = 4;
  }
  
  offset = currentPage * quantityOfBooksPerPage;

  quantityOfButtons = books.length / quantityOfBooksPerPage;

  console.log(books);
  console.log(offset);
  console.log(offset + quantityOfBooksPerPage);
  console.log(quantityOfButtons);

  shoppingListContainerRef.innerHTML = '';
  shoppingListContainerRef.innerHTML = markupShoppingList(books.slice(offset, offset + quantityOfBooksPerPage));
  paginationContainerRef.innerHTML = '';
  paginationContainerRef.innerHTML = markupPagination(quantityOfButtons);
  shoppingListDumpBtnRef = document.querySelector('.container-markup');
  shoppingListDumpBtnRef.addEventListener('click', onDumpBtn);
}

function renderEmpty() {
  shoppingListContainerRef.innerHTML = '';
  shoppingListContainerRef.innerHTML = markupEmpty();
}

function markupPagination(quantityOfButtons) {
  let acc = '';
  for (let i = 1; i <= quantityOfButtons; i += 1) {
    acc += `
      <button type="button" class="pagination-button">${i}</button>    
    `;
  }
  return acc;
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
                                    ${photoAmazonx1} 1x,
                                    ${photoAmazonx2} 2x
                                  " src="${photoAmazonx1}" alt="amazon" width="48" height="15" />
                    </a>
                  </li>
                  <li class="shopping-card-item">
                    <a target="_blank" rel="noopener noreferrer" href="${buy_links[1].url}">
                      <img class="shopping-card-pic" srcset="
                                    ${photoAppleBookx1} 1x,
                                    ${photoAppleBookx2} 2x
                                  " src="${photoAppleBookx1}" alt="white_book" width="28" height="27" />
                    </a>
                  </li>
                  <li class="shopping-card-item">
                    <a target="_blank" rel="noopener noreferrer" href="${buy_links[4].url}">
                      <img class="shopping-card-pic" srcset="
                                    ${photoBlackBookx1} 1x,
                                    ${photoBlackBookx2} 2x
                                  " src="${photoBlackBookx1}" alt="black_book" width="32" height="30" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" id=${_id} class="shopping-card-dump-btn">
              <svg class="shopping-card-dump-icon" width=18 height=18>
                <use href="/src/images/svg/trash.svg"></use>
              </svg>
            </button>
          </div>
    `, '');
}

 function markupEmpty() {
  return `
      <div class="container-shopping-empty">
        <p class="shopping-empty-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="shopping-empty-img" srcset="${photoBooksx1} 1x, ${photoBooksx2} 2x"
          src="${photoBooksx1} alt="books" />
      </div>
    `;
}

// ================ END OF - SEE MORE BTN ==================
// let currentRenderWidth = window.innerWidth;
// addEventListener('resize', () => {
//   if (
//     (window.innerWidth > 767 && currentRenderWidth < 768) ||
//     (window.innerWidth > 1279 && currentRenderWidth < 1280) ||
//     (window.innerWidth < 1280 && currentRenderWidth > 1279) ||
//     (window.innerWidth < 768 && currentRenderWidth > 767)
//   ) {
//     currentRenderWidth = window.innerWidth;
//     location.reload();
//   }
// });

import { slider, toggleSwitch } from './toggle.js';
import { renderSupportMarkup } from './suppurt-slider.js';
// import { userLogin, userLogout } from './userbar.js';
// import { mobileMenu, openMenuBtn, closeMenuBtn } from './burger-menu.js';
