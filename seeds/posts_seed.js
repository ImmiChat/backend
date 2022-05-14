/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('users').del()
  await knex('posts').insert([
    {id: 1, user_id: 1, body:'This is a test',},
    {id: 2, user_id:1, body:'This is also a test'},
    {id: 3, user_id:2, body:'this is still a test'}
  ]);
};
