exports.up = function (knex) {
  return knex.schema.createTable('orders', function (table) {
    table.increments();
      table.string('name').primary();
      table.foreign('name').references('name').inTable('itens');
      table.integer('quantity').notNullable();
      table.integer('price').notNullable();
      table.foreign('price').references('value').inTable('itens');
      table.string('orders').notNullable();
      table.foreign('orders').references('id').inTable('estabelecimentos');
      table.string('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('user');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};
