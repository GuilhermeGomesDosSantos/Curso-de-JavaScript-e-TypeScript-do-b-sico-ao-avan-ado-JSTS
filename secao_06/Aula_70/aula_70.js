/*
const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Gomes'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
// outra forma de acessar as chaves do objeto, é a notação de colchetes
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
// acessando a chave dinamicamente
const chave = 'nome';
const sobrenome = 'sobrenome';
console.log(pessoa[chave]);// tá acessando a pessoa chave, chave que armazena o nome da pessoa
console.log(pessoa[sobrenome]);
*/
/*
const pessoa1 = new Object(); // criando um novo objeto
pessoa1.nome = 'Guilherme';
pessoa1.sobrenome = 'Gomes';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

const pessoa2 = {
    nome: 'GDS',
    sobrenome: 'Gomes'
};

console.log(pessoa1, pessoa1);
*/

/*
const pessoa1 = new Object(); // criando um novo objeto
pessoa1.nome = 'Guilherme';
pessoa1.sobrenome = 'Gomes';
pessoa1.idade = 21;
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
// delete pessoa1.nome;
// console.log(pessoa1);
// pessoa1.falarNome();
// console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    // console.log(chave);// vai ver todas as chaves da pessoa1;
    console.log(pessoa1[chave]);
};
*/

/*
// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {// Factory function
    return {
        nome,
        sobrenome,
        get nomeCompleto() {// criando um metodo
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Guilherme', 'Gomes');
console.log(p1.nomeCompleto);
*/

/*
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Guilherme', 'Gomes');
// a palavra 'new' é criar um novo objeto e atrelar a palavra this dentro da função (Pessoa) ao objeto
// 
console.log(p1);

const p2 = {};
p2.nome = 'Guilherme';

// o this é usado para apontar qual instancia ele está apontando e cada um vai ter seu nome sobrenome e obj

console.log(p1); // resultado: Pessoa { nome: 'Guilherme', sobrenome: 'Gomes' }
// Pessoa representa o construtor do objeto, o construtor é a função que criou esse Objeto
const p3 = new Pessoa('Maria', 'Miranda')
console.log(p3);
*/

/*
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// p1 = (ENDERECOMEMORIA) -> 'Valor
// p1.ENDERECOMEMORIA = {nome: 'Outra coisa}
// p1 = (NOVOENDERECOMEMORIA...)}
// em p1 temos a referencia de memoria para o objeto
// quando altera o valor, não altera a referencia da memoria que é o que a constante persiste, e está alterando o valor em si
// p1 = 'Outra coisa'; // agora está alterando a referencia de p1 e não pode
// p1.nome = 'Outra coisa';// assim pode pois, dentro do objeto está sendo alterado um valor

const p1 = new Pessoa('Guilherme', 'Gomes');
p1.nome = 'Outra coisa'; // vai alterar normalmente pois, você está alterando um valor dentro da constante de p1 e não o valor de referencia de p1
// p1 = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);
*/

/*
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Guilherme', 'Gomes');
// Object.freeze(p1);
p1.nome = 'Outra coisa'

console.log(p1);
*/

/*
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this);// impede de altera os valores do objeto
}

const p1 = new Pessoa('Guilherme', 'Gomes');
p1.nome = 'Outra coisa'
p1.sobrenome = 'Qualquer coisa';
p1.fala = function() {console.log('Oi')};
p1.fala();
// console.log(p1);
*/

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);// impede de altera os valores do objeto
}

const p1 = new Pessoa('Guilherme', 'Gomes');
delete p1.nome;

const p2 = new Pessoa('Susana', 'Pauline');
console.log(p1);
console.log(p2);