class ValidaCPF {
    // O construtor é chamado quando uma nova instância da classe é criada
    constructor (cpfEnviado) {
        // Define a propriedade 'cpfLimpo' removendo todos os caracteres não numéricos do CPF enviado
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false, // Não pode ser modificada
            enumerable: true, // Pode ser enumerada em loops
            configurable: false, // Não pode ser reconfigurada
            value: cpfEnviado.replace(/\D+/g, '') // O valor é o CPF sem caracteres não numéricos
        });
    }

    // Método para verificar se o CPF é uma sequência de números iguais
    isSequencia() {
        // Verifica se todos os caracteres do CPF são iguais ao primeiro caractere repetido 11 vezes
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;

        // return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    }

    // Método para gerar um novo CPF com os dígitos verificadores calculados
    geraNovoCpf() {
        // Remove os dois últimos dígitos do CPF
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        // Gera o primeiro dígito verificador
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        // Gera o segundo dígito verificador com base no primeiro dígito gerado
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        // Define o novo CPF com os dígitos verificadores calculados
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    // Método estático para gerar um dígito verificador
    static geraDigito(cpfSemDigitos) {
        let total = 0; // Inicializa o total
        let reverso = cpfSemDigitos.length + 1; // Define o valor reverso para multiplicação

        // Loop para cada caractere numérico do CPF
        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica); // Soma o produto do reverso e o número atual ao total
            reverso--; // Decrementa o reverso
        }

        // Calcula o dígito verificador com base no total
        const digito = 11 - (total % 11);
        // Retorna o dígito ou '0' se o dígito for maior que 9
        return digito <= 9 ? String(digito) : '0';
    }

    // Método para validar o CPF
    valida() {
        if (!this.cpfLimpo) return false; // Verifica se 'cpfLimpo' existe
        if (typeof this.cpfLimpo === 'undefined') return false; // Verifica se 'cpfLimpo' não é undefined
        if (typeof this.cpfLimpo !== 'string') return false; // Verifica se 'cpfLimpo' é uma string
        if (this.cpfLimpo.length !== 11) return false; // Verifica se 'cpfLimpo' tem 11 caracteres
        if (this.isSequencia()) return false; // Verifica se 'cpfLimpo' é uma sequência de números iguais
        this.geraNovoCpf(); // Gera um novo CPF com os dígitos verificadores calculados
        console.log(this.novoCPF); // Imprime o novo CPF gerado

        // Verifica se o novo CPF gerado é igual ao CPF limpo original
        return this.novoCPF === this.cpfLimpo;
    }
}

// // Cria uma nova instância da classe ValidaCPF com um CPF
// const cpf1 = new ValidaCPF('777.777.777-77');
// // Verifica se o CPF é válido e imprime a mensagem correspondente
// if (cpf1.valida()) {
//     console.log('CPF Válido');
// } else {
//     console.log('CPF inválido');
// }
