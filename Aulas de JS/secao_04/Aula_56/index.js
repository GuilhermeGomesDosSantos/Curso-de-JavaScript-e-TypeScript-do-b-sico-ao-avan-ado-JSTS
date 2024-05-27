/*
function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // fala : function (assunto) {
        fala (assunto) {
            return `${this.nome} está ${assunto}.`;
            // this referese ao objeto que está chamando a função
            // this referese ao objeto que esta chamando
        },
        altura: altura,
        peso: peso,
        imc () {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa ('Guilherme', 'Gomes', 1.80, 97);
console.log(p1.imc());

console.log(p1.fala('falando sobre JS'));
*/
// const p2 = criaPessoa ('Maria', 'Joaquina');
// console.log(p1);
// console.log(p2.fala('falando sobre JS'));

function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto (valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        // fala : function (assunto) {
        fala (assunto = 'falando sobre NADA.') {
            return `${this.nome} está ${assunto}.`;
            // this referese ao objeto que está chamando a função
            // this referese ao objeto que esta chamando
        },
        altura: altura,
        peso: peso,
        get imc () {// ao adicionar get, irá apenas obter o valor
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

// const p1 = criaPessoa ('Guilherme', 'Gomes', 1.80, 97);
// console.log(p1.fala('falando sobre JS'));
// console.log(p1.imc);
// p1.nomeCompleto = 'Guilherme Gomes dos Santos'
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());

const p1 = criaPessoa('Gui', 'Gomes', 1.7, 85);
const p2 = criaPessoa('Guilherme', 'Gomes', 1.8, 97);
const p3 = criaPessoa('GDS', 'Gomes', 1.5, 65);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);