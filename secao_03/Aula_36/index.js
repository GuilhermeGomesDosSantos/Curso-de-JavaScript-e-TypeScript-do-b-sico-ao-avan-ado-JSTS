// O "for in" lê os indices ou chaves do objeto

//                0       1      2        3         4
const frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Manga'];

// exemplo com indice
/*
for (let i in frutas) { // está lendo os indices do array
    console.log(i);
}
*/

/*
for (let indice in frutas) {
    console.log(frutas[indice]);
}
*/

// exemplo com chaves
const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Gomes',
    idade: 21
};

/*
for (let i in pessoa) {// está lendo somente as chaves
    console.log(i);
}
*/

/*
for (let chaves in pessoa) {// vai pegar dentro do objeto o valor dessa chave
    console.log(pessoa[chaves])
}
*/

for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves]);
}
