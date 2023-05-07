import { supportList } from "./support-list"




const sliderWrapper = document.querySelector('.swiper-wrapper');

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


    // console.log(supportMarcup);

    sliderWrapper.insertAdjacentHTML('afterbegin', supportMarcup);
};


renderSupportMarkup();



export { renderSupportMarkup }