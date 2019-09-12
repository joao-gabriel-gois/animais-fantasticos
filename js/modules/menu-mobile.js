import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, htmlClass, ...events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.htmlClass = htmlClass;
    
    if ([...events].length) this.userEvents = [...events];
    else this.userEvents = ['click', 'touchstart'];
    
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.toggle(this.htmlClass);
    this.menuButton.classList.toggle(this.htmlClass);
    const isActive = this.menuButton.classList.contains(this.htmlClass)
      && this.menuList.classList.contains(this.htmlClass);
    
    outsideClick(this.menuList, this.userEvents, () => {
      if (isActive) {
        this.menuList.classList.remove(this.htmlClass);
        this.menuButton.classList.remove(this.htmlClass);
      }
    });
  }

  addMenuBtnEvents() {
    this.userEvents.forEach(event => {
      this.menuButton.addEventListener(event, this.openMenu);    
    });
  }

  init() {
    if (this.menuList && this.menuButton) {
      this.addMenuBtnEvents();
    }
  }
}
