// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    // console.log(1234567890);

    const sobrenome = 'Gomes';

    function criaNome(nome) {
    return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Gui'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(21, 97, 1.81);

