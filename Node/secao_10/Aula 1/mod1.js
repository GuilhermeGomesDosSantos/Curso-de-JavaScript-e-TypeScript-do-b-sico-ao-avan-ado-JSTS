/*
const nome = 'Guilherme';
const sobrenome = 'Gomes';

// const falaNome = () => {
//     console.log(nome, sobrenome);
// };


const falaNome = () => nome + ' ' + sobrenome;

// console.log(module);

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// console.log(module.exports);

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(exports);

// exports.NOME = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(exports);

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(exports);
*/

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

/*
module.exports.nome = 'Guilherme';
exports.Pessoa = Pessoa;
this.sobrenome = 'Qualquer coisa que eu quiser.'
*/

//SOBREESCREVER O OBJETO INTEIRO

const nome = 'Guilherme';
const sobrenome = 'Gomes';
module.exports = {
    nome, sobrenome, Pessoa 
};

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa';