//               -5      -4        -3         -2        -1
//                0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nome.splice(indice, delete, eleme1, elem2, elem3);
// nome.splice(indice atual, delete, eleme1, elem2, elem3);

// const removidos = nomes.splice(4, 1); // remove igual o pop, porem retorna um array, pode remover mais de 1
// console.log(nomes, removidos);

// const removidos = nomes.splice(3, 2); // agora vai remover 2 indices, Gabriel e Júlia
// console.log(nomes, removidos);

// const removidos = nomes.splice(-2, 1); // remove apartir do indice -2, e quantos elementos deseja deletar (1)
// console.log(nomes, removidos);

// const removidos = nomes.splice(-2, 2);
// console.log(nomes, removidos);

// const removidos = nomes.splice(-2, Number.MAX_VALUE); // vai do indice -2, até o maior numero que pode existir em JS
// console.log(nomes, removidos);
// console.log(Number.MAX_VALUE);

// const removidos = nomes.splice(-2, 0);
// console.log(nomes, removidos);

// const removidos = nomes.splice(3, 0, 'Luiz'); // vai adicionar o elemento Luiz no indice 3, e jogar o elemento Gabriel para o indice 4
// console.log(nomes, removidos);

// const removidos = nomes.splice(3, 2, 'Luiz');
// console.log(nomes, removidos);

// const removidos = nomes.splice(-1, 1); // simulando o metodo pop()
// console.log(nomes, removidos);

// const removidos = nomes.splice(0, 1); // Simulando o metodo shift()
// console.log(nomes, removidos);

// nomes.splice(nomes.length, 0, 'Luiz'); // Simulando o metodo push()
// console.log(nomes);

// nomes.splice(nomes.length, 0, 'GDS', 'Guilherme', 'Gomes'); // Simulando o metodo push()
// console.log(nomes);

// nomes.splice(0, 0, 'GDS', 'Guilherme', 'Gomes'); // simulando o unshift
// console.log(nomes);

nomes.splice(2, 0, 'GDS', 'Guilherme', 'Gomes');
console.log(nomes);

