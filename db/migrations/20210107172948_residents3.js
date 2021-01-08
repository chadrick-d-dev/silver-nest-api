exports.up = function (knex) {
  return knex.schema
  .createTable('residents3', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('photo');
    table.string('age');
    table.string('height');
    table.string('weight');
    table.string('pcp');
    table.string('ambulatory');
    table.string('help_with_medications');
    table.string('other_impairments');
    table.string('previous_career');
    table.string('interests');
    table.string('pets');
    table.string('living_preferences');
    table.string('semester');
    table.string('additional_notes'); 
  })
};

exports.down = function (knex) {
  return knex.schema
  .dropTable('residents3')
};