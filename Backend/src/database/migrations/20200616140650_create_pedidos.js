exports.up = function (knex) {
  return knex.schema.createTable('pedidos', function (table) {
      table.increments();

      table.string('name').notNullable();
      table.foreign('name').references('title').inTable('itens');
      table.integer('quantity').notNullable();
      table.integer('price').notNullable();
      table.foreign('price').references('value').inTable('itens');
      table.string('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('user');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('pedidos');
};

