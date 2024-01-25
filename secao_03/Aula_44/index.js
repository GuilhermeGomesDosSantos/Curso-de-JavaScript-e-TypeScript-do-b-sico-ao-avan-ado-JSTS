/*
try{
console.log(naoExisto);
} catch (err) {
    console.log('nãoExisto não existe.');
    console.log(err);
}
*/

/*
function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.');
    }
    return x + y;
}
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // throw new Error('x e y precisam ser números.');
        throw new ReferenceError('x e y precisam ser números.');
    }

    return x + y;

}
try {
    console.log(soma(2, 6));
    console.log(soma(2, '6'));
} catch (error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável pro usuário');
}