import { supportList } from "./support-list"


const sliderWrapper = document.querySelector('.swiper-wrapper');
const sliderNextBtn = document.querySelector('.slider__next')

// renderSupportMarkup();
function renderSupportMarkup() {
    let supportListId = 0;
    const supportMarcup = supportList.map(({ title, url, img }) => {
        supportListId += 1
        return `
            <div class="swiper-slide">
                <a class="support-link" href="${url}" target="_blank"><span class="support-id" >${String(supportListId).padStart(2, 0)}</span><img class="support-img" src="${img}" alt="${title}"></a>
            </div>
        `
    }).join('');

    sliderWrapper.insertAdjacentHTML('afterbegin', supportMarcup);
};
renderSupportMarkup();
SupportSlider();

function SupportSlider() {
    const sliderItem = Array.from(sliderWrapper.children);
    sliderItem.forEach(function (slide) {
        for (let i = 6; i < sliderItem.length; i++) {
            sliderItem[i].classList.add('support-slider-hidden');
        }
        sliderNextBtn.addEventListener('click', function () {
            slide.classList.toggle('support-slider-hidden');
            return;
        })     
        return;
});
}



export { renderSupportMarkup }