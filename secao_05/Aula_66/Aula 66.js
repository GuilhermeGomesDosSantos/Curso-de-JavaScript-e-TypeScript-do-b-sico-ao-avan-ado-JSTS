// Map vai sempre ter o valor do Array Original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
const numerosEmDobro = numeros.map(function(valor, indice, array) {
    // console.log(valor, indice, array);
    return valor * 2;
})
console.log(numerosEmDobro);
*/

// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);


/*
Para cada elemento:
Retorne apenas uma string com o nome da pessoa
Remova apenas a chave "nome" do objeto
Adicione uma chave id em cada objeto
*/
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Guilherme', idade: 47},
];

/*
const nomes = pessoas.map(function(valor) {
    return valor;
});

console.log(nomes);
*/

/*
const nomes = pessoas.map(function (obj) {
    return obj.nome;
});

console.log(nomes);
*/

/*
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);
*/

/*
const idade = pessoas.map(obj => {
    delete obj.nome
    return obj;
})
console.log(idade);
*/

/*
const idades = pessoas.map(function(obj) {
    return {idade: obj.idade};
});
console.log(idades);
*/

/*
const idades = pessoas.map(obj => ({idade: obj.idade}));// sem os parentes, iria entender que seria um bloco de função
console.log(idades);
*/

/*
const comIds = pessoas.map(function(obj, indice) {
    obj.id = indice;
    return obj;
});
console.log(comIds);
*/

/*
const comIds = pessoas.map((obj, indice) => {
    obj.id = (indice + 1) * 1;
    return obj;
});

console.log(comIds);
*/
const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj};

    newObj.id = (indice + 1) * 1;
    return newObj;
});
console.log(pessoas);
console.log(comIds);
