const num1 = 5;
const num2 = 10;
const num3 = 7;
const nome = 'GDS';
const num4 = '9';
const num5 = '1.9';
let contador = 0;

console.log(num1 + num2); // Adição
console.log(num1 - num2); // Subtração
console.log(num1 / num2); // Divisão
console.log(num1 * num2); // Multiplicação
console.log(num1 ** num2); // Poteciação
console.log(num1 % num2) // Resto
console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);

/*
contador++; // O pós primeiro executa a ação e depois ele faz o incremento do valor
contador++;
contador++;
console.log(contador++);

++contador; // O pré, primeiro faz a conta e depois retorna a conta
++contador;
++contador;
console.log(++contador);

// Decremento
console.log(--contador);
*/

/*
const passo = 2;

contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador += 2;
contador += 2;
contador += 2;
console.log(contador);
*/

console.log(num1 * nome);
console.log(num1 * num4);
console.log(num1 + num4);
console.log(num1 + parseInt(num4));
console.log(typeof num4)
console.log(num1 + parseFloat (num5));
console.log(num1 + Number (num5));
console.log(num1 + Number (nome));