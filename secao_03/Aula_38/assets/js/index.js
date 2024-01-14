const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');


const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);
for (let p of ps) {
    // olha o exemplo do chat e tenta relembrar o do curso
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'blue'
}