// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa (nome, sobrenome) {
    // atributos privados, só podem ser acessados dentro do corpo do objeto
    const ID = 123456;

    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos, porque pode acessar fora da função
    this.nome = nome;// seria a mesma coisa que Pessoa.nome = 
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo')
    }
}

// A palavra new cria um novo objeto vazio, faz o 'this' apontar para o objeto que está sendo utilizado
// ex: p1, criou o objeto vazio, faz o this apontar para o objeto vazio, e retorna o objeto já para a variavel e não precisa usar o return
const p1 = new Pessoa('Guilherme', 'Gomes');
const p2 = new Pessoa('GDS', 'Santos');

p2.metodo();