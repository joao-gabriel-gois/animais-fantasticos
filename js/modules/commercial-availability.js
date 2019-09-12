export default class CommercialAvailability {
  constructor(element, htmlClass) {
    this.element = document.querySelector(element);
    this.htmlClass = htmlClass;

    const weekDays = this.element.dataset.week.split(',').map(item => +item);
    const weekHours = this.element.dataset.hour.split(',').map(Number);
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    this.openDays = weekDays.indexOf(currentDay) !== -1;
    this.openHours= (weekHours[0] <= currentHour && currentHour < weekHours[1]);
  }
  toggleCommercialAvailability() {
    if (this.openDays && this.openHours)
      this.element.classList.add(this.htmlClass);
  }
  init() {
    if (this.element) {
      this.toggleCommercialAvailability();
    }
  }
}
