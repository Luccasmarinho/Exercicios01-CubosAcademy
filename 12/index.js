const M = 90000;
const C = 60000;
const n = 24;
const i = Math.pow(M / C, 1/n) - 1

console.log(`O seu financeamento de ${C} reais teve uma taxa de juros de ${i}% pois após 24 meses você teve que pagar ${M} reais`);