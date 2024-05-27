
// indices       0, 1, 2, 3...               Posição dos valores
// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]; // valores
// const primeiroNumero = numeros[0];

// const [um, dois, tres, ...resto] = numeros; // está sendo feito atribuição via desestruturação
// console.log(primeiroNumero, segundoNumero);
// console.log(um, dois, tres);
/*
const [um, ,tres, ,cinco, ,sete, ...resto] = numeros;// pode ir pulando indices
console.log(um, tres, cinco, sete);

console.log(resto); /*o resto vai pegar o resto dos indices
Rest utilizado para permitir que uma função receba um número indefinido de parâmetros*/

// Lista dentro de uma lista
/*
//                Lista 0     Lista 1    Lista 2
// indeces das listas
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][2]);
const[,[,,seis]] = numeros; // pula o indice da lista 0, pula os 2 primeiros indices da lista 1 e pega o terceiro valor
console.log(seis);
*/

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);