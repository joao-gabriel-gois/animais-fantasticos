import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(menuElement, HTMLClass, ...events) {
      this.dropdownMenus = document.querySelectorAll(menuElement);
      this.HTMLCLass = HTMLClass;
      //Setting click and toouch start as default for events arguments
      if ([...events].length) this.userEvents = [...events];
      else this.userEvents = ['click', 'touchstart'];
      //Binding Callback
      this.onClickOnDropdownMenus = this.onClickOnDropdownMenus.bind(this);
  }

  onClickOnDropdownMenus(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.HTMLCLass);
    outsideClick(element, this.userEvents, () => {
      element.classList.remove(this.HTMLCLass);
    });
  }

  addDropdownMenusEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.onClickOnDropdownMenus);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvents();
    };
    return this;
  }
}
