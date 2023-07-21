const express = require('express');
const { controller, players, remove, add } = require('./controladores/jogadores');
const app = express();

app.get('/jogadores', players);

app.get('/controlador', controller);

app.get('/remover', remove);

app.get('/adicionar', add);

app.listen(8000);