export default class Accordion {
  constructor(list) {
    if (accordionList === undefined) {
      this.accordionList = document.querySelectorAll('[data-anime="accordion"] dt');  
    } else {
      this.accordionList = document.querySelectorAll(list);
    }
    this.activeClass = 'active';
    //this.activeAccordion = this.activeAccordion
  }
  addAccordionEvent() {
    // Adding event to each element of accordion
    this.accordionList.forEach((item) => {
      item.addEventListener('click', this.toggleAccordion(item));
    });
  } // Event's Callback Function that actives css animations
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  init() {
    // Verifying
    if (this.accordionList.length) {
      // Activating first "Q" and "F" of the FAQ
      this.accordionList[0].classList.add(this.activeClass);
      this.accordionList[0].nextElementSibling.classList.add(this.activeClass);
      this.addAccordionEvent();
    }
  }
}
