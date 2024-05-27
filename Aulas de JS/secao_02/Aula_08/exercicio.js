/*
Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.95
Luiz Otávio nasceu em 1980
*/
const nome = 'Guilherme Gomes'
const sobrenome = 'Santos'
const idade = 20
const peso = 95
const alturaEmM = 1.80
let imc = peso / (alturaEmM * alturaEmM)//peso / (altura * altura)
let anoNascimento = 2023 - idade;

console.log(nome,sobrenome,`tem`,idade,`anos, pesa`,peso,`kg\ntem`,alturaEmM,`de altura`,
`e seu iMC é de`,imc,`\n`+ nome,sobrenome,anoNascimento);