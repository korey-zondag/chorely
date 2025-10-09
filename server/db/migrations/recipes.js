/**
 * @param {import('knex').Knex} knex
 */

export async function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id')
    table.string('recipe_name')
    table.string('description')
    table.string('cook_time')
    table.string('ingredients')
    table.string('instructions')
    table.string('added_by')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipes')
}
