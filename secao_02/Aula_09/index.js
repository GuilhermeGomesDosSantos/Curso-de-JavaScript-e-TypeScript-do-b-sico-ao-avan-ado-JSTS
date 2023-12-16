const nome = 'Gui';
const nome1 = "Gui";
const nome2 = `Gui`;
const num1 = 10;
const num2 = 10.53;
let nomeAluno; // undefined --> não aponta para local nenhuma na memória
const sobrenomeALuno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = true; // Boolean = true, false (lógico)

console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);

let a = 2;
const b = a;
console.log(a,b);

a = 3;
console.log(a, b);