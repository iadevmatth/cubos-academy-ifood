const express = require('express');
const app = express();

let seconds = 0;
let minutes = 0;
let counterOn = false;
let timeCounter; // Inicia com valor indefinido para que possa manipula-la nas funções abaixo.

// Faz a contagem do segundos e minutos
function statusStopwatch() {
  seconds++

  if (seconds >= 60) {
    seconds = 0;
    minutes++
  }

  if (minutes >= 60) {
    minutes = 0
  }
};

// Função para começar a contagem.
function startCounter() {
  if (!counterOn) {
    counterOn = true;
    timeCounter = setInterval(statusStopwatch, 1000) // Define valor inicial para o contador de tempo.
  };
};

// Pausa a contagem
function pauseCounter() {
  if (counterOn) {
    counterOn = false;
    clearInterval(timeCounter); // Interrompe o contador de tempo voltando ao seu valor original
  };
};

// Continua de onde a contagem parou
function continueCounter() {
  if (!counterOn) {
    counterOn = true;
    timeCounter = setInterval(statusStopwatch, 1000);
  };
};

function resetCounter() {
  counterOn = false;
  seconds = 0;
  minutes = 0;
}

app.get('/', (req, resp) => {
  resp.send(`Tempo atual do cronômetro: ${minutes} minutos e ${seconds} segundos`);
});

app.get('/iniciar', (req, resp) => {
  startCounter();
  resp.send("Cronômetro iniciado!");
});

app.get('/pausar', (req, resp) => {
  pauseCounter();
  resp.send("Cronômetro pausado!");
});

app.get('/continuar', (req, resp) => {
  continueCounter();
  resp.send("Cronômetro continuando!");
});

app.get('/zerar', (req, resp) => {
  resetCounter();
  resp.send("Cronômetro zerado!");
});


app.listen(8000, () => {
  console.log('Servidor inicializado na porta 8000')
});
