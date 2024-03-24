const nome = 'Guilherme';

function falaNome (nome) {
    // const nome = 'GDS';// como tem o a variavel nome, no escopo da função então vai retornar essa variavel
                        // caso contrario o JS, iria procurar no escopo vizinho o valor da variavel
    console.log (nome);
}

function usaFalaNome () {
    const nome = 'Santos';// a função continua lembrando aonde a variavel foi criada, então retorna Guilherme
    falaNome();
}
usaFalaNome();