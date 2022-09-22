(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('[data-backdrop]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.backdrop.classList.add('modal__backdrop--visible');
  }
  function closeModal() {
    setTimeout(() => refs.backdrop.classList.remove('modal__backdrop--visible'), 500);
    setTimeout(() => refs.backdrop.classList.remove('modal__backdrop--close-anim'), 500);
    setTimeout(() => refs.modal.classList.remove('modal--close-anim'), 500);
    refs.backdrop.classList.add('modal__backdrop--close-anim');
    refs.modal.classList.add('modal--close-anim');
  }
})();
