import { Loading } from 'notiflix/build/notiflix-loading-aio';

showLoadingIndicator();

window.onload = function () {
  Loading.remove(1500);
};

export function showLoadingIndicator() {
  Loading.hourglass({
    clickToClose: true,
    svgSize: '100px',
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
}
export function removeLoader() {
  window.onload = function () {
    Loading.remove();
  };
}

