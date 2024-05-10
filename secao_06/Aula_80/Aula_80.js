
// Definição de um array de objetos contendo informações das pessoas
const pessoas = [
    { id:3, nome: 'Guilherme'},
    { id:2, nome: 'GDS'},
    { id:1, nome: 'Helena'},
];

/*
// Declaração de um objeto vazio onde as novas pessoas serão armazenadas com base no ID como chave
const novasPessoas = {};

// Iteração sobre o array de pessoas usando destructuring para extrair id e nome de cada objeto
for (const {id, nome } of pessoas) {
    // Atribuição ao objeto novasPessoas, utilizando o ID como chave e um novo objeto contendo id e nome como valor
    novasPessoas[id] = {id, nome};
}

// Exibição do objeto contendo as novas pessoas
console.log(novasPessoas);
*/

/*
// Declaração de um objeto vazio onde as novas pessoas serão armazenadas com base no ID como chave
const novasPessoas = {};

// Iteração sobre o array de pessoas
for (const pessoa of pessoas) {
    // Extrai o id de cada pessoa
    const {id} = pessoa;
    // Atribui ao objeto novasPessoas, utilizando o ID como chave e uma cópia do objeto pessoa como valor
    novasPessoas[id] = {...pessoa};
}

// Exibição do objeto contendo as novas pessoas
console.log(novasPessoas);
*/


// Declaração de um novo Map para armazenar as novas pessoas, onde a chave é o ID e o valor é um objeto contendo as informações da pessoa
const novasPessoas = new Map();

// Iteração sobre o array de pessoas
for (const pessoa of pessoas) {
    // Extrai o id de cada pessoa
    const {id} = pessoa;
    // Define no Map novasPessoas, utilizando o ID como chave e uma cópia do objeto pessoa como valor
    novasPessoas.set(id, {...pessoa});
}

// Exibição do Map contendo as novas pessoas
// console.log(novasPessoas);

// console.log(novasPessoas.get(2));

/*
// Iteração sobre o Map novasPessoas
for (const [identifier, {id, nome}] of novasPessoas) {
    // Para cada entrada no Map, desestrutura-se o identificador (chave) e o objeto pessoa (valor) em id e nome
    // Em seguida, os valores são exibidos no console
    console.log(identifier, id, nome);
}
*/

/*
// Iteração sobre as chaves do Map novasPessoas
for (const chave of novasPessoas.keys()) {
    // Para cada chave no Map, a chave é exibida no console
    console.log(chave);
}
*/

/*
// Iteração sobre os valores do Map novasPessoas
for (const valor of novasPessoas.values()) {
    // Para cada valor no Map, o valor é exibido no console
    console.log(valor);
}
*/

novasPessoas.delete(2);
console.log(novasPessoas)