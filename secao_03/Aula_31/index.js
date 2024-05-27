/*
const verdadeira = true;

//let tem escopo de bloco (... bloco)
// var só tem escopo de função

let nome = 'Gui' // criando
var nome2 = 'Gomes'

if (verdadeira) {
    let nome = 'Gomes' // criando
    // var nome2 = 'GOMES' // Redeclarando a variavel
    // console.log(nome, nome2);

    if (verdadeira) {
        // console.log('OK');
        var nome2 = 'GOMES' // Redeclarando a variavel
        let nome = 'Outra coisa';
        // console.log(nome, nome2); // tá usando a variavel dentro do bloco, se não tiver vai para o proximo blocou ou escopo global
    }
}

console.log(nome, nome2); // let vai usar a variavel do escopo global, e var vai usar o valor da ultima variavel que foi redeclarada em um determinado bloco
*/

const { norm } = require("@tensorflow/tfjs");


/*
// ESCOPO DE FUNÇÃO

const verdadeira = true;

// var sobrenome = 'Gomes'; // Pode ser usado dentro de uma função

function falaOi () {
    var sobrenome = 'Gomes';
    // var nome = 'Gui';

    // console.log(nome);
    // console.log(sobrenome);

    if (verdadeira) {
        let nome = 'Fulano'
        // console.log(sobrenome);
        console.log(nome);// não vai reconhecer a variavel nome porque não esta no bloco do if
    }

}
// console.log(nome);// vair dar erro, só pode ser usado dentro da função falaOi
falaOi();
*/


// hoisting
/*
var sobrenome;
console.log(sobrenome);

sobrenome = 'Gomes';
*/

console.log(sobrenome)
let sobrenome = 'Gomes';
