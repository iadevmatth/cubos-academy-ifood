const bancodedados = require("../bancodedados/bancodedados");

const verificarSenha = (req, res, next) => {
  const senhaCorreta = bancodedados.banco.senha;
  const { senha_banco } = req.query;

  if (!senha_banco) {
    return res.status(400).json({ mensagem: 'Senha não fornecida.' });
  };

  if (senha_banco !== senhaCorreta) {
    return res.status(401).json({ mensagem: 'Senha incorreta' });
  };

  next();
};

// const validarSenha = (req, res, next) => {
//   const { senha } = req.body;

//   if (!senha || senha.trim() === '') {
//     return res.status(400).json({ mensagem: 'Senha não fornecida ou incorreta.' });
//   };

//   if (senha !== usuarioEncontrado.usuario.senha) {
//     return res.status(401).json({ mensagem: 'senha incorreta.' })
//   };

//   next();
// };

const emailExistente = (email) => {
  return bancodedados.contas.some((conta) => conta.usuario.email === email);
};

const cpfExistente = (cpf) => {
  return bancodedados.contas.some((conta) => conta.usuario.cpf === Number(cpf));
};

module.exports = {
  verificarSenha,
  emailExistente,
  cpfExistente,
};