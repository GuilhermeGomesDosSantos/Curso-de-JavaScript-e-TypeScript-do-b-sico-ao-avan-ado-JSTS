// Superclasse Conta
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Adicionando método sacar à superclasse Conta
Conta.prototype.sacar = function(valor) {
    // Verifica se há saldo suficiente
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    
    // Deduz o valor do saldo
    this.saldo -= valor;
    this.verSaldo();
};

// Adicionando método depositar à superclasse Conta
Conta.prototype.depositar = function (valor) {
    // Incrementa o valor ao saldo
    this.saldo += valor;
    this.verSaldo();
};

// Adicionando método verSaldo à superclasse Conta
Conta.prototype.verSaldo = function() {
    // Exibe informações da conta
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

/*
const conta1 = new Conta(11, 22, 10);
console.log(conta1);

//Deposistando...
conta1.depoisitar(11)
conta1.depoisitar(10)

//Sacando...
conta1.sacar(31);
conta1.sacar(0.01);
*/

// Superclasse Conta
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Adicionando método sacar à superclasse Conta
Conta.prototype.sacar = function(valor) {
    // Verifica se há saldo suficiente
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    
    // Deduz o valor do saldo
    this.saldo -= valor;
    this.verSaldo();
};

// Adicionando método depositar à superclasse Conta
Conta.prototype.depositar = function (valor) {
    // Incrementa o valor ao saldo
    this.saldo += valor;
    this.verSaldo();
};

// Adicionando método verSaldo à superclasse Conta
Conta.prototype.verSaldo = function() {
    // Exibe informações da conta
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

/*
const cc = new CC(11, 22, 0, 100);
console.log(cc);
cc.depoisitar(10);
cc.sacar(110);
cc.sacar(1)
*/

// Subclasse CP (Conta Poupança)
function CP(agencia, conta, saldo) {
    // Herda propriedades da superclasse Conta
    Conta.call(this, agencia, conta, saldo);
}

// Estabelece a herança do protótipo de CP a partir de Conta
CP.prototype = Object.create(Conta.prototype);

// Define o construtor da subclasse CP
CP.prototype.constructor = CP;

// Criando uma instância de CP (Conta Poupança)
const cp = new CP(12, 33, 0);

// Realizando operações na instância cp
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);