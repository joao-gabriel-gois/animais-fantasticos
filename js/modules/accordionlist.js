export default class Accordion {
  constructor(list) {
<<<<<<< HEAD
    if (this.accordionList === undefined) {
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
=======
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  addAccordionEvent() {
    // Adding event to each element of accordion
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  } // Event's Callback Function that actives css animations

>>>>>>> 1f55f27a46c958d36e98d3ed6b7c51e28e30d75b
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
<<<<<<< HEAD
  init() {
    // Verifying
    if (this.accordionList.length) {
      // Activating first "Q" and "F" of the FAQ
      this.accordionList[0].classList.add(this.activeClass);
      this.accordionList[0].nextElementSibling.classList.add(this.activeClass);
      this.addAccordionEvent();
    }
=======

  init() {
    // Verifying
    if (this.accordionList.length) {
      // Activating first "Q" and "A" of the FAQ
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
>>>>>>> 1f55f27a46c958d36e98d3ed6b7c51e28e30d75b
  }
}
