export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  addAccordionEvent() {
    // Adding event to each element of accordion
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  } // Event's Callback Function that actives css animations

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  init() {
    // Verifying
    if (this.accordionList.length) {
      // Activating first "Q" and "A" of the FAQ
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
