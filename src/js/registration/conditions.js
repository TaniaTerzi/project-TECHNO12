import { licenseModal, licenseLink, closeBtn } from './reg-const';

licenseLink.addEventListener('click', function () {
  licenseModal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  licenseModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target == licenseModal) {
    licenseModal.style.display = 'none';
  }
});
