const { validarCampoObrigatorio, validarEmailexistente, validarEmailexistenteCadastrado } = require('../utilitarios/validacaoDeUsuario');
const usuarioRepositorio = require('../repositorios/repositorioDeUsuario');
const criptografarSenha = require('../utilitarios/senhaCryptografada');
// const bcrypt = require('bcrypt');
// const knex = require('../conexao');
// const jwt = require('jsonwebtoken');
// const senhaJwt = require('../senhaJwt')

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  const validarCampo = validarCampoObrigatorio(nome, email, senha);

  if (validarCampo) {
    return res.status(400).json({ mensagem: 'Preencher todos os campos.' });
  }

  // const verificarEmail = await validarEmailexistenteCadastrado(email);
  // if (verificarEmail) {
  //   return res.status(409).json({ mensagem: 'Email inválido.' });
  // }

  try {

    const senhaCriptografada = await criptografarSenha(senha);
    const dadosDoUsuario = { nome, email, senhaCriptografada };
    const { rows: usuariosCadastrados } = await usuarioRepositorio.cadastrarUsuario(dadosDoUsuario);

    return res.status(201).json(usuariosCadastrados);

  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
};

// const login = async (req, res) => {
//   const { email, senha } = req.body;

//   if (!email || !senha) {
//     return res.status(400).json({ mensagem: 'Email e senha são obrigatórios.' })
//   };

//   try {

//     const { rows, rowCount } = await pool.query(
//       'SELECT * FROM usuarios WHERE email = $1',
//       [email]
//     );

//     if (rowCount === 0) {
//       return res.status(400).json({ mensagem: 'Email ou senha inválido.' })
//     }

//     const { senha: senhaUsuario, ...usuario } = rows[0]

//     const senhaCorreta = await bcrypt.compare(senha, senhaUsuario)


//     if (!senhaCorreta) {
//       return res.status(400).json({ mensagem: 'Email ou senha inválido.' })
//     }

//     const token = jwt.sign({ id: usuario.id }, senhaJwt, { expiresIn: '8h' })

//     return res.json({
//       usuario,
//       token
//     });

//   } catch (error) {
//     return res.status(500).json({ mensagem: 'Erro interno no servidor.' })
//   }

// };

// const detalharUsuario = async (req, res) => {
//   const id = req.usuarioLogado;

//   const { rows: UsuariosEncontrados } = await usuarioRepositorio.detalharUsuario(id);
//   return res.status(200).json(UsuariosEncontrados[0]);
// };

// const atualizarUsuario = async (req, res) => {
//   const { nome, email, senha } = req.body;
//   const id = req.usuarioLogado;

//   const validarCampo = validarCampoObrigatorio(nome, email, senha);

//   if (validarCampo) {
//     return res.status(400).json({ mensagem: 'Preencher todos os campos.' });
//   };

//   const emailExistente = await validarEmailexistente(email, id);

//   if (!emailExistente) {
//     return res.status(403).json('Acesso não autorizado.');
//   };

//   const senhaCryptografada = await criptografarSenha(senha);
//   const { rows: atualizarUsuarioLogado } = await usuarioRepositorio.atualizarUsuario(id, nome, email, senhaCryptografada);

//   return res.json(atualizarUsuarioLogado[0]);
// };

module.exports = {
  cadastrarUsuario,
  // login,
  // atualizarUsuario,
  // detalharUsuario
};