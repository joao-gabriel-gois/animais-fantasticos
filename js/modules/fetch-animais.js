import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.species}</h3><span data-numero>${animal.total}</span>`;
    console.log(div);
    return div;
  }
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
    animaisJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      const numbersGrid = document.querySelector('.numeros-grid');
      numbersGrid.appendChild(divAnimal);
    });
    initAnimaNumeros();
  }
  fetchAnimais('./animaisapi.json');
}
