const num = 10;

// if (num >= 0) {
//     console.log(`Sim, o número ${num} é maior ou igual a zero`)
// }

/*
if (num >= 0 && num <= 5) {
    console.log(`O número ${num} está entre 0 e 5`);
} else {
    console.log(`O número ${num} NÃO esté entre 0 e 5`)
}
*/

if (1 === 1) {
    console.log('LITERAL');
}

if (num <= 10) {
    console.log(`O número ${num} é menor ou igual a 10.`);
}

if (num >= 0 && num <= 5) {
    console.log(`O número ${num} está entre 0 e 5.`);
} else if (num >= 6 && num <= 8) {
    console.log(`O número ${num} está entre 6 e 8.`);
} else if (num >= 9 && num <= 11) {
    console.log(`O número ${num} está entre 9 e 11.`);
} else {
    console.log(`O número ${num} não está entre 0 e 11.`);
}

console.log('... Aqui vai o resto do código.');