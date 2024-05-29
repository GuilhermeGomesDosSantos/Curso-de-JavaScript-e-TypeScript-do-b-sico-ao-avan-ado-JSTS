/*
const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

// fs.writeFile(caminhoArquivo, 'Frase1', {flag: 'w', encoding: 'utf-8'});
// fs.writeFile(caminhoArquivo, 'Frase1', {flag: 'a', encoding: 'utf-8'});
// fs.writeFile(caminhoArquivo, 'Frase1\n', {flag: 'a', encoding: 'utf-8'});
*/
/*
const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

const pessoas = [
    {nome: 'Fulano 1'},
    {nome: 'Fulano 2'},
    {nome: 'Fulano 3'},
    {nome: 'Fulano 4'}
];

const json = JSON.stringify(pessoas, '', 2);

// fs.writeFile(caminhoArquivo, json, {flag: 'a'});
fs.writeFile(caminhoArquivo, json, {flag: 'w'});
*/

const fs = require('fs');

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'})
};