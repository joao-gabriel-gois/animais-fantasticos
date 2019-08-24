export default function initAnimaNumeros() {
  function launchNumbers() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      let start = 0;
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100); // P/ diminuir as discrep. entre grandezas dif.
      const timer = setInterval(() => {
        start += incremento; // Assim usamos esse incremento proporcional em vez de 1em1
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total; // se floor der um num dif,antes de parar o timer ajeita
          clearInterval(timer);
        }
      }, 5.4 * (Math.random() + 0.063)); // Apenas um macete pro tempo soar organico e n tão lento
    });
  }// Callback da observer (2) ↓
  let observer;// Good taste to declare first
  function handleMutation(mut) {
    if (mut[0].target.classList.contains('active')) {
      observer.disconnect();
      launchNumbers();
    }
  }
  const obsTarget = document.querySelector('.numeros'); // selec. sessão numeros (1)
  observer = new MutationObserver(handleMutation); // criando obs c callback handleMutation(3)
  observer.observe(obsTarget, { attributes: true }); // Obsv a mudança de attr da sessão núm (4)
}
/*

(1) Primeiro seleciona a sessão.

(2) Depois armazena a função callback que, qdo disparada, verifica se ta ativo,
desconecta obs e dispara o timer da função launchNumbers.

(3) Dps cria o observador, dando de parametro o callback que disparara dele

(4) faz o observador observar especific. a mudança de attr da sessão, ocorrendo,
dispara o callback de quando da criação do obs
*/
