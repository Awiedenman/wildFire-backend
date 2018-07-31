exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('unverified_fires', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('image');
      table.string('acres_burned');
      table.string('last_update');
      table.string('latitude');
      table.string('longitude');

      table.timestamps(true, true);
    }),
  
    knex.schema.createTable('current_fires', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('image');
      table.string('acres_burned');
      table.string('last_update');
      table.string('latitude');
      table.string('longitude');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('unverified_fires'),
    knex.schema.dropTable('current_fires')
  ]);
};