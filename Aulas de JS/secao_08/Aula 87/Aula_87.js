/*
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERRO'));
        
        setTimeout(() => {
            // resolve(msg);
            resolve(msg.toUpperCase() + ' Passei na promise');
        }, tempo);
    });
}

// Cria um array de valores, incluindo strings e promises
const promises = [
    'Primeiro valor',
    esperaAI('Promise 1', 3000), // Promise que resolve após 3 segundos
    esperaAI('Promise 2', 5000), // Promise que resolve após 5 segundos
    esperaAI('Promise 3', 1000), // Promise que resolve após 1 segundo
    'Outro valor'
];

// Utiliza Promise.all para aguardar todas as promises do array serem resolvidas
Promise.all(promises)
    .then(function(valor) {
        // Se todas as promises resolverem com sucesso, exibe os valores resultantes
        console.log(valor);
    })
    .catch(function(erro) {
        // Se qualquer uma das promises for rejeitada, captura o erro e exibe
        console.log(erro);
    });
*/

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject("CAI NO ERRO");
                return;
            }
            
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

/*
// Cria um array de valores, incluindo strings e promises
const promises = [
    // 'Primeiro valor',
    esperaAI(1000, rand(1, 5)),
    esperaAI('Promise 1', rand(1, 5)), // Promise que resolve após 3 segundos
    esperaAI('Promise 2', rand(1, 5)), // Promise que resolve após 5 segundos
    esperaAI('Promise 3', rand(1, 5)), // Promise que resolve após 1 segundo
    // 'Outro valor'
];

// Utiliza Promise.race para aguardar a primeira promise a ser resolvida ou rejeitada
Promise.race(promises)
    .then(function(valor) {
        // Se a primeira promise resolver com sucesso, exibe o valor resultante
        console.log(valor);
    })
    .catch(function(erro) {
        // Se a primeira promise for rejeitada, captura o erro e exibe
        console.log(erro);
    });
*/
// Função que simula o download de uma página
function baixaPagina() {
    const emCache = true; // Flag para indicar se a página está em cache

    if (emCache) {
        // Se a página está em cache, rejeita a promise com uma mensagem
        // return Promise.reject('Pagina em cache');
        return Promise.resolve('Pagina em cache');
    } else {
        // Se a página não está em cache, chama a função esperaAI para simular o download
        return esperaAI('Baixei a página', 3000);
    }
}

// Chama a função baixaPagina e lida com o resultado ou erro
baixaPagina()
    .then(dadosPagina => {
        // Se a promise for resolvida, exibe os dados da página
        console.log(dadosPagina);
    })
    .catch(e => {
        // Se a promise for rejeitada, captura e exibe o erro
        console.log('ERRO', e);
    });
