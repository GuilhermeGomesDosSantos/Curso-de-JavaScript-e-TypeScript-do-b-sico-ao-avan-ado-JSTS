/*
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
*/

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
    try {
        // Obtém o atributo 'href' do elemento clicado
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('ERRO 404!');
        const html = await response.text();

        carregaResultado(html);
    } catch (e) {
        console.log(e)
    }
}

// Função para carregar o resultado da resposta na página
function carregaResultado(response) {
    // Seleciona o elemento com a classe 'resultado'
    const resultado = document.querySelector('.resultado');
    // Define o HTML interno do elemento como a resposta da requisição
    resultado.innerHTML = response;
}


/*
// fetch('pagina_1.html')
// fetch('pagina_2.html')
// fetch('pagina_3.html')
fetch('pagina_4.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();

    })
    .then(html => console.log(html))
    // .catch(e => console.log(e));
    // .catch(e => console.warn(e));
    .catch(e => console.error(e));
*/