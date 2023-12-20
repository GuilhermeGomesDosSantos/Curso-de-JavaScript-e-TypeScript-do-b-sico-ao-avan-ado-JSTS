/*
// const array = [1, 2, 3];
let array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
array = 'Outra';
console.log(array);
*/

/*
const pessoa1 = {
    nome: 'Guilherme',
    sobrenome: 'Gomes',
    idade: 20
};
const pessoa2 = {
    nome: 'Fulano',
    sobrenome: 'Gomes',
    idade: 30
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

/*
function criaPessoa (nome, sobrenome, idade) { // Parametros
    return {
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Gui', 'Gomes', 20); // quando é enviado um valor para o parametro é chamado de argumento, é o valor que é passado para o parametro
const pessoa2 = criaPessoa('Fulano', 'Gomes', 25);
const pessoa3 = criaPessoa('Zézinho', 'Gomes', 60);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
*/

const pessoa1 = {
    nome: 'Gui',
    sobrenome: 'Gomes',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();