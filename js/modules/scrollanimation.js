export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.57;
    this.animateAtRightDistance = this.animateAtRightDistance.bind(this);
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
    console.log(event);//adding to many events, need to refactor this
    this.distance.forEach((item) => {
      const itemHTMLClass = item.element.classList;
      if (window.pageYOffset > item.elementOffsetTop) {
        itemHTMLClass.add('active');
      } else if (itemHTMLClass.contains('active')) {
        itemHTMLClass.remove('active');
      }
    })
  }
  init() {
    if (this.sections.length) {
      this.setDistance();
      this.animateAtRightDistance();
      window.addEventListener('scroll', this.animateAtRightDistance);
    }
    return this;
  }
  stop() {
    window.removeEventListener('scroll', this.animateAtRightDistance);
  }
}
