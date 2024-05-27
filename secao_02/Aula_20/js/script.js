/*
function meuEscopo () {
    // const form = document.querySelector('form') // Selecionando o formulario - nome da tag
    // const form = document.querySelector('#form') // Selecionando o formulario - pelo id
    const form = document.querySelector('.form') // Selecionando o formulario - pela classe

    form.onsubmit = function (evento) {
        evento.preventDefault(); // vai evitar por padrão o que iria acontecer, que no caso o envio do formulario
        alert('Slv');
        console.log('Foi enviado');
    };
}
meuEscopo();
*/

/*
function meuEscopo () {
    const form = document.querySelector('.form');

    let contador = 1;

    function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;

    }

    form.addEventListener('submit', recebeEventoForm); // escutar um evento

}
meuEscopo();
*/

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // console.log(nome, sobrenome, peso, altura);
        // console.log(nome.value, sobrenome.value, peso.value, altura.value); // pega os valores

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();