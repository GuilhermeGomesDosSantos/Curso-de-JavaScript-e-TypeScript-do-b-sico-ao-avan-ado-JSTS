/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

false -> 0, '', "", null, undifined, NaN

FALSY -> finge ser valores falso
*/

// console.log('Gui' && 0 && 'GDS') // Retorna o valor falso encontrado
// console.log('Gui' && true && 'GDS') // se não tiver valor falso retorna o ultimo valor verdadeiro
// console.log('Gui' && true && NaN) // retorna expressão falsa encontrada

// console.log('Gui' && '' && 'GDS');
// console.log('Gui' && undefined && 'GDS');
// console.log('Gui' && null && 'GDS');

// function falaOi () {
//     return 'Oi';
// }

// const vaiExecutar = false;
// let vaiExecutar;
// const vaiExecutar = undefined;
// const vaiExecutar = 'Gui';

// console.log(vaiExecutar && falaOi ());




// console.log(0 || false || null || 'GDS' || true); // pegou o primeiro valor encontrado
// const corUsuario = null;

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'petro'
// console.log(corPadrao);
/*
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
*/

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || 'Gui' || c || d || e);

