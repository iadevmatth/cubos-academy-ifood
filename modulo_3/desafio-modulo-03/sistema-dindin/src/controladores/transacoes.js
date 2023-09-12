const utilitariosDeTransacao = require('../utilitarios/validacaoDeTransacao');
const repositorioDeTransacao = require('../repositorios/repositorioDeTransacao');

const cadastrarTransacao = async (req, res) => {
  const { descricao, valor, categoria_id, tipo } = req.body;
  const id = req.usuarioLogado;

  let data = new Date().toJSON();

  const validarCampo = utilitariosDeTransacao.validarCampoTransacaoObrigatorio(descricao, valor, categoria_id, tipo);

  if (validarCampo) {
    return res.status(400).json({ mensagem: 'Preencher todos os campos.' });
  };

  const existeCategoria = await utilitariosDeTransacao.validarCategoriaPeloId(id);

  if (!existeCategoria) {
    return res.json({ mensagem: 'A categoria não existe.' });
  };

  const validarTipoEnviado = await utilitariosDeTransacao.validarTipo(tipo);

  if (validarTipoEnviado) {
    return res.status(400).json({ mensagem: 'Tipo inválido.' });
  };


  try {
    const { rows: transacaoDetalhada } = await repositorioDeTransacao.transacaoCadastrada(
      tipo, descricao, valor, data, id, categoria_id
    );

    return res.status(201).json(transacaoDetalhada[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
};

const listarTransacao = async (req, res) => {
  const id = req.usuarioLogado;

  try {
    const { rows: listarTransacao } = await repositorioDeTransacao.listarTransacao(id);
    return res.status(200).json(listarTransacao);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

const atualizarTransacao = async (req, res) => {
  const idTransacao = req.params.id;
  const { descricao, valor, categoria_id, tipo } = req.body;
  const idUsuarioLogado = req.usuarioLogado;

  let data = new Date().toISOString().split('T')[0] + " " + new Date().toLocaleTimeString();

  const existeTransacao = await utilitariosDeTransacao.validarTransacaoExistente(idTransacao);

  if (existeTransacao) {
    return res.status(404).json({ mensagem: 'Transacão não encontrada.' })
  };

  const validarCampo = utilitariosDeTransacao.validarCampoTransacaoObrigatorio(descricao, valor, categoria_id, tipo);
  if (validarCampo) {
    return res.status(400).json({ mensagem: 'Preencher todos os campos.' });
  };

  const existeCategoria = await utilitariosDeTransacao.categoriaExistente(categoria_id);

  if (existeCategoria) {
    return res.json({ mensagem: 'A categoria não existe.' });
  };

  const validarTipoEnviado = await utilitariosDeTransacao.validarTipo(tipo);

  if (validarTipoEnviado) {
    return res.status(400).json({ mensagem: 'Tipo inválido.' });
  };

  try {

    const { rowCount } = await repositorioDeTransacao.atualizarTransacao(descricao, valor, data, categoria_id, tipo, idTransacao, idUsuarioLogado);

    if (rowCount === 0) {
      return res.status(404).json({ mensagem: 'Transação não pode ser atualizada.' });
    };
    return res.status(204).json();

  } catch (error) {

    return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
};

const detalharTransacao = async (req, res) => {
  const idTransacao = req.params.id;
  const usuarioId = req.usuarioLogado;

  const existeTransacaoComId = await utilitariosDeTransacao.validarTransacaoExistente(idTransacao);

  if (existeTransacaoComId) {
    return res.status(404).json({ mensagem: 'Transacão não encontrada.' });
  };
  try {
    const { rows: detalharTransacaoPeloId } = await repositorioDeTransacao.detalharTransacao(idTransacao, usuarioId);

    if (detalharTransacaoPeloId.length === 0) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    };

    return res.status(200).json(detalharTransacaoPeloId[0]);

  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  };

};

const excluirTransacao = async (req, res) => {
  const idTransacao = req.params.id;
  const usuarioId = req.usuarioLogado;

  const existeTransacaoComId = await utilitariosDeTransacao.validarTransacaoExistente(idTransacao);

  if (existeTransacaoComId) {
    return res.status(404).json({ mensagem: 'Transacão não encontrada.' });
  };

  try {
    const { rowCount } = await repositorioDeTransacao.excluirTransacao(idTransacao, usuarioId);

    if (rowCount === 0) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' });
    };

    return res.status(200).json();

  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
};

const transacaoExtrato = async (req, res) => {
  const usuarioId = req.usuarioLogado;

  try {

  const { rows: existeTransacaoComId } = await repositorioDeTransacao.tipoTransacoes(usuarioId);

    if (existeTransacaoComId.length === 0) {

    return res.status(404).json({
      "entrada": 0,
      "saida": 0
    });
  };

  const { entrada, saida } = existeTransacaoComId[0];

  return res.status(200).json({
    entrada: Number(entrada),
    saida: Number(saida),
  });

  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }

};

module.exports = {
  cadastrarTransacao,
  listarTransacao,
  atualizarTransacao,
  detalharTransacao,
  excluirTransacao,
  transacaoExtrato,
};