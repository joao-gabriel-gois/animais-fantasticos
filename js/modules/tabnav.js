export default class TabNav {
  constructor(tabMenuList, tabContentSection) {
    // Selecting list of menus lists-itens and all content sections
    this.tabMenu = document.querySelectorAll(tabMenuList);
    this.tabContent = document.querySelectorAll(tabContentSection);
    this.activeTab = this.activeTab.bind(this);
  }

  activeTab(index) {
    const tab = this.tabContent;
    tab.forEach((item) => {
      item.classList.remove('active', item.dataset.anime);
    });
    tab[index].classList.add('active', tab[index].dataset.anime);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  activeDatasetAnime(i) {
    const tab = this.tabContent;
    if (tab.length && this.tabMenu.length) this.activeTab(i);
  }

  init() {
    this.activeDatasetAnime(0);
    this.addTabNavEvent();
  }
}
