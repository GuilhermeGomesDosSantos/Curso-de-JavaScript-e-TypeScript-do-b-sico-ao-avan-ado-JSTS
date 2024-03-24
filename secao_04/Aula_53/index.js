// Um closure busca o valor de uma variável dentro do escopo léxico (ou escopo de definição) em que ela foi criada.

function retornaFuncao(nome) {
    
    // const nome = 'Guilherme';

    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('GDS');
const funcao2 = retornaFuncao('Santos');
// console.log(funcao);
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());