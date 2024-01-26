function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// console.log(mostraHora());

/*
function funcaoInterval() {
    console.log(mostraHora());
}
setInterval(funcaoInterval, 1000);// chama uma função em intervalos especificos
*/

/*
setInterval(function() {
    console.log(mostraHora());
}, 1000);
*/

/*
const timer = setInterval(function() { // chama uma função após um tempo determinado
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer); // para o tempo
}, 10000);
*/

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Óla mundo!');
}, 5000);