// defineProperty --> Define uma propriedade por vez
// defineProperties --> Define varias propriedade de uma vez só

/*
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.produto = produto;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave quando for true
        value: estoque, // mostra o valor
        writable: false, // pode alterar ou não
        configurable: false, // configuravel
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
// delete p1.estoque;
console.log(p1);
*/

/*
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.produto = produto;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave quando for true
        value: function() {
            return estoque;
        }, // mostra o valor
        writable: false, // pode alterar ou não
        configurable: true, // configuravel
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
// delete p1.estoque;
// console.log(p1);
console.log(p1.estoque());
*/

/*
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave quando for true
        value: estoque, // mostra o valor
        writable: true, // pode alterar ou não
        configurable: false, // configuravel
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));// retorna um array com as propriedades do objeto que são inumeraveis

for (let chave in p1) {
    console.log(chave);
}
*/


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false,
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
    })
}
const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1));
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}