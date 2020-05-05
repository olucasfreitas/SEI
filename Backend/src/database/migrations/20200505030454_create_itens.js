exports.up = function (knex) {
    return knex.schema.createTable('itens', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('estabelecimento_id').notNullable();

        table.foreign('estabelecimento_id').references('id').inTable('estabelecimentos');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('itens');
};
