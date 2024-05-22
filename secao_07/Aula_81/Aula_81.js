class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando...`)
    }

    comer() {
        console.log(`${this.nome} está comendo...`)
    }
}


function Pessoa2 (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p3 = new Pessoa2('Gui', 'Santos');
console.log(p3)

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Guilherme', 'Gomes');
const p2 = new Pessoa('GDS', 'Sla');
console.log(p1);