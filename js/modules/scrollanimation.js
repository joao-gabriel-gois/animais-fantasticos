import debounce from './debounce.js';

export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.57;
    //Here is the debounce magic
    this.animateAtRightDistance = debounce(this.animateAtRightDistance.bind(this), 48);
  }
  setDistance() {
    this.distance = [...this.sections].map((section) => {
      const elementOffsetTop = section.offsetTop;
      return {
        element: section,
        elementOffsetTop: Math.floor(elementOffsetTop - this.halfWindow)
      }
    });
  }
  animateAtRightDistance(event) {
    this.distance.forEach((item) => {
      const itemHTMLClass = item.element.classList;
      if (window.pageYOffset > item.elementOffsetTop) {
        itemHTMLClass.add('active');
      } else if (itemHTMLClass.contains('active')) {
        itemHTMLClass.remove('active');
      }
    })
  }
  addScrollEvent() {
    window.addEventListener('scroll', (event) => {
      this.animateAtRightDistance(event);
    });
  }
  init() {
    if (this.sections.length) {
      this.setDistance();
      this.animateAtRightDistance();
      this.addScrollEvent();
    }
    return this;
  }
  stop() {
    window.removeEventListener('scroll', this.animateAtRightDistance);
  }
}
