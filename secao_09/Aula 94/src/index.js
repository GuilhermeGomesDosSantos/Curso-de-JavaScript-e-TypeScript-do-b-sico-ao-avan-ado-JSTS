// import { nome as nome2, sobrenome as seila, idade, soma } from "./modulo_1";
// import { nome, sobrenome, idade, soma } from "./modulo_1";
// import { nome2, sobrenome, idade, soma } from "./modulo_1";
// import { nome2, sobrenome, idade, soma, Pessoa } from "./modulo_1";
// import { nome2, sobrenome, idade, soma, Pessoa as OutraCoisa} from "./modulo_1";

// import * as MeuModulo from './modulo_1';

// const nome = 'Fulano';

// console.log(nome, nome2, sobrenome, idade);
// console.log(nome, nome2, seila, idade);
// console.log(nome, sobrenome, idade);
// console.log(nome2, sobrenome, idade);
// console.log(soma(10, 5));

// const p1 = new Pessoa ('Guilherme', 'Gomes');
// console.log(p1);

// const p1 = new OutraCoisa ('Gui', 'GDS');
// console.log(p1);

// console.log(MeuModulo);

// importando apenas uma função padrão
// import soma from './modulo_1'
// console.log(soma(10, 7));

// import multiplica, {nome, sobrenome, idade, soma} from './modulo_1';
// console.log(multiplica(10, 7));
// console.log(nome, sobrenome, idade, soma(4, 10))

import Pessoa, {nome, sobrenome} from "./modulo_1";

const p1 = new Pessoa (nome, sobrenome);
console.log(p1);