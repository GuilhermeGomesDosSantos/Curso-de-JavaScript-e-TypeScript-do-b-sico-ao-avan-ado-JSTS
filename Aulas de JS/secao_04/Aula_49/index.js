function falaOi () {
    console.log('Oie');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function Expression
const souUmDado = function() {
// const souUmDado = function nomeDaFuncao() {
    console.log('Sou um dado.')
};
// souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar();