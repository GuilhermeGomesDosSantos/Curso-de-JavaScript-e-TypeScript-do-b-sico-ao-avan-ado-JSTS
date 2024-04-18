// some todos os números (reduce)
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    console.log(acumulador); // depois que mostrar o 0 o resto será undefined
    // isso aconteceu porque precisa sempre retornar algum valor qualquer para cada iteração do laço
    return 0;
}, 0); // você pode determinar um valor inicial para o acumulador
*/

/*
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    console.log(acumulador, valor);
    return acumulador;
}, 0);
*/

/*
// some todos os números (reduce)
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0); // esse valor inicial (0 zero) ele é opcional, se não mandar o zero o primeiro valor será o do acumulador
console.log(total);
*/

/*
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    // retorne um array com os pares (filter)
    // if (valor % 2 == 0) {
    //     acumulador.push(valor);
    // }
    // return acumulador;


//    if (valor % 2 == 0) acumulador.push(valor);
//    if (valor % 2 !== 0) acumulador.push(valor); // retorna os impares
    if (valor % 8 === 0) acumulador.push(valor); // retorna apenas os valores multiplos de 8
    return acumulador
}, []);
console.log(total);
*/

/*
const total = numeros.reduce(function (acumulador, valor) {
    // retorne um array com o dobro dos valores (Map)
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(total);
*/

/*
const total = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) {
        acumulador += valor;
        // como não está sendo passado nenhum valor inicial, a conta do acumulador irá retornar errada
        // como o acumulador não recebeu valor inicial ele irá começar somando com 5 o valor e esta errado
        // o resultado deve ser 162 e não 167
        console.log(valor);
    }
    return acumulador;
});
console.log(total);
*/

/*
//FORMA CORRETA
const total = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0); // agora o valor inicial será zero
console.log(total);
*/

/*
const total = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 !== 0) acumulador += valor;
    return acumulador;
}, 0);
console.log(total);
*/


// Retorna a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Guilherme', idade: 47 },
];

/*
const maisVelha = pessoas.reduce(function (acumulador, valor) {
    // o acumulador é o objeto
    // a idade é uma propriedade do objeto
    // console.log(acumulador);
    console.log(acumulador, valor);
}, 0);
*/

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    // está verificando uma propriedade do objeto com outra propriedade do objeto
    // e tem que retornar o objeto e não a propriedade
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
    // no caso é, vai pegar o primeiro valor do acumulador, Luiz idade 62
    // ao retornar o acumulador, continua snedo o Luiz, por conta de ser maior sua idade do que de Maria idade 23
    // e o valor muda sempre, porque é o valor de uma nova idade que está sendo verificada
    // e quando a idade for maior do que o valor do acumulador, irá retorar o valor, e o acumulador irá passar a ser o valor e continuara verificando 

});
console.log(maisVelha);