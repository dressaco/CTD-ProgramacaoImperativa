console.log(1 == '1');
console.log(1 === '1');

let valorA = 10;
let valorB = 20;

console.log(valorA > valorB);
console.log(valorA > 10 && valorB <= 20);
console.log(valorA < 5 || valorB >= 20);
console.log(valorA > 5 && (valorA > 10 || valorB <= 20));
console.log(!(valorB < 20));
console.log(!(valorA < 20));
console.log(!!(valorA < 20));

let valorTexto = 'Novo';
console.log(valorTexto);
console.log(!valorTexto);
console.log(!!valorTexto); // !! transforma a string em booleano