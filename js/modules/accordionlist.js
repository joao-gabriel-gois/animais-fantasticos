export default function initAccordionList() {
  // Selecting Accordions
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  // Event's Callback Function that actives css animations
  function activeAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }
  // Verifying
  if (accordionList.length) {
    // Activating first "Q" and "F" of the FAQ
    accordionList[0].classList.add('active');
    accordionList[0].nextElementSibling.classList.add('active');
    // Adding event to each element of accordion
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
