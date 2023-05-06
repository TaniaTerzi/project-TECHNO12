// import Swiper from 'swiper';
import { supportList } from '../js/support-list';


sliderRefs = {
    sliderWrapper: document.querySelector('.swiper-wrapper'),
}

export function renderSupportMarkup() {
    let supportListId = 0;
    supportMarcup = supportList.map(({ title, url, img }) => {
        supportListId +=1
        return `
            <div class="swiper-slide">
                <a class="support-link" href="${url}" target="_blank"><span class="support-id" >${String(supportListId).padStart(2, 0)}</span>${title}</a>
            </div>
        `
    }).join('');
    console.log(supportMarcup);
    sliderRefs.sliderWrapper.insertAdjacentHTML('afterbegin', supportMarcup);
};

