const pool = require("../conexao");

const encontrarCategoriaPeloId = (id) => {
  return pool.query(`
    select * from categorias where id = $1;
  `, [id]);
};

const transacaoCadastrada = (tipo, descricao, valor, data, usuario_id, categoria_id) => {
  return pool.query(`
    insert into transacoes
    (tipo, descricao, valor, data, usuario_id, categoria_id)
    values
    ($1, $2, $3, $4, $5, $6)
    RETURNING id, tipo, descricao, valor, data, usuario_id, categoria_id,
    (SELECT descricao FROM categorias WHERE categorias.id = transacoes.categoria_id)
    AS categoria_nome;
  `, [tipo, descricao, valor, data, usuario_id, categoria_id]);
};

const listarTransacao = (id) => {
  return pool.query(`
    select transacoes.id,
    transacoes.tipo,
    transacoes.descricao,
    transacoes.valor,
    transacoes.data,
    transacoes.usuario_id,
    transacoes.categoria_id,
    transacoes.descricao as categoria_nome
    from transacoes
    join categorias
    on categorias.id = transacoes.categoria_id
    where transacoes.usuario_id = $1;
  `, [id]);
};

const atualizarTransacao = (descricao, valor, data, categoria_id, tipo, id, idUsuarioLogado) => {
  return pool.query(`
    update transacoes
    set
    descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5
    where id = $6 and usuario_id = $7
    RETURNING *;
  `, [descricao, valor, data, categoria_id, tipo, id, idUsuarioLogado]);
};

const encontrarTransacaoId = (id) => {
  return pool.query(`
    select * from transacoes where id = $1;
  `, [id]);
}

const detalharTransacao = (id, usuarioId) => {
  return pool.query(`
    select transacoes.id,
    transacoes.tipo,
    transacoes.descricao,
    transacoes.valor,
    transacoes.data,
    transacoes.usuario_id,
    transacoes.categoria_id,
    transacoes.descricao as categoria_nome
    from transacoes
    join categorias
    on categorias.id = transacoes.categoria_id
    where transacoes.id = $1 and transacoes.usuario_id = $2;
  `, [id, usuarioId]);
};

const excluirTransacao = (idTransacao, usuarioId) => {
  return pool.query(`delete from transacoes where id = $1 and usuario_id = $2;
  `, [idTransacao, usuarioId]);
};

const tipoTransacoes = (idUsuarioLogado) => {
  return pool.query(`
    SELECT SUM(CASE WHEN tipo = 'entrada' THEN valor ELSE 0 END) AS entrada,
    SUM(CASE WHEN tipo = 'saida' THEN valor ELSE 0 END) AS saida
    FROM transacoes WHERE usuario_id = $1 GROUP BY usuario_id
    ORDER BY entrada, saida;
  `, [idUsuarioLogado]);
};

module.exports = {
  encontrarCategoriaPeloId,
  transacaoCadastrada,
  listarTransacao,
  atualizarTransacao,
  encontrarTransacaoId,
  detalharTransacao,
  excluirTransacao,
  tipoTransacoes,
};