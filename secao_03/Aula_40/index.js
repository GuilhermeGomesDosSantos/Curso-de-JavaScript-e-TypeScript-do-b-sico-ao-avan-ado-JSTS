const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// "continue", continua para próxima iteração
// "break", sai do laço

/*
for (let numero of numeros) {

    if (numero === 2) {// vai pular o valor 2 e não vai ser mostrado
    // if (numero === 2 || numero === 5) {
        continue;
    }

    if (numero === 5) {
        continue;
    }
    console.log(numero);
}
*/

/*
for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Encontrei o número 7');
        break;
    }
}
*/

/*
for (let i in numeros) {
// for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Encontrei o número 7')
        break;
    }
}
*/

/*
let i = 0;

while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o Número 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Encontrei o Númrero 7');
        i++;
        break;
    }
    i++;
}
*/

let i = 0;

do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o valor 2');
        i ++;
        continue;
    }

    console.log (numero);
    if (numero === 7) {
        console.log('Encontrei o valor 7');
        i++;
        break;
    }
    i++;
} while (i < numeros.length);