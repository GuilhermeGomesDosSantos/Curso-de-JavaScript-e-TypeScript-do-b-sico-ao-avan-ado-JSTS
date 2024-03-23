/*function funcao() {
    console.log('Oie');
    console.log(arguments); // sustenta todos os argumentos enviados na chamada da função
    console.log(arguments[4])
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9);// não tem parametro adicionado na função, porem o JS não está nem ai e vai executar da mesma forma
*/

const { norm } = require("@tensorflow/tfjs");

/*
function funcao() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
*/

/*
function funcao(a, b, c) {// mesmo sendo adicionados 3 argumentos, a variavel arguments irá somar todos os valores
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total);
    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
*/

/*
function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);// o resto dos argumentos irão retornar por padrão undefined
*/

/*
function funcao (a, b) {
    console.log(a + b);
}
funcao(2);// como B não recebe nenhum valor, irá retornar NaN
*/

/*
function funcao(a, b = 2, c = 4) {// se b e c não receberem um valor na chamada da função por padrão b = 2 e c = 4
    // b = b || 0; se b for b então ele recebe o valor 0 por padrão
    console.log(a + b + c);
}
funcao(2, 10);
*/

/*
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20);// caso queira pular o valor de um argumento, a unica solução é colocar na posição do argumento undefined
*/

/*
//atribuição via desestruturação
function funcao (nome, sobrenome, idade) {
    console.log(nome, sobrenome, idade);
}
const pessoa = {nome: 'Guilherme', sobrenome: 'Gomes', idade: 21};
funcao(pessoa.nome, pessoa.sobrenome, pessoa.idade)
*/

/*
function funcao ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao(['Guilherme', 'Gomes', 21]);
*/

/*
function conta(operador, acumulador, ...numeros) {
    // o rest operator (...numeros) cria um array com os numeros
    // console.log(operador, acumulador, numeros);

    for (let numero of numeros) {
        acumulador += numero;
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);
*/

/*
function conta (operador, acumulador, ...numeros) {// o rest Operator sempre tem que ser o ultimo para pegar o resto dos valores do argumento

    for (let numero of numeros) {

        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
};
conta('-', 200, 20, 40, 10, 607);
conta('+', 0, 20, 40, 10, 607);
conta('*', 0, 20, 40, 10, 607);
conta('/', 3, 20, 40, 10, 607);
*/

/*
const conta = (operador, acumulador, ...numeros) => {
    console.log(arguments);// arguments, em ArowFunction, não funciona
    console.log(operador, acumulador, numeros)
};

conta('+', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
*/

const conta = (...args) => {//porem na ArrowFunction, pode usar o rest operator para retornar todos os argumentos
    console.log(args)
};
conta('+', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
