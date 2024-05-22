/*
Um Symbol é um valor único e imutável que pode ser usado como chave para propriedades de objetos.
Uma das características mais importantes dos Symbols é que eles são únicos.
Cada Symbol é diferente de todos os outros Symbols, mesmo que sejam criados com o mesmo nome.
Isso os torna úteis para criar propriedades de objetos que não entram em conflito com outras propriedades.
*/

/*
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    set velocidade(valor) {
        console.log('SETTER')
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// O Carro não vai passar da velocidade 100
// for (let i = 0; i <= 100; i++) {
//     c1.acelerar();
// }
// c1.acelerar();
// c1.acelerar();

// c1.velocidade = 99;
// c1.velocidade = -1;
// c1.velocidade = 'afas';
// c1.velocidade = 1500;// porem se alguem declarar a variavel com algum valor irá aparecer
c1.velocidade = 99; // chamando o set
console.log(c1.velocidade); // vai retornar 100, por conta do get
*/

class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // nomeCompleto() {
    //     return this.nome + ' ' + this.sobrenome;
    // }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto (valor) {
        valor = valor.split(' ')
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

}

const p1 = new Pessoa('Gui', 'Gomes');
p1.nomeCompleto = 'Guilherme Gomes dos Santos'
// console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);