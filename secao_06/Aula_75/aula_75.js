// new Object -< Object.prototype
/*
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

// new Object -> Object.prototype
const objB ={
    chaveB: 'B'

    // __proto__: ObjA
};
*/

/*
// ficou: ObjB --> ObjA --> Object.prototype
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA)
*/

/*
const objC = new Object();
objC.chaveC = 'C';
*/

/*
// não vai retornar o valor porque não herdou de ObjC
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objA);
console.log(objC.chaveB)
*/
/*
// setPrototypeOf Define o protótipo de um objeto especificado o como objeto proto ou nulo.
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB)
console.log(objC.chaveA)
console.log(objC.chaveC)
*/

// NÃO É RECOMENDADO USAR O __PROTO__

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/ 100 ))
}

const p1 = new Produto('Camiseta', 20);
// p1.desconto(100);
p1.aumento(100)
console.log(p1);

// ----------------------------------//
/*
o p2, não tem as funções aumento e desconto
mas é possivel reaproveitar as funções do outro Objeto
*/
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

console.log(p2)

/*
const p3 = Object.create(Produto.prototype);
p3.aumento(10);// se não tiver nenhum valor adicionado antes da função irá retornar NaN

p3.preco = 113;
p3.aumento(10)
console.log(p3);
*/

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});


p3.aumento(10);
console.log(p3)