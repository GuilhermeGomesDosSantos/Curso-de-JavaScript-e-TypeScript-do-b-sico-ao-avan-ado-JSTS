// let umaString = 'Um \"texto\"';
// let umaString = "Um \"texto\"";
// let umaString = "Um \texto";
// let umaString = "Um \\texto";
let umaString = "O rato roeu a roupa do rei de roma.";

/*
console.log(umaString[4]); // Está pegando apenas o valor da posição 4 que tem armazenado na string
console.log(umaString[8]); // Irá retornar indefinido porque não tem valor na posição 8
console.log(umaString[-1])
console.log(umaString.charAt(6)); // pega o elemento na posição informada, se colocar uma posição que não existe não vai retornar nada

console.log(umaString.concat(' em', ' um', ' lindo dia.')); // Está concatenando valores
console.log(umaString + ' em um lindo dia.'); // Outra forma de concatenar
console.log(`${umaString} em um lindo dia.`); // Outra forma de concatenar


console.log(umaString.indexOf('texto')); // serve para saber em qual indice a palavra começa, se não encontrar retorna -1
console.log(umaString.indexOf('Um', 3)); // pode pedir para buscar uma palavra a partir de um determinado index
console.log(umaString.indexOf('o', 3)); // pode pedir para buscar uma palavra a partir de um determinado index

console.log(umaString.lastIndexOf('o', 3)) // Começa no final da string
console.log(umaString.lastIndexOf('m', 3))


console.log(umaString.match(/[a-z]/g)) // retorna um array de expressões regulares
console.log(umaString.match(/[a-z]/))

console.log(umaString.search(/[a-z]/)); // Retorna o indice o que pediu foi encontrado
console.log(umaString.search(/[a-z]g/)); // Retorna o indice o que pediu foi encontrado
console.log(umaString.search(/x/)); // Retorna o indice da letra solicitada


console.log(umaString.replace('Um', 'Outra')) //Substituindo palavras
console.log(umaString.replace(/Um/, 'Outra')) //Substituindo palavras
console.log(umaString.replace(/r/, '#')) //Substituindo a letra r por #, apenas o primeiro
console.log(umaString.replace(/r/g, '#')) //com o g irá alterar em todos


console.log(umaString.length); // Retorna o tamanho exato da variavel



console.log(umaString.slice(2, 5)); // vai selecionar aonde começa e aonde termina
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3)); // nesse caso retorna os 3 ultimos indeces da variavel
console.log(umaString.slice(32)); // é a mesma coisa que determinar começar a partir do indice 32
console.log(umaString.slice(-5));
console.log(umaString.slice(-5, umaString.length - 1)); // O menos 1, siginifca não trazer o '.'
console.log(umaString.slice(-5,- 1));

console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // outra forma

console.log(umaString.split('r')); // vai criar um indice a partir de uma determinada letra
console.log(umaString.split(' ',1)); // determina quantos resultados retornem
console.log(umaString.split(' ', 2));
console.log(umaString.split(' ', 3));
console.log(umaString.split(' ', 4));
console.log(umaString.split(' ', 5));
console.log(umaString.split(' ', 6));
console.log(umaString.split(' ', 7));
console.log(umaString.split(' ', 8));
console.log(umaString.split(' ', 9));
*/

console.log(umaString.toUpperCase()); // Deixa todo o texto maiusculo
console.log(umaString.toLowerCase()); // Deixa todo o texto minusculo
