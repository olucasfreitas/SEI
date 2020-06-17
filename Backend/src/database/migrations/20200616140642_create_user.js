exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.integer('quantity_items').notNullable();
      table.integer('preco_total').notNullable();
      table.string('estabelecimento_id').notNullable();
      table.foreign('estabelecimento_id').references('id').inTable('estabelecimentos');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
