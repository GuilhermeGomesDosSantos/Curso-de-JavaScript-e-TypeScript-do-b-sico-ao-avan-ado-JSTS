// Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos

// Filter
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;
    }

    return false;
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
*/

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {
function callbackFilter(valor) {
    return valor > 10;

}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
*/

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((valor) => {
// const numerosFiltrados = numeros.filter(valor => {
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);
*/

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
function callbackFilter(valor, indice, array) {
    // console.log(valor);
    // console.log(valor, indice);
    console.log(valor, indice, array);
    return valor > 10;
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
*/

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Guilherme', idade: 47},
];
/*
const nomesGrandes = pessoas.filter(function (obj) {
    // return obj.nome.length >= 5;
    // return obj.nome.length >= 7;
    return obj.nome.length >= 9;
});
console.log(nomesGrandes)
*/
const nomesGrandes = pessoas.filter(obj => obj.nome.length > 5);
// console.log(nomesGrandes);

/*
const pessoasCom_Mais_50 = pessoas.filter(function (obj) {
    return obj.idade >= 50;
});
console.log(pessoasCom_Mais_50);
*/

const pessoasCom_Mais_50 = pessoas.filter(obj => obj.idade >= 50);
// console.log(pessoasCom_Mais_50);

/*
const nomeTerminaCom_a = pessoas.filter(function (obj) {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});
console.log(nomeTerminaCom_a);
*/

const nomeTerminaCom_a = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(nomeTerminaCom_a);