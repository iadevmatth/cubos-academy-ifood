const products = require('../dataBase/products');
const { getStateFromZipcode } = require('utils-playground');
const shippingPrices = require('../dataBase/businessRules');

// List all products
const listProducts = async (req, res) => {
  return res.status(200).json(products)
};
// Search a specific product
const searchProduct = async (req, res) => {
  const { id } = req.params;

  const isValidId = Number(id);

  if (!isValidId) {
    return res.status(400).json({ message: 'Invalid ID' })
  };

  const product = products.find((product) => {
    return product.id === Number(id)
  })

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  };

  return res.status(200).json(product)
};

const calcShipping = async (req, res) => {
  const { id, cep } = req.params;

  const isValidId = Number(id);

  if (!isValidId) {
    return res.status(400).json({ message: 'Invalid ID' })
  };

  const product = products.find((product) => {
    return product.id === Number(id)
  })

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  };

  const state = await getStateFromZipcode(cep);

  let shippValue = 0;

  if (shippingPrices.hasOwnProperty(state)) {
    shippValue = product.valor * shippingPrices[state];
  } else {
    shippValue = product.valor * shippingPrices.normalCalc
  }

  return res.json({
    product,
    state,
    frete: shippValue
  });
};


module.exports = {
  listProducts,
  searchProduct,
  calcShipping
};