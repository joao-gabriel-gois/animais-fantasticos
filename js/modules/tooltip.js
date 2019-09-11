export default class Tooltip {
  // (1) Selecting elements* that launchs tooltip's functions
  constructor(tooltipWrapper) {
    this.tooltips = document.querySelectorAll(tooltipWrapper);
  }

  // (2) Create n' returns the tooltip div w/ css class n' img's aria-label as content
  createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    this.elementText = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = this.elementText;
    this.tooltipBox = document.body.appendChild(tooltipBox);
    return this.tooltipBox;
  }

  /* (3) Callback (obj) also from mouseOver's parent event, makes
  tooltip moves according to the mouse's movement on selected* area. */
  onMouseMove(event) {
      this.tooltipBox.style.top = `${event.pageY + 24}px`;
      if (event.pageX + 224 > window.innerWidth) { //chec if tooltip is ovrflowing the window
        this.tooltipBox.style.left = `${event.pageX - 193}px`;
      } else {
        this.tooltipBox.style.left = `${event.pageX + 24}px`;
    }
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseMove);
    event.currentTarget.removeEventListener('mousemove', this.onMouseLeave);
  }
  
  onMouseOver(event) {
    this.createTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  bindingCallbacks() {
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  addTooltipEvents(){ 
    this.tooltips.forEach((item) => { // ↓ 1st Callback's launcher
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    this.bindingCallbacks();
    if (this.tooltips.length) this.addTooltipEvents();
  }
}
