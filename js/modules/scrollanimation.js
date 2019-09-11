export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.57;
    this.animateScroll = this.animateScroll.bind(this);
  }
  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisibleSection = (sectionTop - this.halfWindow) < 0;
      if (isVisibleSection) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }
  init() {
    if (this.sections.length) {
        this.sections[0].classList.add('active');
        window.addEventListener('scroll', this.animateScroll);
      }
  }
}
