exports.paginaInicial = (req, res) => {
        res.send(`
        <form action = "/" method="POST">
        Nome do cliente: <input type="text" name="qualquerCoisa">
        Outro Campo: <input type="text" name="outroCampo">
        <button>Olá Mundo</button>
        </form>
        `);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.')
}