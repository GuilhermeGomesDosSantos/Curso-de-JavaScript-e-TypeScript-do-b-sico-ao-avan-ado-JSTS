// Produto
// Camiseta = Cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {// agora o objeto Camiseta tem uma propriedade a mais que o produto
    Produto.call(this, nome, preco);
    this.cor = cor;
    /*
permite que você herde propriedades e comportamentos de outro objeto ou função construtora,
garantindo que o contexto (this) seja definido corretamente para o objeto atual.
    */
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Sobrescrever o Aumento
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca (nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque;
        },

        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}


Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);

caneca.estoque = 100;

camiseta.aumento(100)
console.log(caneca)
console.log(caneca.estoque)
console.log(camiseta)
console.log(produto)
