// (1) Importando Modules
// (1a) console.log('Funções do começo do curso até', idem);
// ↓↓  const idem = ' Sessão 5 → "efeitos no dom" ';
import TabNav from './modules/tabnav.js';
import Accordion from './modules/accordionlist.js';
import SmoothScroll from './modules/smoothscroll.js';
import ScrollAnimation from './modules/scrollanimation.js';
// (1b) console.log('A partir daqui importando de' + idem + ' em diante.');
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBTC from './modules/fetchingbtc.js';

// (2) Activating imported classes - particular use of general features
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

const scrollanimation = new ScrollAnimation('[data-anime="scroll"]');
scrollanimation.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]','active_2');
dropdownMenu.init();

initMenuMobile();
initFuncionamento();

// (3) Activating imported functions - special build for this project use, non-general features
initFetchAnimals('./animals-API-simulation.json', 'numbers-grid', 'number-animal');
initFetchBTC('[data-btc]', 'https://blockchain.info/ticker');
