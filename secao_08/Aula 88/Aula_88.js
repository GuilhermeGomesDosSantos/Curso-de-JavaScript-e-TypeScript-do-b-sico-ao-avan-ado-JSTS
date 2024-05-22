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
// apenas com Promise
esperaAI('Fase 1', rand(0, 3))
    .then(valor => {
        console.log(valor);
        return esperaAI('Fase 2', rand());
    })

    .then(fase => {
        console.log(fase);
        return esperaAI('Fase 3', rand());
    })

    .then(fase => {
        console.log('Terminamos na fase:',fase);
    })
    
    .catch(e => console.log(e));
*/

// async and await

/*
async function executa () {
    const fase1 = await esperaAI ('Fase 1', rand());
    console.log(fase1);
    const fase2 = await esperaAI ('Fase 2', rand());
    console.log(fase2);
    const fase3 = await esperaAI ('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase: ', fase3)
}

executa();
*/

/*
async function executa() {
    try {
        // Espera a conclusão da operação assíncrona 'esperaAI' e armazena o resultado em 'fase1'
        const fase1 = await esperaAI('Fase 1', rand());
        console.log(fase1); // Imprime o resultado de 'fase1'

        // Espera a conclusão da próxima operação assíncrona 'esperaAI' e armazena o resultado em 'fase2'
        const fase2 = await esperaAI('Fase 2', rand());
        console.log(fase2); // Imprime o resultado de 'fase2'

        // Espera a conclusão da próxima operação assíncrona 'esperaAI' e armazena o resultado em 'fase3'
        const fase3 = await esperaAI('Fase 3', rand());
        console.log(fase3); // Imprime o resultado de 'fase3'

        // o erro será capturado pelo bloco catch() e não executará console.log(fase4).
        const fase4 = await esperaAI('Fase 4', rand());
        console.log(fase4); // Imprime o catch(e);

        // Imprime uma mensagem final com o resultado de 'fase3'
        console.log('Terminamos na fase: ', fase3);
    } catch (e) {
        // Captura e imprime qualquer erro que ocorrer durante a execução das operações assíncronas
        console.log(e);
    }
}

// Chama a função assíncrona 'executa' para iniciar o processo
executa();
*/

async function executa() {
    try {
        const fase1 = esperaAI('Fase 1', 1000);
        console.log(fase1);

        setTimeout(function() {
            console.log('Essa Promise estava pendente', fase1)
        }, 1100);

        const fase2 = await esperaAI('Fase 2', rand());
        console.log(fase2); // Imprime o resultado de 'fase2'

        const fase3 = await esperaAI('Fase 3', rand());
        console.log(fase3); // Imprime o resultado de 'fase3'

        console.log('Terminamos na fase: ', fase3);
    } catch (e) {
        console.log(e);
    }
}

// executa();

//A função esperaAI retorna uma promessa imediatamente,
//mas a operação assíncrona dentro dela ainda não foi concluída.
// const teste2 = esperaAI('abc', 5000);
// console.log(teste2);


// OUTRO EXEMPLO

let minhaPromessa = new Promise((resolve, reject) => {
    // Operação assíncrona simulada
    // let sucesso = true;
    let sucesso = false;
  
    if (sucesso) {
      resolve("Operação bem-sucedida"); // Transição para o estado fulfilled
    } else {
      reject("Erro na operação"); // Transição para o estado rejected
    }
  });
  
  console.log(minhaPromessa); // Estado pending
  
  minhaPromessa
    .then((valor) => {
      console.log(valor); // Isso será executado se a promessa for cumprida
    })
    .catch((erro) => {
      console.error(erro); // Isso será executado se a promessa for rejeitada
    });

minhaPromessa
    .then((valor) => {
        console.log(valor)
    })

    .catch((erro) => {
        console.error(erro);
    });


/*
    1 - Estado Pending: Inicialmente, minhaPromessa está no estado pendente quando é criada.
    2 - Estado Fulfilled: Se a operação assíncrona é bem-sucedida (sucesso é true),
    a promessa é resolvida com resolve("Operação bem-sucedida"), mudando para o estado cumprido.
    3 - Estado Rejected: Se a operação assíncrona falha (sucesso é false),
    a promessa é rejeitada com reject("Erro na operação"), mudando para o estado rejeitado.

Os métodos then e catch são usados para tratar os valores ou erros resultantes quando a promessa muda para os estados cumprido ou rejeitado, respectivamente.

*/