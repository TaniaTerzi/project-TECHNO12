import Swiper from "swiper";
import { supportList } from "./support-list"





const sliderContainer = document.querySelector('.support-slider-container')
const sliderWrapper = document.querySelector('.swiper-wrapper');
const sliderNextBtn = document.querySelector('.slider__next');

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
        //desctop support render
        if (sliderContainer.clientHeight === 490) {
            for (let i = 6; i < sliderItem.length; i++) {
                sliderItem[i].classList.add('support-slider-hidden');
            }
            sliderNextBtn.addEventListener('click', function () {
                slide.classList.toggle('support-slider-hidden');
                return;
            })     
            return;
        }

        //tablet support render
        if (sliderContainer.clientHeight === 472) {
            for (let i = 6; i < sliderItem.length; i++) {
                sliderItem[i].classList.add('support-slider-hidden');
            }
            sliderNextBtn.addEventListener('click', function () {
                slide.classList.toggle('support-slider-hidden');
                return;
            })     
            return;
        }

        //mobile support rener 
        if (sliderContainer.clientHeight === 352) {
            for (let i = 4; i < sliderItem.length; i++) {
                sliderItem[i].classList.add('support-slider-hidden');
            }
            sliderNextBtn.addEventListener('click', function () {
                slide.classList.toggle('support-slider-hidden');
                return;
            })     
            return;
        }
});
}



export { renderSupportMarkup }