import axios from 'axios';

const modal = document.querySelector('.modal');
const getbook = document.querySelector('.getbook');
const addbook = document.querySelector('.addbook');
const backdrop = document.getElementById('backdrop');


getbook.addEventListener('click', () => {
  modal.classList.remove('hidden');
  backdrop.classList.add('backdrop_open');
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.add('hidden');
    backdrop.classList.remove('backdrop_open');
  }
});

window.addEventListener('click', (event) => {
  if (event.target === backdrop) {
    modal.classList.add('hidden');
    backdrop.classList.remove('backdrop_open');
  }
})


addbook.addEventListener('click', (e) => {
  if (addbook.textContent === 'add to shoping list') {
    addbook.textContent = 'remove from the shopping list';
    addbook.style.width = '279px';
    addbook.style.left = '29px';
    modal.style.height = '806px';
    const text = document.createElement('p');
    text.textContent = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
    text.classList.add('add-book-info');
    modal.appendChild(text);
  } else if (addbook.textContent === 'remove from the shopping list') {
    addbook.textContent = 'add to shoping list';
    addbook.style.width = '211px';
    addbook.style.left = '62px';
    modal.style.height = '762px';
    const p = document.querySelector('.add-book-info');
    p.remove();
  }
});



const getBooks = async (id) => {
  try {
    const response = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
    // console.log(response.data);
    booksCard(response.data)
  }
  catch (error) {
    console.log(error);      
  }
};

getbook.addEventListener('click', getBooks('643282b1e85766588626a0c2'));
// 643282b1e85766588626a0c0
// 643282b1e85766588626a0c2
// 643282b1e85766588626a0b6 working 

function booksCard(book) {
  const markup = `<div class='book-card'>
    <img class="book-img" src="${book.book_image}"  alt="photo_of_book " loading="lazy">
    <h2 class="book-title">${book.title}</h2>
    <p class="book-author">${book.author}</p>
    <p class="book-descr">${book.description}</p>
    <ul class="online-shops-list">
    <li class="online-shops-item"><a target="_blank" rel="noopener noreferrer" href="${book.buy_links[0].url}"><img src="./images/image1.png" width="62px" heigth="19px"/></a></li>
    <li class="online-shops-item"><a target="_blank" rel="noopener noreferrer" href="${book.buy_links[1].url}"><img src="./images/image2.png" width="32px" heigth="32px"/></a></li>
    <li class="online-shops-item"><a target="_blank" rel="noopener noreferrer" href="${book.buy_links[4].url}"><img src="./images/image3.png" width="38px" heigth="36px"/></a></li>    
    </ul>
    </div>`;
    return modal.insertAdjacentHTML('afterbegin', markup);
};

export { booksCard }