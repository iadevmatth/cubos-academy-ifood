const { default: knex } = require("knex");


const cadastrarUsuario = async (dados) => {
    const { nome, email, senhaCritografada } = dados;
    const resultado = await knex('usuarios')
        .insert({ nome, email, senhaCritografada })
        .returning('*');

    return (resultado[0]);
    // return pool.query(`
    //     insert into usuarios (nome, email, senha)
    //     values ($1, $2, $3)
    //     RETURNING *
    // `, [nome, email, senhaCryptografada]);
}

// const detalharUsuario = async (id) => {
//     const resultado = await knex('usuarios').where({ id: id }).select('id', 'nome', 'email').first().debug();
//     return resultado;
//     // return pool.query(`
//     //     select id, nome, email from usuarios where id = $1
//     // `, [id]);
// }

// const encontrarUsuarioPeloId = async (id) => {
//     const resultado = await knex('usuarios').where({ id: id }).select('id', 'nome', 'email').first().debug();
//     return resultado;
//     //     return pool.query(`
//     //         select id, nome, email from usuarios where id = $1;
//     //     `, [id]);
//     // }

// const encontrarUsuarioPeloEmail = (email) => {
//     return pool.query(`
//     select id, nome, email from usuarios where email = $1;
// `, [email]);
// }

// const atualizarUsuario = (id, nome, email, senha) => {
//     return pool.query(`
//     update usuarios set nome = $1, email = $2, senha = $3 where id = $4
//     RETURNING *;
// `, [nome, email, senha, id])
// }



module.exports = {
    cadastrarUsuario,
    // detalharUsuario,
    // encontrarUsuarioPeloId,
    // encontrarUsuarioPeloEmail,
    // atualizarUsuario,
};