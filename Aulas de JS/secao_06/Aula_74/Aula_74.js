/*
Javascript ´r baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade protptype da função construtora que foi usada para cria-lo.
Quando tentamos acessar um membro de um objeto,
primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/
/*
// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Guilherme', 'O');// <- Pessoa = função construtora
const pessoa2 = new Pessoa('Susana', 'A.'); // <- Pessoa = Função construtotora
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);

*/

/*
você vai ver que o objeto data não possui nenhum atributo e nenhum elemento
o objeto vai buscar dentro do __proto__, o __proto__ está no pai do objeto
então todos os objetos irão utilizar a propriedade __proto__, e o __proto__  está no pai do objeto
ou seja todos os objetos vão utilizar a propriedade __proto__, que é uma propriedade só, que está em só um local
e não vai ser criada para todos os objetos

toda vez que cria um objeto vindo de uma função construtora, o JS já linka para você uma propriedade que chama prototype
Cada objeto em JavaScript tem uma referência interna para outro objeto chamado de prototype. Esse prototype é como um "modelo" a partir do qual o objeto herda propriedades e métodos.

*/

/*
Pessoa.prototype.estouAqui = 'HaHaHa' // o prototype já está na função construtora
// então todos os objetos que vieram da função contrutora irão receber esse método
//Quando você define uma função construtora, ela automaticamente tem uma propriedade chamada prototype.
console.log(Pessoa.prototype === pessoa1.__proto__);
*/


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL ' + this.nome + ' ' + this.sobrenome;

}

// instância
const pessoa1 = new Pessoa('Guilherme', 'O');// <- Pessoa = função construtora
const pessoa2 = new Pessoa('Susana', 'A.'); // <- Pessoa = Função construtotora
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__
// 1° vai olhar no corpo do obj, dentro do corpo do obj, function Pessoa(nome, sobrenome) {...}
// se não encontrar no corpo do objeto, irá procurar no pai do objeto que é o __proto__ (pessoa1.nomeCompleto())
// irão usar a referencia do pai, que é o prototipo (__proto__) que foi usado para criar elas

/*
aonde o motor do JS vai buscar os metodos e atributos primeiro
1° data -> 2°  Date.prototype -> 3° Object.prototype (pai)

1 - Data diretamente no objeto: Primeiro, ele verifica se o método ou atributo existe diretamente no objeto em questão.
Se encontrar, ele usa esse método ou atributo.
2 - Date.prototype: Se o método ou atributo não for encontrado diretamente no objeto, o motor JavaScript verifica se ele existe no protótipo do tipo de objeto.
Por exemplo, se estiver trabalhando com um objeto do tipo Date, ele procura no Date.prototype.
Se encontrar lá, ele usa esse método ou atributo.
3 - Object.prototype (pai): Se o método ou atributo ainda não for encontrado no protótipo específico do tipo de objeto,
o JavaScript verifica se existe no protótipo geral, que é o Object.prototype.
Isso é como um "último recurso" onde o motor JavaScript busca se não encontrar em nenhum outro lugar.
*/

// 1° pessoa1 --> 2° Pessoa.prototype --> 3° Object.prototype