/*const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Gomes',
    idade: 20,
    endereco: {
        rua: 'AV. Mateo Bei',
        numero: 123
    }
};

// console.log(pessoa);
// console.log(pessoa.nome);
// const nome = pessoa.nome; // pega o nome do objeto pessoa
// console.log(nome);

// Atribuição via desestruturação
// const {nome} = pessoa; // está falando estrai desse objeto a chave nome
const {nome, sobrenome, idade} = pessoa; 
console.log(nome, sobrenome);
*/

/*
const pessoa = {
    // nome: 'Gui',
    sobrenome: 'Gomes',
    idade: 20,
    endereco: {
        rua: 'AV. Mateo Bei',
        numero: 123
    }
};
const {nome = 'Não existe', sobrenome} = pessoa; // valor padrão
console.log(nome, sobrenome);
*/

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Gomes',
    idade: 20,
    endereco: {
        rua: 'Av. Mateo Bei',
        numero: 123
    }
};
/*
const {nome: teste = '', sobrenome} = pessoa;// está nformando que a chave nome, crie a variavel teste
console.log(teste, sobrenome); // teste vai ter o valor de nome
*/

// const {nome, sobrenome, endereco} = pessoa;
// const {endereco: { rua, numero}, endereco} = pessoa;
// console.log(rua, numero, endereco);
/*
const {
    endereco: { rua: r = 'Rua teste', numero }, endereco
} = pessoa;
console.log(r, numero, endereco);
*/

const {nome, ...resto} = pessoa;
console.log(nome, resto);