/*
Oject.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spred)

// já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

/*
const produto = {nome: 'Caneca', preco: 1.8};
produto.nome = 'Guilherme Gomes'
const outraCoisa = produto; // tá apontando pro mesmo valor na memoria
console.log(produto);
console.log(outraCoisa);
*/

/*
const produto = {nome: 'Produto', preco: 1.8};
// const caneca = {...produto}; // copiando os valores
const caneca = {
    ...produto,
    material: 'procelana'
}; // pode adicionar novos atributos e metodos

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
*/

/*
//outra forma de copiar os valores
const produto = {nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'}); // {} -> criar um obj vazio, depois add o elemento que quer copiar e depois pode adicionar mais coisas

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
*/

/*
// outra forma de copiar elementos
const produto = {nome: 'Produto', preco: 1.8};
const caneca = {nome: produto.nome, preco: produto.preco};

caneca.nome = 'Outra coisa';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
*/

/*
const produto = {nome: 'Produto', preco: 1.8};
const caneca = {nome: produto.nome, preco: produto.preco};
console.log(Object.keys(produto)); // vai retornar um array com as chaves do produto
console.log(Object.keys(caneca)); // vai retornar um array com as chaves do produto
*/

/*
const produto = {nome: 'Produto', preco: 1.8};
const caneca = {nome: produto.nome, preco: produto.preco};
Object.freeze(produto); // congela o objeto informado e não podera sofrer nenhuma alteração
produto.nome = 'Outro nome';
console.log(produto);
*/

/*
const produto = {nome: 'Produto', preco: 1.8};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))// getOwnPropertyDescriptor - método que te permite obter os detalhes de uma propriedade específica de um objeto.
*/

/*
const produto = {nome: 'Produto', preco: 1.8}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
// Object.getOwnPropertyDescriptor(produto, 'nome')
produto.nome = 'Outra coisa';
delete produto.nome;
delete produto.preco;
console.log(produto);
*/

const produto = {nome: 'Produto', preco: 1.8, material: 'Porcelana'};
// console.log(Object.values(produto)); // vai trazer um array com os valores do objeto
// console.log(Object.entries(produto)); // retorna um array com as chaves e os valores do objeto

// for (let entry of Object.entries(produto)) {// vai trazer a desetruturação do objeto
//     console.log(entry);
// }


// for (let [chave, valor] of Object.entries(produto)) {
//     //é usado para obter um array de pares chave-valor de um objeto. Em seguida, a desestruturação é aplicada dentro do loop for,
//     //onde cada elemento do array é desestruturado em suas partes individuais, neste caso, a chave e o valor.
//     console.log(chave, valor);
//     //Então, chave e valor são as variáveis onde as partes chave e valor de cada entrada do objeto serão armazenadas,
//     //permitindo que você as utilize separadamente dentro do loop.
//     //Isso simplifica o acesso aos dados do objeto e torna o código mais legível.
// }

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}