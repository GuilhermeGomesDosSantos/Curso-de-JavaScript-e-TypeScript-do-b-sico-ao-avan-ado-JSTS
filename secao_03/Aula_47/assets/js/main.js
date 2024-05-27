/*
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


let segundos = 0;
let timer;


function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}


function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;

        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


iniciar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado')
    console.log('Inicirei timer')
    clearInterval();
    iniciaRelogio();
});


pausar.addEventListener('click', function (e) {
    console.log('Pausei timer')
    clearInterval(timer);
    relogio.classList.add('pausado')
});


zerar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
*/

/*
document.addEventListener('click', function(e) {
    console.log(e.target); // detecta aonde o usuário clicou
})
*/


function relogio () {

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');


let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
};

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;

        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

document.addEventListener('click', function (e) {
    const elemento = e.target;
    // console.log(elemento);

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    };

    if (elemento.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    }

    if (elemento.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
})
}
relogio();