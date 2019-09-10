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
    console.log('testmove')
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
  };/* OBS:  ↓
These objects could be inside of onMouseOver's function scope, but the example
is attempting to show more about how to use it with objects that uses the Java-
Script's default callback object's method('handleEvent').     */

  // (4) Callback 1a.i (obj) mouseLeave's callback
  onMouseLeave() {// tooltip off and event's log cleaned
    this.tooltipBox.remove();/* Errors should appear if handleEvent isn't wrapping
    this code, because it will not leak its scope to where we're intentionally
    directing it to */
    ['mouseleave', 'mousemove'].forEach((userEvent) => {
      if (userEvent === 'mousemove') {
        this.tooltips[0].removeEventListener(userEvent, this.onMouseMove);
      } else {
        this.tooltips[0].removeEventListener(userEvent, this.onMouseLeave);
      }console.log('testleave')
      /*  Here above we've a ternary for
              ↓↓↓↓↓↓↓↓
        if (event'sCondition)
          remove thisEvent;
        else
          remove otherEvents;     */
    });
  };
  // (5) Callback 1 (obj) launched by previous event
  onMouseOver(event) { // ↓ 2nd Callback's launcher
    console.log('testover');
    this.createTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    // Adding moving mouse's event (better UI tooltip → on) ↓
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  bindingCallbacks() {
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  // (6) Adding events to mouse's hover on previous selected* element
  addTooltipEvents(){ 
    this.tooltips.forEach((item) => { // ↓ 1st Callback's launcher
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    console.log('teste');
    this.bindingCallbacks();
    this.addTooltipEvents();
  }
}
