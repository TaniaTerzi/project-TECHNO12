function openForm() {
  document.getElementById('myForm').style.display = 'block';
  document.querySelector('.reg-modal-backdrop').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
  document.querySelector('.reg-modal-backdrop').style.display = 'none';
}

const backdrop = document.querySelector('.reg-modal-backdrop');
const closeButton = document.querySelector('.reg-close-button');
const openButton = document.querySelector('#open-button'); // replace with the ID of the element that triggers the openForm() function

// Add event listeners
backdrop.addEventListener('click', closeForm);
closeButton.addEventListener('click', closeForm);
openButton.addEventListener('click', openForm);


