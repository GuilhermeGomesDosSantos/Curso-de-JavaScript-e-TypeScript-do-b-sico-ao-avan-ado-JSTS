/*
const multiplicacao = require ('./mod');
console.log(multiplicacao(10, 5));
*/
/*
const n = require('./mod');
console.log(n);
*/
/*
const Cachorro = require('./B/C/D/mod');
const dog = new Cachorro('Dog');
dog.latir();
*/

// const Cachorro = require("./Z/mod2")

/*
const Cachorro = require("./Z/mod2");

// console.log(Cachorro);
const c1 = new Cachorro ('Dog')
c1.latir();

// pra frente ./B/aquivo.js
// precisa voltar ../arquivo.js ;  ../nomepasta/nomearquivo
*/

// console.log(__filename);
// console.log(__dirname);
// const path = require('path');
// console.log(path.resolve(__dirname));
// console.log(path.resolve(__dirname, '..', '..', '..', 'secao 4'));
// console.log(path.resolve(__dirname, '.', '.', '.', 'secao 4'));

const Cachorro = require ('./Z/mod2');

const c1 = new Cachorro('Dog');
c1.latir();