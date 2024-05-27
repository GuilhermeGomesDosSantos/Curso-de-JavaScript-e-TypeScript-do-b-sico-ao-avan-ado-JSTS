/*
function criaPessoa(nome, sobrenome) {
    // return {nome: nome, sobrenome: sobrenome};
    return {nome, sobrenome};
}
const p1 = criaPessoa('Guilherme', 'Gomes');
console.log(p1);
console.log(typeof p1);
*/

/*
function falaFrase (comeco) {
    function falaResto (resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

// const olaMundo = falaFrase('Olá');// olaMundo é uma função
// console.log(olaMundo('mundo!'));
const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);
*/


function criaMultiplicador (multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador (2);
const triplica = criaMultiplicador (3);
const quadriplica = criaMultiplicador (4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));