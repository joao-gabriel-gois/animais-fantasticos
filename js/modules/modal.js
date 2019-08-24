export default function initModal() {
  // Buttons and Modal's selections*
  const openButton = document.querySelector('[data-modal="abrir"]');
  const closeButton = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }
  function modalOutsideClick(event) {
  /*     The event linked with this function is added on con-
  tainerModal's element selection*, so containerModal will al-
  ways be modalOutsideClick function's 'this' andmay be used
  for comparation between it and the users mouse's target,
  therefore...          ↓↓↓↓↓      */
    if (event.target === this) toggleModal(event);
  }
  // Verifying if our selections* actual exists in this page, avoiding errors here
  if (openButton && closeButton && containerModal) {
    /* If this target is the section outside modal, toggle it
    adding click events to the previous selected elements
    properly attached with their respective callback functions */
    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', modalOutsideClick);
  }
}
