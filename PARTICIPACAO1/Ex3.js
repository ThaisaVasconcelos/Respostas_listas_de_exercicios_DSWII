//Verifique o uso de var, let e const e veja as saídas do código em um script. Explique o porque do resultado apresentado:
var a = 1;
let b = 2;
const c = 3;

a = 10 // A saida e 10
b = 20 // A saida e 20
c = 30 // Erro, pois c é uma constante, portanto nao pode ser alterada

console.log(a);
console.log(b);
console.log(c);