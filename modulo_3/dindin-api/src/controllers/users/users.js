const { validField } = require('../utils/users/utilsUsers')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUsers = async (req, res) => {
  const { nome, email, senha } = req.body;

  const fields = {
    nome,
    email,
    senha
  };

  validField(req, res, fields)


};

module.exports = { registerUsers }