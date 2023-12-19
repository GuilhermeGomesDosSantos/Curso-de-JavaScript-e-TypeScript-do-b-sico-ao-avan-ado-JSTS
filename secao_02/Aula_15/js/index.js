const num = Number (prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${num ** 0.5}</p>`;
texto.innerHTML += `<p>O número ${num} é inteiro: ${Number.isInteger(num)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`
texto.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(num)}</p>`
texto.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(num)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${(num.toFixed(2))}</p>`
