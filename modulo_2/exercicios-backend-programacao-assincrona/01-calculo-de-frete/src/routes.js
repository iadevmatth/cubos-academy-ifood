const express = require('express');
const shippingController = require('./controllers/shippingController');
const routes = express();

// Routes referring at an products
routes.get('/products', shippingController.listProducts);
routes.get('/products/:id', shippingController.searchProduct);

module.exports = routes