//Istring i,utavel
// let nome = 'Guilherme'
// nome[0] = 'T';
// console.log(nome[0], nome)

// let a = 'A';
// let b = a; // COpiando o valor de A
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

/*
// Referência (mutável) - array, object, function
let a = [1, 2, 3];
// let b = a; // b e a estão apontando para o mesmo valor na memoria
let b = [...a]; // o valor de a foi copiado para b, o valor de b é totalmente idependente
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop()
console.log(a, b);
a.push('Gui');
console.log(a, c);
*/

const a = {
    nome: 'Guilherme',
    sobrenome: 'Gomes'
};
// const b = a;
const b = {...a};

a.nome = 'GDS'; // está apontando para o mesmo local na memooria
console.log(a);
console.log(b);