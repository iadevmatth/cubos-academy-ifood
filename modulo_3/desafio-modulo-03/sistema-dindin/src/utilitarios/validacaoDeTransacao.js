const repositorioDeTransacao = require('../repositorios/repositorioDeTransacao')

const validarCampoTransacaoObrigatorio = (descricao, valor, categoria_id, tipo) => {
  if (!descricao || !valor || !categoria_id || !tipo) {
    return true;
  };
};

const validarCategoriaPeloId = async (id) => {
  const { rows: idCategoriaEncontrada } = await repositorioDeTransacao.encontrarCategoriaPeloId(id)
  if (idCategoriaEncontrada.length === 0) {
    return true;
  };

  const categoriaEncontrada = idCategoriaEncontrada.some((categoria) => categoria.id === id);
  return categoriaEncontrada;
};

const categoriaExistente = async (id) => {
  const { rowCount } = await repositorioDeTransacao.encontrarCategoriaPeloId(id)
  if (rowCount === 0) {
    return true;
  };
};

const validarTipo = async (tipo) => {
  if (tipo !== 'entrada' && tipo !== 'saida') {
    return true
  };
};

const validarTransacaoExistente = async (id) => {
  const { rowCount } = await repositorioDeTransacao.encontrarTransacaoId(id);

  if (rowCount === 0) {
    return true
  }
  return false;
};

module.exports = {
  validarCampoTransacaoObrigatorio,
  validarCategoriaPeloId,
  validarTipo,
  categoriaExistente,
  validarTransacaoExistente,
};