const express = require('express');
const lodash = require('lodash');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let contador = 0;

app.get('/', (requisicao, resposta) => {
  if (contador >= jogadores.length) {
    contador = 0;
  }
  resposta.send(`É a sua vez ${jogadores[contador]}`);
  contador++
});



app.listen(3000, () => {
  console.log('Servidor inicializado na porta 3000')
});