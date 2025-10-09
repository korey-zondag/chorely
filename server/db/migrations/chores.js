/**
 * @param {import('knex').Knex} knex
 */

export async function up(knex) {
  return knex.schema.createTable('chores', (table) => {
    table.increments('id')
    table.string('chore_name')
    table.string('description')
    table.string('frequency')
    table.string('assigned_to')
    table.boolean('completed')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('chores')
}
