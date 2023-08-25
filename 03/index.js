const valorProduto = 129.99;
const meuDinheiro = 80;
const valorDesconto = valorProduto - meuDinheiro;

console.log(`Esse será o valor do desconto: ${valorDesconto}`);

let porcentagem = valorDesconto * 100; 

porcentagem /= valorProduto;
console.log(`Esse será a porcentagem do desconto do produto: ${porcentagem}%`);


//129.99 - 100%
//49.99 - x

//4999 - 129.99x
// x 4999/129.99





