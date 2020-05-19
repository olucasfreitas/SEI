exports.up = function (knex) {
    return knex.schema.createTable('estabelecimentos', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('address').notNullable();
        table.string('email').notNullable();
        table.string('number').notNullable();
        table.decimal('waiting_time', 2).notNullable();
        //photo
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('estabelecimentos');
};
