/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorna true se a imagem estiver no modo paisagem
*/

/*
function ePaisagem (largura, altura) {
    // Number(largura, altura)

    if (largura > altura) {
        console.log(true);
    } else {
        console.log(false);
    }
}
ePaisagem(10, 5)
*/

// const ePaisagem = (l, a) => l > a ? true : false
// console.log(ePaisagem(100, 999))

const ePaisagem = (l, a) => l > a
console.log(ePaisagem(1100, 1000))
console.log(ePaisagem(1100, 2000))