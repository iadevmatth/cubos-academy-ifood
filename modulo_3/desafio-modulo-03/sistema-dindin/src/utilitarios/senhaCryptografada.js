const bcrypt = require('bcrypt');

const criptografarSenha = (senha) => {
    const criptografarSenhaDeUsuario = bcrypt.hash(senha, 10);
    return criptografarSenhaDeUsuario
}

module.exports = criptografarSenha;