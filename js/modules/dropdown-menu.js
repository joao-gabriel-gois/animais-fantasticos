import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const userEvents = ['touchstart', 'click'];
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, userEvents, () => {
      this.classList.remove('ativo');
    });
  }
  dropdownMenus.forEach((menu) => {
    userEvents.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
