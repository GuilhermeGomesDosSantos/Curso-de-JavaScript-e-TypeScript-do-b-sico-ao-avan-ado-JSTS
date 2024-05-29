/*
module.exports = (req, res, next) => {
    
    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Gomes', 'NÃO USE GOMES')
        console.log();
        // console.log('Passei no Middleware Global');
        console.log(`Vi que você postou ${req.body.cliente}`)
        console.log();
    }
    next();
}
*/

// module.exports = (req, res, next) => {
    
//     next();
// }

exports.middlewareGlobal = (req, res, next) => {
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware')
    next();
}