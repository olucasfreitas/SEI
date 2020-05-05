exports.up = function (knex) {
    return knex.schema.createTable('estabelecimentos', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('password').notNullable();
        table.string('address').notNullable();
        table.string('email').notNullable();
        table.string('number').notNullable();
        table.string('waiting_time').notNullable();
        //photo
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('estabelecimentos');
};