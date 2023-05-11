import { FetchBooks } from './fetchBooks';
import Notiflix from 'notiflix';
import AOS from 'aos';

AOS.init({
  duration: 1200,
});

const fetchBooks = new FetchBooks();
const listTopBooks = document.querySelector('.top-books');

let category = '';

// BEST SELLERS
async function renderingBooksCategories() {
  try {
    const { data } = await fetchBooks.fetchTopBooks();
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}

(async () => {
  const categories = await renderingBooksCategories();
  const screenWidth = window.screen.width;
  let numOfBooks;

  if (screenWidth < 768) {
    numOfBooks = 1;
  } else if (screenWidth < 1280) {
    numOfBooks = 3;
  } else {
    numOfBooks = 5;
  }

  let markup = '';
  for (let i = 0; i < categories.length; i += 1) {
    const { list_name, books } = categories[i];
    const displayedBooks = books.slice(0, numOfBooks);

    const bookItems = displayedBooks
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

    markup += `
      <li>
        <h3 class="item-category">${list_name}</h3>
        <ul class="box-category">
          ${bookItems}
        </ul>
        <button type="button" aria-label="Show more" class="see-more">See more</button>
      </li>
    `;
  }

  if (listTopBooks) {
    listTopBooks.innerHTML = '';
    listTopBooks.insertAdjacentHTML('beforeend', markup);
    listTopBooks.insertAdjacentHTML(
      'beforebegin',
      `
      <h2 class="title-best-sellers">Best sellers <span class ="title-best-sellers-color">books</span></h2>
      `
    );
  }
})();

// ================ START OF + SEE MORE BTN ==================
if (listTopBooks) {
  listTopBooks.addEventListener('click', handleLoadMore);
}

async function handleLoadMore(e) {
  try {
    if (e.target.nodeName === 'BUTTON') {
      category = e.target.closest('li').querySelector('h3').textContent.trim();

      const renderCategory = await renderingCategory();
      let markup = '';
      renderCategory.forEach(({ _id, book_image, title, author }) => {
        markup += `
          <li class="item-category-book" data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-book-id="${_id}">
            <a class="link-books-render" href="#" onclick="event.preventDefault()">
              <div class="card-book">
                <div class="img-card-book">
                  <img src="${book_image}" alt="book" class="img-book" loading="lazy">
                  <p class="book-card overlay">Quick view</p>
                </div>
                <div class="box-text-book-category">
                  <div class="box-title">
                    <p class="title-book">${title}</p>
                  </div>
                  <div class="box-author">
                    <p class="author-book">${author}</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          `;
      });
      listTopBooks.innerHTML = '';
      listTopBooks.previousElementSibling.remove();
      listTopBooks.insertAdjacentHTML('beforeend', markup);
      listTopBooks.insertAdjacentHTML(
        'beforebegin',
        `<h2 class="title-category">${category}</h2>`
      );
      scrollToTitle();

      const titleLastWord = listTopBooks.previousElementSibling;

      function lastWordForTitle() {
        if (titleLastWord.classList.contains('title-category')) {
          const textTitle = titleLastWord.textContent.trim();
          const allWords = textTitle.split(' ');
          const lastWord = allWords[allWords.length - 1];
          titleLastWord.innerHTML = textTitle.replace(
            lastWord,
            `<span class="title-last-word-color">${lastWord}</span>`
          );
        }
        return;
      }
      lastWordForTitle();

      const categoryButtons = document.querySelectorAll(
        '.categories-list__button'
      );

      categoryButtons.forEach(button => {
        if (button.textContent === category) {
          button.classList.add('active-category');
        } else {
          button.classList.remove('active-category');
        }
      });
    }
    return;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}

async function renderingCategory() {
  try {
    fetchBooks.category = category;
    const { data } = await fetchBooks.fetchCategoryOfBooks();
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}

// ================ END OF - SEE MORE BTN ==================
let currentRenderWidth = window.innerWidth;
addEventListener('resize', () => {
  if (
    (window.innerWidth > 767 && currentRenderWidth < 768) ||
    (window.innerWidth > 1279 && currentRenderWidth < 1280) ||
    (window.innerWidth < 1280 && currentRenderWidth > 1279) ||
    (window.innerWidth < 768 && currentRenderWidth > 767)
  ) {
    currentRenderWidth = window.innerWidth;
    location.reload();
  }
});

function scrollToTitle() {
  listTopBooks.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
}

export { renderingBooksCategories, renderingCategory };
