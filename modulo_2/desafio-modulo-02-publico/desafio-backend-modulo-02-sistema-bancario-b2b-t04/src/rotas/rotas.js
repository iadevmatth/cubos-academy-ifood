const express = require('express')
const controleTransacao = require('../controladores/controleTransacao')
const interTransacao = require('../intermediarios/interTransacao')
const rotas = express();

rotas.get('/contas', interTransacao.verificarSenha, controleTransacao.listarContas);

rotas.post('/contas', controleTransacao.criarContas);
rotas.put('/contas/:numeroConta/usuario', controleTransacao.atualizarContas);
rotas.delete('/contas/:numeroConta', controleTransacao.deletarContas);

rotas.post('/transacoes/depositar', controleTransacao.depositarValor);
rotas.post('/transacoes/sacar', controleTransacao.sacarValor);
rotas.post('/transacoes/transferir', controleTransacao.transferirValor);

rotas.get('/saldo/:numeroConta', controleTransacao.consultarSaldo);
rotas.get('/extrato/:numeroConta', controleTransacao.extratoConta);

module.exports = rotas