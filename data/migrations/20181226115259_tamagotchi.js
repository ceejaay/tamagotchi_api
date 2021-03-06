
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tamagotchis', table => {
    table.increments()
    table.string('username').notNullable.unique
    table.string('tamagotchi_name').notNullable.unique
    table.datetime('date_created').notNullable
    table.datetime('last_check_in').notNullable
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tamagotchis');
  
};
