const nome = prompt('Digite o Seu nome completo: ');

document.body.innerHTML = `O seu nome é <strong>${nome}</strong><br/>` // </br> serve para quebra de linhas
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras<br/>`
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br/>`// charAt
document.body.innerHTML += `Qual o primeiro índice da letra 'l' no seu nome? <strong>${nome.indexOf('l')}</strong><br/>`
document.body.innerHTML += `Qual o último índice da letra 'r' no seu nome? <strong>${nome.lastIndexOf('r')}</strong><br/>`
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br/>`
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br/>`
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br/>`
document.body.innerHTML += `O seu nome é com letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong><br/>`
