const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// O foreach só itera sobre os valores

/*
a1.forEach(function(valor, indice, array) {
    // console.log(valor, indice, array);
    // console.log(array[indice]);
    console.log(valor);
});
*/

/*
a1.forEach(valor =>
    console.log(valor));
*/

// a1.forEach(valor => console.log(valor));

let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total)