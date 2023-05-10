import { fetchBooks } from './categoriesFetchRequest';

const allCategoriesBtn = document.getElementById('allCategoriesBtn');
const [listEl] = document.getElementsByClassName('categories-list');
const mainListEl = document.querySelector('.main__list-js');
const mainTitle = document.querySelector('.main__title-js');

let idBook = 0;
let title = '';
allCategoriesBtn.classList.add('active-category');
listEl.addEventListener('click', markup);

const createCategoryList = async () => {
  try {
    const categoriesList = await fetchBooks.getCategoriesList();
    const makeNewButtons = categoriesList
      .map(
        category =>
          `<li class= 'categories-list__item '> <button class= 'categories-list__button'>${category.list_name}</button> </li>`
      )
      .join('');
    listEl.insertAdjacentHTML('beforeend', makeNewButtons);
  } catch (error) {
    console.log(error);
  }
};
createCategoryList();

const addEventListenerForBook = book => {
  book.forEach(el => {
    el.addEventListener('click', handleImgClick);
  });
};

const drawCategory = async nameOfCategory => {
  const booksCategories = await fetchBooks.getBooksByCategory(nameOfCategory);
  const titleArr = nameOfCategory.split(' ');
  const titleFirstPart = titleArr.slice(0, titleArr.length - 1).join(' ');
  const titleLastPart = titleArr.slice(titleArr.length - 1).join();

  // !!!!!!!!!!!!!!!!!!!!Сюди вставити функцію створення категорії!!!!!!!!!!!!!!!!!!!!

  //   const markup = makeMarkupGategory(booksCategories);
  //   mainListEl.innerHTML = markup;

  const bookCategoryEl = document.querySelectorAll('.category-books__item');
  addEventListenerForBook(bookCategoryEl);
  allCategoriesBtn.classList.remove('active-categories');
};

function markup(ev) {
  if (ev.target.nodeName !== 'BUTTON') {
    return;
  }

  clearSelectedCategories();

  if (ev.target === allCategoriesBtn) {
    allCategoriesBtn.classList.add('active-category');

    // !!!!!!!!!!!!!!!!!!!!Сюди вставити функцію створення усіх категорій!!!!!!!!!!!!!!!!!!!!
    // showAllCategories();

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

export { createCategoryList };