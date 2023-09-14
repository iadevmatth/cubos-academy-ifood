const express = require("express");
const { cadastrarUsuario, detalharUsuario, login, atualizarUsuario } = require("../controladores/usuarios");
const logado = require("../intermediarios/logado");
const listarCategorias = require("../controladores/categorias");
const { cadastrarTransacao, listarTransacao, atualizarTransacao, detalharTransacao, excluirTransacao, transacaoExtrato } = require("../controladores/transacoes");
const rotas = express();

rotas.post('/usuarios', cadastrarUsuario);
// rotas.post('/login', login)

// rotas.use(logado);

// rotas.get('/usuarios', detalharUsuario);
// rotas.put('/usuarios', atualizarUsuario);
// rotas.get('/categorias', listarCategorias);
// rotas.post('/transacao', cadastrarTransacao);
// rotas.get('/transacao', listarTransacao);
// rotas.put('/transacao/:id', atualizarTransacao);
// rotas.get('/transacao/extrato', transacaoExtrato);
// rotas.get('/transacao/:id', detalharTransacao);
// rotas.delete('/transacao/:id', excluirTransacao);

module.exports = rotas;