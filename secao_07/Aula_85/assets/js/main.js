class ValidaFormulario {
    constructor() {
        // Seleciona o formulário com a classe 'formulario'
        this.formulario = document.querySelector('.formulario');
        // Chama o método eventos para adicionar os ouvintes de eventos necessários
        this.eventos();
    }

    // Adiciona os eventos ao formulário
    eventos() {
        // Adiciona um ouvinte para o evento de 'submit' no formulário
        this.formulario.addEventListener('submit', e => {
            // Chama o método handleSubmit e passa o evento 'e' como parâmetro
            this.handleSubmit(e);
        });
    }

    // Método que é chamado quando o formulário é submetido
    handleSubmit(e) {
        // Previne o comportamento padrão de envio do formulário
        e.preventDefault();

        // Verifica se os campos são válidos
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();

        }

        // Aqui poderia haver alguma lógica adicional dependendo do resultado de camposValidos
        // this.camposSaoValidos();
        // console.log('Formulário não enviado');
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.')
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;

            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }
        return valid;
    }
    // Método que valida os campos do formulário
    camposSaoValidos() {
        let valid = true; // Variável para rastrear a validade dos campos

        // Remove todas as mensagens de erro existentes
        for (let erroText of this.formulario.querySelectorAll('.error-text')) {
            erroText.remove();
        }

        // Itera sobre todos os elementos do formulário com a classe 'validar'
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            // Obtém o texto do label associado ao campo
            const label = campo.previousElementSibling.innerText;

            // Se o campo estiver vazio, marca como inválido e cria uma mensagem de erro
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false; // Marca como inválido se houver erro
            }

            // Validação específica para campos com a classe 'cpf'
            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            // Validação específica para campos com a classe 'usuario'
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid; // Retorna true se todos os campos forem válidos, caso contrário false
    }

    // Método que valida o nome de usuário
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true; // Variável para rastrear a validade do usuário

        // Verifica se o nome de usuário tem entre 3 e 12 caracteres
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        // Verifica se o nome de usuário contém apenas letras e/ou números
        if (!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números');
            valid = false;
        }

        return valid; // Retorna true se o nome de usuário for válido, caso contrário false
    }

    // Método que valida o CPF
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value); // Cria uma nova instância da classe ValidaCPF

        // Verifica se o CPF é válido usando o método 'valida' da classe ValidaCPF
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true; // Retorna true se o CPF for válido, caso contrário false
    }
    // Método para criar e exibir uma mensagem de erro
    criaErro(campo, msg) {
        // Cria um novo elemento 'div' para a mensagem de erro
        const div = document.createElement('div');
        // Define o conteúdo da 'div' como a mensagem de erro
        div.innerHTML = msg;
        // Adiciona a classe 'error-text' à 'div' para estilização
        div.classList.add('error-text');
        // Insere a 'div' imediatamente após o campo com erro
        campo.insertAdjacentElement('afterend', div);
    }

}

// Cria uma nova instância da classe ValidaFormulario
const valida = new ValidaFormulario();
