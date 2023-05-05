let scroller;
let timer;

export const scrollButton = document.querySelector('.scroll-up-button');
scrollButton.addEventListener('click', () => {
        scroller = window.pageYOffset;
        window.scrollTo(0, 0);
        scrollToTop();
});

function scrollToTop() {
    if (scroller > 0) {
        window.scrollTo(0, scroller);
        scroller = scroller - 50;
        timer = setTimeout(scrollToTop, 20);
    } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    };
};