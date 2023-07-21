const somar = (req, resp) => {
  const { num1, num2 } = req.query;
  let resultado = Number(num1) + Number(num2);

  resp.send(`${resultado}`);
};

const subtrair = (req, resp) => {
  const { num1, num2 } = req.query;
  let resultado = Number(num1) - Number(num2);

  resp.send(`${resultado}`);

};

const multiplicar = (req, resp) => {
  const { num1, num2 } = req.query;
  let resultado = Number(num1) * Number(num2);

  resp.send(`${resultado}`);

};

const dividir = (req, resp) => {
  const { num1, num2 } = req.query;
  let resultado = Number(num1) / Number(num2);

  resp.send(`${resultado}`);

};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir
};