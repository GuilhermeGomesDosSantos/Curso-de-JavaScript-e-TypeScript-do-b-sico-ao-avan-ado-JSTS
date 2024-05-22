/*
// Função que faz uma requisição AJAX
const request = obj => {
    // Cria uma nova instância de XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Configura a requisição com o método e URL fornecidos
    xhr.open(obj.method, obj.url, true);
    // Envia a requisição
    xhr.send();

    // Adiciona um evento para ser disparado quando a resposta da requisição for carregada
    xhr.addEventListener('load', () => {
        // Verifica se o status da resposta está entre 200 e 299 (sucesso)
        if (xhr.status >= 200 && xhr.status < 300) {
            // Chama a função de sucesso passando a resposta da requisição
            obj.succes(xhr.responseText);
        } else {
            // Chama a função de erro passando o texto do status e o código do status
            obj.error(xhr.statusText, xhr.status);
        }
    });
};

// Adiciona um evento para ser disparado quando um clique ocorre no documento
document.addEventListener('click', e => {
    // Obtém o elemento que foi clicado
    const el = e.target;
    // Obtém o nome da tag do elemento em letras minúsculas
    const tag = el.tagName.toLowerCase();

    // Verifica se a tag do elemento é 'a' (link)
    if (tag === 'a') {
        // Previne o comportamento padrão do link (navegação)
        e.preventDefault();
        // Chama a função para carregar a página passando o elemento clicado
        carregaPagina(el);
    }
});

// Função para carregar a página com base no link clicado
function carregaPagina(el) {
    // Obtém o atributo 'href' do elemento clicado
    const href = el.getAttribute('href');

    // Exibe o href no console
    console.log(href);

    // Cria um objeto de configuração para a requisição
    const objConfig = {
        method: 'GET', // Método da requisição
        url: href, // URL da requisição
        // Função de sucesso a ser chamada quando a requisição for bem-sucedida
        succes(response) {
            carregaResultado(response);
        },
        // Função de erro a ser chamada quando a requisição falhar
        error(errorText) {
            console.log(errorText);
        }
    };
    // Faz a requisição passando o objeto de configuração
    request(objConfig);
}

// Função para carregar o resultado da resposta na página
function carregaResultado(response) {
    // Seleciona o elemento com a classe 'resultado'
    const resultado = document.querySelector('.resultado');
    // Define o HTML interno do elemento como a resposta da requisição
    resultado.innerHTML = response;
}
*/

// Função que faz uma requisição AJAX e retorna uma Promise
const request = obj => {
    return new Promise((resolve, reject) => {
        // Cria uma nova instância de XMLHttpRequest
        const xhr = new XMLHttpRequest();
        // Configura a requisição com o método e URL fornecidos
        xhr.open(obj.method, obj.url, true);
        // Envia a requisição
        xhr.send();

        // Adiciona um evento para ser disparado quando a resposta da requisição for carregada
        xhr.addEventListener('load', () => {
            // Verifica se o status da resposta está entre 200 e 299 (sucesso)
            if (xhr.status >= 200 && xhr.status < 300) {
                // Resolve a Promise passando a resposta da requisição
                resolve(xhr.responseText);
            } else {
                // Rejeita a Promise passando o texto do status e o código do status
                reject(xhr.statusText, xhr.status);
            }
        });
    });
};

// Adiciona um evento para ser disparado quando um clique ocorre no documento
document.addEventListener('click', e => {
    // Obtém o elemento que foi clicado
    const el = e.target;
    // Obtém o nome da tag do elemento em letras minúsculas
    const tag = el.tagName.toLowerCase();

    // Verifica se a tag do elemento é 'a' (link)
    if (tag === 'a') {
        // Previne o comportamento padrão do link (navegação)
        e.preventDefault();
        // Chama a função para carregar a página passando o elemento clicado
        carregaPagina(el);
    }
});

// Função assíncrona para carregar a página com base no link clicado
async function carregaPagina(el) {
    // Obtém o atributo 'href' do elemento clicado
    const href = el.getAttribute('href');

    // Exibe o href no console
    console.log(href);

    // Cria um objeto de configuração para a requisição
    const objConfig = {
        method: 'GET', // Método da requisição
        url: href, // URL da requisição
    };

    try {
        // Aguarda a resposta da requisição
        const response = await request(objConfig);
        // Chama a função para carregar o resultado na página com a resposta
        carregaResultado(response);
    } catch (e) {
        // Exibe o erro no console em caso de falha na requisição
        console.log(e);
    }
}

// Função para carregar o resultado da resposta na página
function carregaResultado(response) {
    // Seleciona o elemento com a classe 'resultado'
    const resultado = document.querySelector('.resultado');
    // Define o HTML interno do elemento como a resposta da requisição
    resultado.innerHTML = response;
}
