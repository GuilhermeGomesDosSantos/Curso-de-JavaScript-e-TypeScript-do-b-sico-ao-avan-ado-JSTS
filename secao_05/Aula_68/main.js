// Retorne a soma do dobro de todos os pares
// - > Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2;
}).reduce(function(acumulador, valor) {
    acumulador += valor
    // return acumulador + valor;
    return acumulador;
});
*/

const numerosPares = numeros
    .filter(valor => valor% 2 === 0)
    .map(valor => valor * 2)
    // .reduce((acumulador , valor) => acumulador + valor);
    .reduce((acumulador, valor) => acumulador += valor)



// -> Filtrar pares, resultado:     [ 50,   80, 2,  8, 22 ]
// -> Dobrar os valores, resultado: [ 100, 160, 4, 16, 44 ]
// -> Reduzir (somar tudo), resultado: 324
console.log(numerosPares);