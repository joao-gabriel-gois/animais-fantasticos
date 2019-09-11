import AnimatedNumbers from './animated-numbers.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${animal.species}</h3><span data-number>${animal.total}</span>`;
    return div;
  }
  function initAnimatedNumbers() {
    const animatedNumbers = new AnimatedNumbers('[data-number]', '.numbers', 'active');
    animatedNumbers.init();
  }
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
    animaisJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      const numbersGrid = document.querySelector('.numbers-grid');
      numbersGrid.appendChild(divAnimal);
    });
    initAnimatedNumbers();
  }
  
  fetchAnimais('./animaisapi.json');
}
