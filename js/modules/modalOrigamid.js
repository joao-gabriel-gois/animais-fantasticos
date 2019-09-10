export default class Modal {
  constructor(openBtn, closeBtn, modalContainer) {
    //Origamid Alike version, with my names
    //it separates toggleModal from eventToggle modal
    //and requires binding for working, differently
    //from my version which bind is not required 
    this.openButton = document.querySelector(openBtn);
    this.closeButton = document.querySelector(closeBtn);
    this.modalContainer = document.querySelector(modalContainer);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.modalOutsideClick = this.modalOutsideClick.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  modalOutsideClick(event) { 
    if (event.target === this.modalContainer) this.toggleModal();
  }

  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.modalOutsideClick);
  }

  init() {
    const isModalThere = this.openButton && this.closeButton && this.modalContainer;
    if (isModalThere) this.addModalEvents();
    return this;
  }
}
