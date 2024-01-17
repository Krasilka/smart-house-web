const modal = $('#menu-controller');
const openModalBtn = $('#open-modal-button');
const closeBtn = $('.close')[0];

function toggleModal() {
  modal.toggleClass('hidden');
}

function closeByBtn() {
  modal.style.display = 'none';
}

openModalBtn.on('click', toggleModal);

//   closeBtn.on('click', closeByBtn);
