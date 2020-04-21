
exports.up = function (knex) {
  return knex.schema.createTable('groups', function (table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('location');
    table.integer('maximalSize');
  });
};

exports.down = function (knex) {
  knex.schema.dropTable('groups');
};
