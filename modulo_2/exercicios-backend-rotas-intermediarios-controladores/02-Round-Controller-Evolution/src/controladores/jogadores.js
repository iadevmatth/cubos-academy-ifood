const jogadores = require('../bancodedados');


const players = (req, res) => {
  res.send(jogadores);
};

let counter = 0;

const controller = (req, res) => {
  if (counter >= jogadores.length) {
    counter = 0;
  }
  res.send(`É a vez de ${jogadores[counter]} jogar!`);
  counter++;
};

const remove = (req, res) => {
  const { index } = req.query;

  if (index >= 0 && index < jogadores.length) {
    jogadores.splice(index, 1)
    return res.send(jogadores)
  } else {
    return res.send(`Não existe jogador no índice informado ${index} para ser removido.`)
  }

};

const add = (req, res) => {
  const { name, index } = req.query;
  const nameFormated = name[0].toUpperCase() + name.slice(1).toLowerCase();

  if (index) {
    if (index < jogadores.length) {
      jogadores.splice(index, 0, nameFormated);
      return res.send(jogadores)
    } else {
      return res.send(`O índice informado ${index} não existe no array. Novo jogador não foi adicionado.`)
    }
  }
  jogadores.push(nameFormated)
  return res.send(jogadores)
};

module.exports = { controller, players, remove, add }