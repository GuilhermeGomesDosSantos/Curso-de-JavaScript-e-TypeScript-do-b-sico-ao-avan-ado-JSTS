/*
é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Basicamente,
uma promise é usada para lidar com operações que levam tempo para serem concluídas, como carregar dados de um servidor ou ler um arquivo.
*/

/*
function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI (msg, tempo) {
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}

esperaAI('Frase 1', rand(1, 3));
esperaAI('Frase 2', rand(1, 3));
esperaAI('Frase 3', rand(1, 3));
*/

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

/*
function esperaAI(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(msg);
    }, tempo);
})
}
*/

/*
esperaAI('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAI('Frase 2', rand(1, 3))
    }) // sempre que o resolve for chamado é o then que vai ser executado
    .then(resposta => {
        console.log(resposta)
    })
    .catch();
*/

/*
esperaAI('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAI('Frase 2', rand(1, 3));
    })

    .then(resposta => {
        return resposta + ' vaoi pro outro THEN';
    })

    .then(resposta => {
        return console.log(resposta);
    })
*/

/*
esperaAI('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAI('Frase 2', rand(1, 3));
    })

    .then(resposta => {
        console.log(resposta);
        return esperaAI('Frase 3', rand(1, 3));
    })

    .then(resposta => {
        return console.log(resposta);
    })

    .then(() => {
        console.log("Eu serei o último a ser exibido")
    })

    .catch();
*/


/*
esperaAI('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAI('Buscando dados de BASE', rand(1, 3));
    })

    .then(resposta => {
        console.log(resposta);
        return esperaAI('Tratando os dados da BASE', rand(1, 3));
    })

    .then(resposta => {
        return console.log(resposta);
    })

    .then(() => {
        console.log("Exibe dados na tela")
    })

    .catch();

console.log('Isso aqui será exibido antes de qualquer promisse.')
*/


// Função que retorna uma promise que resolve após um tempo especificado
function esperaAI(msg, tempo) {
    return new Promise((resolve, reject) => {
        // Verifica se a mensagem é uma string
        // Se não for uma string, rejeita a promise com um erro
        if (typeof msg !== 'string') reject(new Error('ERRO'));
        
        // Define um temporizador para simular uma operação assíncrona
        setTimeout(() => {
            // Resolve a promise com a mensagem após o tempo especificado
            resolve(msg);
        }, tempo);
    });
}

// Função auxiliar para gerar um número aleatório entre min e max (em segundos)
function rand(min, max) {
    // Converte o intervalo para milissegundos
    min *= 1000;
    max *= 1000;
    // Retorna um valor aleatório entre min e max
    return Math.floor(Math.random() * (max - min) + min);
}

// Encadeamento de promises para simular uma sequência de operações assíncronas
esperaAI('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        // Primeira operação: Conexão com o BD
        console.log(resposta);
        // Retorna uma nova promise para a próxima operação
        return esperaAI('Buscando dados de BASE', rand(1, 3));
    })
    .then(resposta => {
        // Segunda operação: Buscando dados de BASE
        console.log(resposta);
        // Retorna uma nova promise que será rejeitada, pois o valor não é uma string
        return esperaAI(22222, rand(1, 3));
    })
    .then(resposta => {
        // Esta linha não será executada porque a promise anterior será rejeitada
        console.log(resposta);
    })
    .then(() => {
        // Esta linha também não será executada devido à rejeição anterior
        console.log("Exibe dados na tela");
    })
    .catch(e => {
        // Captura qualquer erro ocorrido em qualquer ponto do encadeamento
        console.log('ERRO:', e);
    });

console.log('Isso aqui será exibido antes de qualquer promisse.');

// Mensagem exibida imediatamente, antes de qualquer promise ser resolvida ou rejeitada
