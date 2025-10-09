export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()

  // Inserts seed entries
  await knex('recipes').insert([
    {
      id: 1,
      recipe_name: 'Egg in a Hole',
      description: 'A fried egg in the middle of a piece of fried bread.',
      cook_time: '10 minutes',
      ingredients: 'One egg, one piece of bread, butter, salt, oil.',
      instructions: 'Blah blah blah, etc.',
      added_by: 'Korey',
    },
  ])
}
