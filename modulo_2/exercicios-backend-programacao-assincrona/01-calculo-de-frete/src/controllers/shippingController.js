const products = require('../dataBase/products');
const shipping = require('../dataBase/businessRules');

// List all products
const listProducts = (req, res) => {
  return res.status(200).json(products)
};
// Search a specific product
const searchProduct = (req, res) => {
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


module.exports = {
  listProducts,
  searchProduct
};