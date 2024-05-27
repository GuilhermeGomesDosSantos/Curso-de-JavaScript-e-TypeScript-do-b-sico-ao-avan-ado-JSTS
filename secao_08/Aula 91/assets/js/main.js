/*
// Fazendo uma requisição para o arquivo 'pessoas.json'
fetch('pessoas.json')
    .then(resposta => resposta.json()) // Convertendo a resposta para JSON
    // .then(json => console.log(json)); // Comentar esta linha para não imprimir o JSON no console
    .then(json => carregaElementosNaPagina(json)); // Chama a função para carregar os elementos na página

// Função que cria e insere os elementos na página
function carregaElementosNaPagina(json) {
    // Cria uma tabela
    const table = document.createElement('table');

    // Itera sobre cada pessoa no JSON
    for (let pessoa of json) {
        // Cria uma linha para cada pessoa
        const tr = document.createElement('tr');
        
        // Cria a primeira célula com o nome da pessoa
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        // console.log(pessoa.nome); // Comentar esta linha para não imprimir o nome no console
        tr.appendChild(td1); // Adiciona a célula à linha

        // Cria a segunda célula com a idade da pessoa
        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2); // Adiciona a célula à linha

        // Cria a terceira célula com o salário da pessoa
        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3); // Adiciona a célula à linha

        // Adiciona a linha à tabela
        table.appendChild(tr);
    }

    // Seleciona o elemento com a classe 'resultado' e adiciona a tabela nele
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
*/
// Fazendo uma requisição para o arquivo 'pessoas.json' usando Axios
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data)); // Quando a resposta chegar, chama a função para carregar os elementos na página com os dados

// Função que cria e insere os elementos na página
function carregaElementosNaPagina(json) {
    // Cria uma tabela
    const table = document.createElement('table');

    // Itera sobre cada pessoa no JSON
    for (let pessoa of json) {
        // Cria uma linha para cada pessoa
        const tr = document.createElement('tr');
        
        // Cria a primeira célula com o nome da pessoa
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1); // Adiciona a célula à linha
        
        // Cria a segunda célula com a idade da pessoa
        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2); // Adiciona a célula à linha
        
        // Cria a terceira célula com o salário da pessoa
        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3); // Adiciona a célula à linha

        // Adiciona a linha à tabela
        table.appendChild(tr);
    }

    // Seleciona o elemento com a classe 'resultado' e adiciona a tabela nele
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
