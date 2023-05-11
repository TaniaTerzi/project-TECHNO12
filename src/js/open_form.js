const backdrop = document.querySelector('.reg-modal-backdrop');
const closeButton = document.querySelector('.reg-close-button');
const openButton = document.querySelector('#header-signup-link');
const registrationForm = document.getElementById('myForm');
function openForm() {
backdrop.classList.remove('visually-hidden');
}

function closeForm() {
backdrop.classList.toggle('visually-hidden');
}

backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    closeForm();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
		closeForm();
		return
  }
});


closeButton.addEventListener('click', closeForm);
openButton.addEventListener('click', openForm);
