/*
const express = require('express');
const app = express();

// http://facebook.profiles/12345
// http://facebook. campanha=googleads &
// http://facebook. nome_campanha=seila


app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá Mundo</button>
    </form>
    `);
});

// app.get('/testes/:idUsuarios', (req, res) => {
//     console.log(req.params);
//     res.send('Oi');
// })

// app.get('/testes/:idUsuarios', (req, res) => {
// app.get('/testes/:idUsuarios?', (req, res) => {
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    // res.send(req.params.idUsuarios);
    console.log(req.query);
    // res.send(req.params);
    res.send(req.query.facebookprofile);
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na portra 3000');
});

*/

const express = require('express');
const app = express();
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

// app.get('/', (req, res) => {
//     res.send(`
//     <form action = "/" method="POST">
//     Nome do cliente: <input type="text" name="nome">
//     <button>Olá Mundo</button>
//     </form>
//     `);
// });

app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method="POST">
    Nome do cliente: <input type="text" name="qualquerCoisa">
    Outro Campo: <input type="text" name="outroCampo">
    <button>Olá Mundo</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
})

app.post('/', (req, res) => {
    console.log(req.body);
    // res.send('Recebi o formulário');

    res.send(`O que você me enviou foi: ${req.body.qualquerCoisa}`);
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na portra 3000');
});