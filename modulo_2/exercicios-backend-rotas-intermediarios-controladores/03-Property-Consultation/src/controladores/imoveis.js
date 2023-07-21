const imoveis = require('../bancodedados')

const propertyList = (req, res) => {
  res.send(imoveis);
};

const getProperty = (req, res) => {
  const { id } = req.params;

  const foundProperty = imoveis.find((property) => {
    return property.id === Number(id);
  });

  res.send(foundProperty)
};

module.exports = { propertyList, getProperty }