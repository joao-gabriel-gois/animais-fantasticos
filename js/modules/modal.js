export default class Modal {
  contructor(openBtn, closeBtn, modalContainer) {
    // Buttons and Modal's selections*
    this.openButton = document.querySelector(openBtn);
    this.closeButton = document.querySelector(closeBtn);
    this.modalContainer = document.querySelector(modalContainer);
  }

  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle('ativo');
  }

  modalOutsideClick(event) {
  /*     The event listener linked with this function is added on this.con-
  tainerModal element, so this.containerModal will al-
  ways be modalOutsideClick function's 'this' andmay be used
  for comparation between it and the users mouse's target,
  therefore...          ↓↓↓↓↓      */
    if (event.target === this) this.toggleModal(event);
  }

  bindingModalMethods() {
    this.toggleModal = this.toggleModal.bind(this);
    this.modalOutsideClick = this.modalOutsideClock.bind(this);
  }

  // Verifying if our selections* actual exists in this page, avoiding errors here
  modalAddEvents() {
    if (this.openButton && this.closeButton && this.containerModal) {
      /* If this target is the section outside modal, toggle it
      adding click events to the previous selected elements
      properly attached with their respective callback functions */
      this.openButton.addEventListener('click', () => this.toggleModal);
      this.closeButton.addEventListener('click', () => this.toggleModal);
      this.containerModal.addEventListener('click', () => this.modalOutsideClick);
    }
  }

  init() {
    this.modalAddEvents();
  }
}
