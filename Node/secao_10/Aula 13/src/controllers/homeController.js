// exports.paginaInicial = (req, res, next) => {
//     console.log('Respondendo ao cliente');
//         res.render('index');
//         console.log(`'paginaInicial' Olha o que tem na req.session.nome ${req.session.nome}`);
//         next();
// };

exports.paginaInicial = (req, res) => {
        res.render('index');
        return;
};


exports.trataPost = (req, res) => {
    // res.send('Ei, sou sua nova rota de POST.');
    res.send(req.body);
    return;
}