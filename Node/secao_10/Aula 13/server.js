const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
// const meuMiddleware = require('./src/middleware/middleware');
const {middlewareGlobal, outroMiddleware} = require('./src/middleware/middleware');


app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
// app.set('views', './src/views');
// app.set('views', './src/views_');

app.set('view engine', 'ejs');

// Nossos proprios middlewares
// app.use(meuMiddleware);
app.use(middlewareGlobal);
// app.use(outroMiddleware);

app.use(routes);


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na portra 3000');
});