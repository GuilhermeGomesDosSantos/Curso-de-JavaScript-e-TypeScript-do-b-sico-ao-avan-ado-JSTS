// 705.484.450.720-03

/*
7x   0x  5x  4x  8x  4x  4x  5x  0x
10   8   8   7   6   5   4   3   2
70   0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0.


7x   0x  5x  4x  8x  4x  4x  5x  0x  5x
11   10  9   8   7   6   5   4   3   2
77   0   45  32  56  24  20  20  0   10 = 284

11 - (237 % 11) = 5 (Primeiro digito)
11 - (284 % 11) = 5 (Primeiro digito)
*/

// console.log(11 - (284 % 11))

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
// console.log(cpfLimpo);

cpfArray = Array.from(cpfLimpo);

// console.log(cpfArray.map(el => el));
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));