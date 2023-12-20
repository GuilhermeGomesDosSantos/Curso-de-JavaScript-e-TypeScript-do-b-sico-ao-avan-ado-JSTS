/*
function saudacao (nome) {
    console.log('Bom dia! ' + nome);
    return 1234567;
}

// saudacao('Gui');
// saudacao('GDS');
// saudacao('Fulano');

const variavel = saudacao('Gui');
console.log(variavel);
*/


/*
function soma (x, y) {
    const resultado = x + y;
    console.log('Olá Mundo')
    return resultado;
    console.log('Olá mundo'); // não será mostrado
}

// console.log(soma (4, 7));
// console.log(soma (9, 2));
// console.log(soma (5, 17));
const resultado = soma (2, 2);
console.log(resultado);
*/

/*
function soma (x = 1, y = 5) {
    const resultado = x + y;
    return resultado;
}

// const resultado = soma(5); // vai dar NaN
// const resultado = soma(1, 64);
// const resultado = soma('Guilherme ', 'Gomes');
const resultado = soma(6);
console.log(resultado)
*/
/*
const raiz = function (n) { // função anonima
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

// const raiz = (n) => { // função anonima
//     return n ** 0.5;
// };
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));