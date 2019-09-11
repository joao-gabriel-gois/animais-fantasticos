import AnimatedNumbers from './animated-numbers.js';

export default function initFetchAnimals(url, target, wrapperClass) {
  function createAnimalElement(animal) {
    const div = document.createElement('div');
    div.classList.add(wrapperClass);
    div.innerHTML = `<h3>${animal.species}</h3><span data-number>${animal.total}</span>`;
    return div;
  }
  function initAnimatedNumbers() {
    const animatedNumbers = new AnimatedNumbers('[data-number]', '.numbers', 'active');
    animatedNumbers.init();
  }
  function renderAnimalElement(animal) {
    const divAnimal = createAnimalElement(animal);
    const targetGrid = document.getElementsByClassName(target)[0];
    targetGrid.appendChild(divAnimal);
  }
  async function fetchThenRenderAnimals() {
    try {  
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();
      animalsJson.forEach(animal => renderAnimalElement(animal));
      initAnimatedNumbers();
    } catch(error) {
      throw Error(error);
    }
  }
  return fetchThenRenderAnimals(url);
}
