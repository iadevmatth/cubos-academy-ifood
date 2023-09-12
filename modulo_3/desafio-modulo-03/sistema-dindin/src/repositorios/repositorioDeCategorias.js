const pool = require('../conexao');

const listarCategorias = () => {
    return pool.query(`
        select * from categorias;
    `);
};

module.exports = {
    listarCategorias,
}
