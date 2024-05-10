// Factory Functions + Prototypes
/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        falar() {
            console.log(`${this.nome}, está falando`)
        },
        comer() {
            console.log(`${this.nome}, está comendo`)
        },
        beber() {
            console.log(`${this.nome}, está bebendo`)
        }
    };
}

const p1 = criaPessoa('Guilherme', 'Gomes')
console.log(p1);
*/


/*
// Esta função cria um objeto de pessoa com métodos para falar, comer e beber.
function criaPessoa(nome, sobrenome) {
    // Define o protótipo com métodos comuns para todas as pessoas.
    const pessoPrototype = {
        falar() {
            console.log(`${this.nome}, está falando`)
        },
        comer() {
            console.log(`${this.nome}, está comendo`)
        },
        beber() {
            console.log(`${this.nome}, está bebendo`)
        },
    };

// Cria um novo objeto que tem como protótipo o objeto pessoPrototype.
// Estabelece as propriedades 'nome' e 'sobrenome' no objeto criado,
// herdando os métodos definidos em pessoPrototype.
    const novaPessoa = Object.create(pessoPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });

    // Retorna o objeto criado.
    return novaPessoa;
}

// Cria uma nova pessoa com o nome 'Guilherme' e sobrenome 'Gomes'.
const p1 = criaPessoa('Guilherme', 'Gomes')
const p2 = criaPessoa('GDS', 'Teste')

// Imprime o objeto pessoa criado.
console.log(p1);
console.log(p2);
*/

/*
// Define um objeto contendo o método 'falar'.
const falar = {
    falar() {
        console.log(`${this.nome}, está falando`);
    },
};

// Define um objeto contendo o método 'comer'.
const comer = {
    comer() {
        console.log(`${this.nome}, está comendo`);
    },
};

// Define um objeto contendo o método 'beber'.
const beber = {
    beber() {
        console.log(`${this.nome}, está bebendo`);
    },
};

// Combina os objetos 'falar', 'comer' e 'beber' em um único objeto 'pessoaPrototype'.
const pessoaPrototype = { ...falar, ...comer, ...beber };

// Define uma função que cria um novo objeto com base em 'pessoaPrototype' e estabelece as propriedades 'nome' e 'sobrenome'.
function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

// Cria duas instâncias de pessoa.
const p1 = criaPessoa('Guilherme', 'Gomes');
const p2 = criaPessoa('GDS', 'Teste');

// Imprime os objetos pessoa criados.
console.log(p1);
console.log(p2);
*/


// Definição de um objeto 'falar' com um método 'falar', que imprime uma mensagem indicando que a pessoa está falando
const falar = {
    falar() {
        console.log(`${this.nome}, está falando`);
    },
};

// Definição de um objeto 'comer' com um método 'comer', que imprime uma mensagem indicando que a pessoa está comendo
const comer = {
    comer() {
        console.log(`${this.nome}, está comendo`);
    },
};

// Definição de um objeto 'beber' com um método 'beber', que imprime uma mensagem indicando que a pessoa está bebendo
const beber = {
    beber() {
        console.log(`${this.nome}, está bebendo`);
    },
};

// Criando um objeto 'pessoaPrototype' que combina as propriedades e métodos de 'falar', 'comer' e 'beber'
const pessoaPrototype = Object.assign({}, falar, comer, beber);
/*

O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de
um ou mais objetos de origem para um objeto destino.
Ele retorna o objeto destino.
*/

// Função 'criaPessoa' que cria e retorna um novo objeto pessoa com nome e sobrenome
function criaPessoa(nome, sobrenome) {
    // Utiliza Object.create() para criar um novo objeto com 'pessoaPrototype' como protótipo
    return Object.create(pessoaPrototype, {
        // Define as propriedades 'nome' e 'sobrenome' para o novo objeto criado
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

// Criando duas instâncias de pessoa com a função 'criaPessoa'
const p1 = criaPessoa('Guilherme', 'Gomes');
const p2 = criaPessoa('GDS', 'Teste');

// Exibindo os objetos criados
console.log(p1);
console.log(p2);
