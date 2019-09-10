export default class Modal {
  constructor(openBtn, closeBtn, modalContainer) {
    // Buttons and Modal's selections*
    this.openButton = document.querySelector(openBtn);
    this.closeButton = document.querySelector(closeBtn);
    this.modalContainer = document.querySelector(modalContainer);
  }

  toggleModal(event) {
    event.preventDefault();
    this.modalContainer.classList.toggle('ativo');
  }

  modalOutsideClick(event) { 
    if (event.target === this.modalContainer) this.toggleModal(event);
  }

  bindingModalMethods() {
    this.toggleModal = this.toggleModal.bind(this);
    this.modalContainer = this.modalContainer.bind(this);
  }

  addModalEvents() {
    this.openButton.addEventListener('click', () => this.toggleModal(event));
    this.closeButton.addEventListener('click', () => this.toggleModal(event));
    this.modalContainer.addEventListener('click', () => this.modalOutsideClick(event));
  }

  init() {
    const isModalThere = this.openButton && this.closeButton && this.modalContainer;
    if (isModalThere) this.addModalEvents();
    return this;
  }
}
