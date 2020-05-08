
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){

        table.increments();//cria uma chave primária auto incrementevél

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

         table.string('ong_id').notNullable();//Relacionamento com a tabela ONGs
        table.foreign('ong_id').references('id').inTable('ongs');//Chave estrangeira
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
