export default class AnimatedNumbers {
   constructor(numberSpan, observerTarget, observerClass) {
     this.numberSpan = document.querySelectorAll(numberSpan);
     this.observerTarget = document.querySelector(observerTarget);
     this.observerClass = observerClass;
     this.handleMutation = this.handleMutation.bind(this);
  }

  static launchNumbers(numberElement) {
      const total = +numberElement.innerText;
      const increment = Math.floor(total / 100); // P/ diminuir as discrep. entre grandezas dif.
      let start = 0;
      const timer = setInterval(() => {
        start += increment; // Assim usamos esse incremento proporcional em vez de 1em1
        numberElement.innerText = start;
        if (start > total) {
          numberElement.innerText = total; // se floor der um num dif,antes de parar o timer ajeita
          clearInterval(timer);
        }
      }, 5.4 * (Math.random() + 0.063)); // Apenas um macete pro tempo soar organico e n tão lento
  }

  animateNumberSection() {
    this.numberSpan.forEach((number) => {
      this.constructor.launchNumbers(number);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumberSection();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true }); // Obsv a mudança de attr da sessão núm (4)
  }

  init() {
    //if (this.numberSpan.length && this.observerTarget) {
      console.log('teste');
      this.addMutationObserver(); // Obsv a mudança de attr da sessão núm (4)
    //};
    return this;
  }
}
