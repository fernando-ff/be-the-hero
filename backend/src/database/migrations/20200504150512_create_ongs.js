
//Responsavél pela criação da tabela
exports.up = function(knex) {
  //  Criando a migration
  return knex.schema.createTable('ongs', function(table){

    table.string('id').primary();//Chave primária
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();

  });
};

//Responsavél pela criação da tabela
exports.down = function(knex) {
  // Deletando a migration
    return knex.schema.dropTable('ongs');
};
