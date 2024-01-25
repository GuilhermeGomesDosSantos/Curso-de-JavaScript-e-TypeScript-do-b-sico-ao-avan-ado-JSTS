/*
try {
    // é executada quando não há erros
} catch (e) {
    // é executado quando há erros
} finally {
    // sempre é executado
}
*/

/*
try {
    // console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou FINALLY.')
    }
} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
}
*/

/*
function retornaHora(data) {
    if (!(data instanceof Date)) { // instanceof, testa se um obejto tem, em seu prototype, a função construtora
        console.log('Não é');
    }
}

retornaHora();
retornaHora('ABC');
retornaHora(11);
retornaHora(new Date())
*/


function retornaHora(data) {
    if (data && !(data instanceof Date)) { // se a data for enviada e a data não é uma isntancia de date, é lançado o erro
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();
// const hora = retornaHora(11);
// const hora = retornaHora(data);
// const hora = retornaHora(data);
console.log(hora);

} catch (e) {
    console.log(e)
} finally {
    console.log('Tenha um bom dia')
}