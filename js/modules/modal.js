export default class Modal {
  constructor(openBtn, closeBtn, modalContainer) {
    //Pudou@stdnt-cl version
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
//I did this class without binding callbacks, but passing anon arrow func in callbackfunctions
//For this particular use case nothing is requiring to bind it.
//To test Origamid's version, import modalOrigamid.js instead of this one
