// const data = new Date(0);
// const data = new Date();

const { min } = require("@tensorflow/tfjs");

// console.log(data);
// console.log(data.toString());
// const data = new Date(0 + tresHoras - umDia);

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * + 24 + 1000;
// const data = new Date (0 + tresHoras - umDia)

// const data = new Date(2024, 3, 20, 15, 27, 1000);
// const data = new Date(2024, 3, 20, 15);
// const data = new Date(2024, 3); // a, m, d, h, M, s, ms

// const data = new Date('2024-01-20T20:20:59.100')
// const data = new Date('2024-01-20 20:20:59.100');
/*
const data = new Date()

console.log(data.toString())

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getUTCFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milesegungo', data.getMilliseconds());
console.log('Dia da Semana', data.getDay());
// console.log(Date.now());
console.log(data.toString());
*/

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    // console.log(data)

    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
formataData(data);