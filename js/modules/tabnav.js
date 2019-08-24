export default function initTabNav() {
  // Selecting list of menus lists-itens and all content sections
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove('active', item.dataset.anime);
    });
    tabContent[index].classList.add('active', tabContent[index].dataset.anime);
  }
  // Verifying if our selections exists in this page, avoiding errors here
  if (tabMenu.length && tabContent.length) {
  // Activating first content section to avoid empty page on first acess
    tabContent[0].classList.add('active', tabContent[0].dataset.anime);
    /* Function to clean all active css classes at each item of the me-
    nu's list, and, then, adding active class on the clicked menu item ↓
    Adding event for the clicks on menu with previous
    function as callback (index required!) */
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
