const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
// const a3 = a1 + a2 // Tá fazendo a junção dos valores do array

// console.log(a3);
// console.log(typeof a3);

// const a3 = a1.concat(a2); // dessa forma irá retorna a concatenação correta dos array
// console.log(a3);


// const a3 = a1.concat(a2, [7, 8, 9], 'Guilherme'); 
// console.log(a3);

// const a3 = [...a1, ...a2]; // pode também com spread operator
// o spread vai espalhar o Array
// console.log(a3);

// const a3 = [...a1, 'Guilherme', ...a2];
// const a3 = [...a1, ...a2, 'Guilherme', [7, 8, 9]]; // [7, 8, 9], vai retornar um valor literal
const a3 = [...a1, ...a2, 'Guilherme', ...[7, 8, 9]]; // para pegar o valor desse array literal, usa o spread operator
console.log(a3);

