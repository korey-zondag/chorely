export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('chores').del()

  // Inserts seed entries
  await knex('chores').insert([
    {
      id: 1,
      chore_name: 'Clean oven',
      description: 'Scrub and wipe down inside and outside of the oven.',
      frequency: 'Quarterly',
      assigned_to: 'Korey',
      completed: false,
    },
    {
      id: 2,
      chore_name: 'Clean bathroom',
      description:
        'Sweep and mop bathroom floor, wipe down mirror, wipe down counter, clean the sink, and clean the toilet.',
      frequency: 'Fortnightly',
      assigned_to: 'Suliana',
      completed: false,
    },
    {
      id: 3,
      chore_name: 'Put bins out',
      description: 'Put rubbish and recycling bins out on Wednesday night.',
      frequency: 'Weekly',
      assigned_to: 'Korey',
      completed: true,
    },
    {
      id: 4,
      chore_name: 'Clean microwave',
      description: 'Wipe down inside and front of microwave.',
      frequency: 'Fortnightly',
      assigned_to: 'Suliana',
      completed: true,
    },
  ])
}
