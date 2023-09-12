const repositorioDeUsuario = require('../repositorios/repositorioDeUsuario');

const validarCampoObrigatorio = (nome, email, senha) => {
    if (!nome || !email || !senha) {
        return true;
    }
}

const validarEmailexistenteCadastrado = async (email) => {
    const { rows: encontrarUsuario } = await repositorioDeUsuario.encontrarUsuarioPeloEmail(email);
    if (encontrarUsuario.length > 0) {
        return true;
    }
    return false;
}

const validarEmailexistente = async (email, id) => {
    const { rows: encontrarUsuario } = await repositorioDeUsuario.encontrarUsuarioPeloEmail(email);
    if (encontrarUsuario.length === 0) {
        return true;
    }
    const emailEncontrado = encontrarUsuario.some((elemento) => elemento.id === id);
    return emailEncontrado;
}


module.exports = {
    validarCampoObrigatorio,
    validarEmailexistente,
    validarEmailexistenteCadastrado,
};