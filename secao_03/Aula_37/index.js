// For classico - Geralmente com iteráveis (arry ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (íteráveis, arrays ou strings)


// const nome = 'Guilherme Gomes';
const nome = ['Guilherme', 'GDS', 'Fulano'];


/*
// for tradicional
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
*/

// console.log('###');

/*


// for in, retorna o indice
for (let i in nome){
    console.log(nome[i]);
}
*/

// console.log('###');



// for of,  retorna somente o valor
/*
for (let valor of nome) {// lê cada indice e já vai retornando
    console.log(valor);
}
*/

// for of para objeto não funciona, não é iteravel, não é uma variavel que tem indice
const obj = {
    nome: 'Gui',
    sobrenome: 'Gomes',
    idade: 21
}

for (let valor of obj) {
    console.log(valor)
}