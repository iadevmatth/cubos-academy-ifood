const jsonwebtoken = require('jsonwebtoken');
const repositorioDeUsuario = require('../repositorios/repositorioDeUsuario');
const senhaJwt = require('../senhaJwt');

const logado = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ mensagem: 'Usuário não autorizado.' });
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        const { id } = jsonwebtoken.verify(token, senhaJwt);
        const { rowCount } = repositorioDeUsuario.encontrarUsuarioPeloId(id);

        if (rowCount === 0) {
            return res.status(401).json({ mensagem: 'Usuário invalido.' });
        }
        req.usuarioLogado = id;
        next();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = logado;