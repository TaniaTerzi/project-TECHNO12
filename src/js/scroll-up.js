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
      window.scrollTo({
        top: scroller,
        left: 0,
        behavior: 'smooth',
      });
      scroller = scroller - 100;
      timer = setTimeout(scrollToTop, 5);
    } else {
      clearTimeout(timer);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      scrollButton.style.opacity = 1;
    }
  }
}

window.addEventListener('keypress', onKeyPress);

function onKeyPress(event) {
  // console.log(event);
  allowScroll = false;
}

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
};
