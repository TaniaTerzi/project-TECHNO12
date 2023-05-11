import { fetchBooks } from './categoriesFetchRequest';

const allCategoriesBtn = document.getElementById('allCategoriesBtn');
const [listEl] = document.getElementsByClassName('categories-list');
const mainListEl = document.querySelector('.top-books');
const mainTitle = document.querySelector('.title-category');

let handleImgClick;
let title = '';

allCategoriesBtn.classList.add('active-category');
listEl.addEventListener('click', markup);

async function createCategoryList() {
  try {
    const categoriesList = await fetchBooks.getCategoriesList();
    const makeNewButtons = categoriesList
      .map(
        category =>
          `<li class='categories-list__item'><button class='categories-list__button'>${category.list_name}</button></li>`
      )
      .join('');
    listEl.insertAdjacentHTML('beforeend', makeNewButtons);
  } catch (error) {
    console.log(error);
  }
}
createCategoryList();

function addEventListenerForBook(book) {
  book.forEach(el => {
    el.addEventListener('click', handleImgClick);
  });
}

function makeMarkupCategory(books) {
  return books
    .map(
      book => `
        <li class="item-category-book" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-book-id="${book._id}">
          <a class="link-books-render" href="#" onclick="event.preventDefault()">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${book.book_image}" alt="book" class="img-book" loading="lazy">
                <p class="book-card overlay">Quick view</p>
              </div>
              <div class="box-text-book-best">
                <div class="box-title">
                  <p class="title-book">${book.title}</p>
                </div>
                <div class="box-author">
                  <p class="author-book">${book.author}</p>
                </div>
              </div>
            </div>
          </a>
        </li>
      `
    )
    .join('');
}

async function drawCategory(nameOfCategory) {
  const booksCategories = await fetchBooks.getBooksByCategory(nameOfCategory);
  const titleArr = nameOfCategory.split(' ');
  const titleFirstPart = titleArr.slice(0, titleArr.length - 1).join(' ');
  const titleLastPart = titleArr.slice(titleArr.length - 1).join();

  const markup = makeMarkupCategory(booksCategories);
  mainListEl.innerHTML = markup;
  mainListEl.previousElementSibling.remove();
  mainListEl.insertAdjacentHTML('beforeend', markup);

  const lastWordMarkup = `<span class="title-best-sellers-color">${titleLastPart}</span>`;
  const titleMarkup = `${titleFirstPart} ${lastWordMarkup}`;

  mainListEl.insertAdjacentHTML(
    'beforebegin',
    `<h2 class="title-category">${titleMarkup}</h2>`
  );
  scrollToTitle();
  const bookCategoryEl = document.querySelectorAll('.categories-list__item');
  addEventListenerForBook(bookCategoryEl);
  allCategoriesBtn.classList.remove('active-category');
}

function markup(ev) {
  if (ev.target.nodeName !== 'BUTTON') {
    return;
  }
  clearSelectedCategories();

  if (ev.target === allCategoriesBtn) {
    location.reload();
    return;
  }

  title = ev.target.textContent;
  drawCategory(title);
  ev.target.classList.add('active-category');
}

const clearSelectedCategories = () => {
  for (let i = 0; i < listEl.children.length; i += 1) {
    const category = listEl.children[i];
    category.firstElementChild.classList.remove('active-category');
  }
};

function scrollToTitle() {
  mainListEl.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
}

export { createCategoryList };
