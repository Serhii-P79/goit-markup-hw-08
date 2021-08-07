(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    DataBody: document.querySelector('[data-body]'),
  };

 // refs.modal.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.DataBody.classList.toggle('non-scroll-body');
    window.scroll(0, 0);
    console.log('ffffff');
  }

})();
