let scroller;
let timer;

export const scrollButton = document.querySelector('.scroll-up-button');
scrollButton.addEventListener('click', () => {
  scroller = window.pageYOffset;
  scrollToTop();
  scrollButton.style.opacity = 0.5;
});

let allowScroll = true;

function scrollToTop() {
  if (allowScroll === false) {
    allowScroll = true;
  } else {
    if (scroller > 0) {
      window.scrollTo(0, scroller);
      scroller = scroller - 100;
      timer = setTimeout(scrollToTop, 20);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
      scrollButton.style.opacity = 1;
    }
  }
}

window.addEventListener('keypress', onKeyPress);

function onKeyPress(event) {
  console.log(event);
  allowScroll = false;
}

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
};
