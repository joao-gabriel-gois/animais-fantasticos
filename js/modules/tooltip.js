export default function initTooltip() {
// (1) Selecting elements* that launchs tooltip's functions
  const tooltips = document.querySelectorAll('[data-tooltip]');
  // (2) Create n' returns the tooltip div w/ css class n' img's aria-label as content
  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  /* (3) Callback (obj) also from mouseOver's parent event, makes
  tooltip moves according to the mouse's movement on selected* area. */
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };/* OBS:  ↓
These objects could be inside of onMouseOver's function scope, but the example
is attempting to show more about how to use it with objects that uses the Java-
Script's default callback object's method('handleEvent').     */

  // (4) Callback 1a.i (obj) mouseLeave's callback
  const onMouseLeave = {// tooltip off and event's log cleaned
    handleEvent() { // because of this method this callback must be an obj
      this.tooltipBox.remove();/* Errors should appear if handleEvent isn't wrapping
      this code, because it will not leak its scope to where we're intentionally
      directing it to */
      ['mouseleave', 'mousemove'].forEach((userEvent) => {
        if (userEvent === 'mousemove') {
          this.element.removeEventListener(userEvent, onMouseMove);
        } else {
          this.element.removeEventListener(userEvent, onMouseLeave);
        }/*  Here above we've a ternary for
                ↓↓↓↓↓↓↓↓
          if (event'sCondition)
            remove thisEvent;
          else
            remove otherEvents;     */
      });
    },
  };
  // (5) Callback 1 (obj) launched by previous event
  function onMouseOver() { // ↓ 2nd Callback's launcher
    const tooltipBox = createTooltipBox(this);// last created function³

    // Adding event for when mouse's leaving selected area (tooltip → off) ↓
    onMouseLeave.tooltipBox = tooltipBox;// setting prop. for callback obj 1a.i
    onMouseLeave.element = this;// setting prop. again, saving current 'this'
    this.addEventListener('mouseleave', onMouseLeave);

    // Adding moving mouse's event (better UI tooltip → on) ↓
    onMouseMove.tooltipBox = tooltipBox;// setting for callback obj 1a.ii
    this.addEventListener('mousemove', onMouseMove);
  }
  // (6) Adding events to mouse's hover on previous selected* element
  tooltips.forEach((item) => { // ↓ 1st Callback's launcher
    item.addEventListener('mouseover', onMouseOver);
  });
}
