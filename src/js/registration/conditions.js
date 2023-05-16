var licenseModal = document.getElementById('conditions');
var licenseLink = document.getElementById('conditions-link');
var closeBtn = document.querySelector('.close');

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
