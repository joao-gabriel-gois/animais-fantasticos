import outsideClick from './outsideclick.js';

export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['touchstart', 'click'];
  function openMenu() {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
    outsideClick(menuList, events, () => {
      if (menuButton.classList.contains('active') && menuList.classList.contains('active')) {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      }
    });
  }
  if (menuButton) {
    events.forEach(event => menuButton.addEventListener(event, openMenu));
  }
}
