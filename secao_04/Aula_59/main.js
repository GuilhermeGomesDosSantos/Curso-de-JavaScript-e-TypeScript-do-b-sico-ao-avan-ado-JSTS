function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capituraCliques();
    };

    this.capituraCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-remove')) this.removeUm();
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-eq')) this.criaConta();
        })
    }

    this.criaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta Inválida');
                return;
            }
            this.display.value = String(conta);

        } catch (error) {
            alert('Conta Inválida');
            return;
        }
    }
    
    this.addNumDisplay = el => this.display.value += el.innerText;
    this.removeUm = () => this.display.value = this.display.value.slice(0, -1);
    this.clearDisplay = () => this.display.value = ''

}


const criaCalculadora = new Calculadora();
criaCalculadora.inicia();