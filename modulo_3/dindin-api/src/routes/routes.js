const express = require('express');
const { registerUsers } = require('../controllers/users/users');
const routes = express();

routes.post('/users', registerUsers);


module.exports = routes;