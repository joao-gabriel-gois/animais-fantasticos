export default class CommercialAvailability {
  constructor(element, htmlClass) {
    this.element = document.querySelector(element);
    this.htmlClass = htmlClass;
  }
  setCommercialAvailability() {
    this.weekDays = this.element.dataset.week.split(',').map(item => +item);
    this.weekHours = this.element.dataset.hour.split(',').map(Number);
  }
  setCurrentTime() {
    const currentDate = new Date();
    this.currentDay = currentDate.getDay();
    this.currentHour = currentDate.getUTCHours() - 3;

  }
  setIsOpen() {
    const openDays = this.weekDays.indexOf(this.currentDay) !== -1;
    const openHours= (this.weekHours[0] <= this.currentHour && this.currentHour < this.weekHours[1]);
    return openDays && openHours;
  }
  toggleCommercialAvailability() {
    if (this.setIsOpen())
      this.element.classList.add(this.htmlClass);
  }
  init() {
    this.setCommercialAvailability();
    this.setCurrentTime();
    this.setIsOpen()
    if (this.element) {
      this.toggleCommercialAvailability();
    }
  }
}
