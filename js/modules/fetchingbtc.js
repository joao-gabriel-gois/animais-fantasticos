export default function initFecthBTC(btcElement, url) {
  const btcWrapper = document.querySelector(btcElement);
  const btcValue = fetch(url).then(r => r.json());
  btcValue.then((response) => {
    const fiftyReaisInBTC = (50 / response.BRL.sell).toFixed(4);
    btcWrapper.innerText = `Com 50 reais você doa ${fiftyReaisInBTC} BTC`;
  });
}
