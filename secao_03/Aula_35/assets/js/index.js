const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]; // desestruturação para extrair as propriedades tag e texto
    let newTagCreated = document.createElement(tag); // cria um tipo especifico de propriedade conforme o valor do objeto

    // newTagCreated.innerHTML = texto; // recebe o conteudo do objeto
    // newTagCreated.innerText = texto;

    let textoCriadoNo = document.createTextNode(texto);
    newTagCreated.appendChild(textoCriadoNo);
    div.appendChild(newTagCreated); // adiciona o novo elemento criado como filho do elemento div.
}

container.appendChild(div);