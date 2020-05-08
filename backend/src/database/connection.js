//Importando o knex
const knex = require('knex');

//Configurações do BD
const configuration = require('../../knexfile');

//Criando a conexão
const connection =  knex(configuration.development);

//Exporta a conexão com o BD
module.exports = connection;