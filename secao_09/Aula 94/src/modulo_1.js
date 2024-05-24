/*
const nome = 'Guilherme';
const sobrenome = 'Gomes';
const idade = 21

function soma (x, y) {
    return x + y;
}

// export {nome, sobrenome, idade, soma};
export {nome as nome2, sobrenome, idade, soma};
*/

/*
export const nome = 'Guilherme';
export const sobrenome = 'Gomes';
export const idade = 21;
const cpf = '123-456-789.00'

// function soma (x, y) {
//     return x + y;
// }

export default function soma (x, y) {
    return x + y;
}

export class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
*/

/*
const nome = 'Guilherme';
const sobrenome = 'Gomes';
const idade = 21;

function soma (x, y) {
    return x + y;
}

// tá determinando que a constante soma é default
// export { nome, sobrenome, idade, soma as default}


export default (x, y) => x * y;

export {nome, sobrenome, idade, soma};
*/

export const nome = 'Guilherme';
export const sobrenome = 'Gomes';
export const idade = 21;

export function soma (x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}