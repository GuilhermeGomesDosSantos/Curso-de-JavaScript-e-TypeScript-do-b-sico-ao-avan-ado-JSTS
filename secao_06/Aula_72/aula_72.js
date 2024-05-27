/*
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {// é um metodo que irá retornar o valor, só pega e mostra o valor
            return estoquePrivado;
        },
        set: function(valor) {// modifica um valor
            // console.log(valor);
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(p1.estoque); 
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque)
*/

/*
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Bad value');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'O valor que eu quero';
// p1.estoque = 500;
console.log(p1.estoque);
*/

function criaProduto (nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            // nome = valor;
            nome = valor.replace('coisa', '');
        }
    };
}

const p2 = criaProduto('Camiseta');
console.log(p2.nome);
p2.nome = 'Qualquer coisa';
console.log(p2.nome);