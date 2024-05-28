import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas  = document.querySelector('.chk-minusculas');
const chkNumero  = document.querySelector('.chk-numeros');
const chkSimbolos  = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    console.log('Olá Mundo');
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })

};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumero.checked,
        chkSimbolos.checked
    );

    return senha || "Nada Selecionado"
}