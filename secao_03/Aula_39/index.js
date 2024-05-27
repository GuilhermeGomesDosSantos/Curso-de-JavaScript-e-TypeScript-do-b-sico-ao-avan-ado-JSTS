let i = 0;
const nome = 'Guilherme'

/*
while (i <= 10) {
    console.log(i)
    i++;
}

console.log('Segue a vida...')
*/

/*
while (i < nome.length) {
    console.log(nome[i])
    i++;
}

console.log('Segue a vida')
*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    // return r;
    return Math.floor(r);
}

const min = 1;
const max = 50;

/*
let rand = random (min, max);

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand);
}
*/

let rand = 10;

// o significado de while significa enquanto, enquanto acontece algo faça çaguma coisa
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('---#######---')

do { // 1° faça a execução e depois verifique a expressão while
    // nesse caso irá aprecer valores por conta que a variavel let rand = 10, foi atualizada o seu valor
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);


