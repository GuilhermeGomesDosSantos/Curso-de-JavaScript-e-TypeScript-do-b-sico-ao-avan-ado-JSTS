

// const pontuacaoUsuario = 999;
const pontuacaoUsuario = 1000;

//                   (condição)    ? "Valor para verdadeiro"  :  "Valor para falso";
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário Normal";

const corUsuario = "Rosa";
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);
/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}
*/