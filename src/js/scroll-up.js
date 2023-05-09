let scroller;
let timer;

export const scrollButton = document.querySelector('.scroll-up-button');
scrollButton.addEventListener('click', () => {
        scroller = window.pageYOffset;
        window.scrollTo(0, 0);
    scrollToTop();
    scrollButton.style.opacity = 0.5;
});

function scrollToTop() {
    if (scroller > 0) {
        window.scrollTo(0, scroller);
        scroller = scroller - 20;
        timer = setTimeout(scrollToTop, 20);        
    } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
        scrollButton.style.opacity = 1;
    };
};

  window.onscroll = function () {
    if ( window.pageYOffset > 0 ) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  };