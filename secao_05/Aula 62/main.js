/*
const nomes = ['Eduardo', 'Maria', 'Joana'];

nomes[2] = 'João'
console.log(nomes);
delete nomes[2]
console.log(nomes);

const nomes_array = new Array('Eduardo', 'Maria', 'Joana'); // cria um array da mesma forma que o primeiro
console.log(nomes_array);
*/

/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = nomes; // foi passado por referencia, então tudo que reflete em nomes reflete em novos e vice e versa
console.log(nomes);

nomes.pop();
console.log(nomes);
*/

/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes];
novo.pop();
console.log(nomes);
console.log(novo);
*/

/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes.length);

// const removido = nomes.pop();
// console.log(nomes, removido);
// const removido = nomes.shift(); // remove no começo do array e realoca os indices
// console.log(nomes, removido);
// nomes.push('João'); // metodo push adiciona no final do array
// nomes.push('GDS');
// nomes.unshift('João'); // o metodo unshift adiciona no comço do array e reordena os indices da lista
// nomes.unshift('GDS');
// console.log(nomes);
*/

/*
const nomes = ['Eduardo', 'Maria', 'Joana', 'João', 'GDS'];
// const novo = nomes.slice(1, 3); // fatia o array, vai determinar da onde começa e até onde vai
// const novo = nomes.slice(0, 3);
// const novo = nomes.slice(1, -1);
// console.log(novo)
*/

/*
// const nome = 'Guilherme Gomes dos Santos';
const nome = 'Guilherme,Gomes,dos,Santos';
// const nomes = nome.split(''); // pode converter uma String em um Array
const nomes = nome.split(',');
console.log(nomes);
*/

const nomes = [ 'Guilherme', 'Gomes', 'dos', 'Santos' ];
// const nome = nomes.join(' ');
const nome = nomes.join(', ');
console.log(nome);