// Escreva uma função que recebe 2 números e retorne o maior deles

/*
function numeroMaior (x = 0, y = 0) {
    if (x > y) {
        console.log(`O número ${x} é maior que ${y}`);
    } else {
        console.log(`O número ${y} é maior que ${x}`)
    }
}
numeroMaior(10, 5)
*/

const numeroMaior = (x = 0, y = 0) => x > y ? `${x} é maior que ${y}` : `${y} é maior que ${x}`
console.log(numeroMaior(10, 15))