
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('firstName');
    table.string('lastName');
    table.string('email');
    table.integer('age');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  knex.schema.dropTable('users');
};
