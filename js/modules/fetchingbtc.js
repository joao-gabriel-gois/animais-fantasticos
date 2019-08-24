export default function initFecthBTC() {
  const btcEl = document.querySelector('[data-btc]');
  const btcVal = fetch('https://blockchain.info/ticker').then(r => r.json());
  btcVal.then((response) => {
    const galoEmBTC = (50 / response.BRL.sell).toFixed(4);
    btcEl.innerText = `Com 50 reais você doa ${galoEmBTC} BTC`;
  });
}
