export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(item => +item);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioSemana[0] <= horarioAgora && horarioAgora < horarioSemana[1]);
  if (horarioAberto && semanaAberto) {
    funcionamento.classList.add('active');
  } else {
    funcionamento.classList.remove('active');
  }
}
// if (horarioSemana[0] <= horarioAgora < horarioSemana[1]) {
//   funcionamento.classList.add('active');
// } else {
//  funcionamento.classList.remove('active');
// } ← minha solução
