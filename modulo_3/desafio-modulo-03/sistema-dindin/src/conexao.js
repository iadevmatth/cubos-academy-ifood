const { knex } = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 3000,
    user: 'postgres',
    password: 'H4ck81855113.',
    database: 'dindin'
  }
});

module.exports = knex