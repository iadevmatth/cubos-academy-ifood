const usuarioRepositorio = require('../repositorios/repositorioDeCategorias');

const listarCategorias = async (req, res) => {
  const id = req.usuarioLogado;

  try {
    const { rows: categoriaExistente, rowCount } = await usuarioRepositorio.listarCategorias();

    if (rowCount === 0) {
      return res.status(404).json({ mensagem: 'Categoria não encontrada.' });
    };

    return res.json(categoriaExistente);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  };

};

module.exports = listarCategorias;