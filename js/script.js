// (1) Importando Modules
// (1a) console.log('Funções do começo do curso até', idem);
// ↓↓  const idem = ' Sessão 5 → "efeitos no dom" ';
import TabNav from './modules/tabnav.js';
import Accordion from './modules/accordionlist.js';
import SmoothScroll from './modules/smoothscroll.js';
import initScrollAnimation from './modules/scrollanimation.js';
// (1b) console.log('A partir daqui importando de' + idem + ' em diante.');
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBTC from './modules/fetchingbtc.js';
// (2) Activating imported classes

const smoothscroll = new SmoothScroll('[data-menu="smoothScroll"] a[href^="#"]');
smoothscroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

// (2b) console.log('Ativando as Funções antes de' + idem);
initScrollAnimation();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
// (3) console.log('Ativando as Funções da Sessão 6');
initFetchAnimais();
initFetchBTC();
