/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, first_name: 'something', last_name: 'Else', email: 'somethingelse@gmail.com', password: '123', bio: 'i am not real', profile_picture: '', country_of_origin: 'spain', language: 'spanish',},
    {id: 2, first_name: 'sally', last_name: 'doesntexist', email: 'notreal@gmail.com', password: '123', bio: 'i am also not real', profile_picture: '', country_of_origin: 'not real', language: 'notrealia',},
    {id: 3, first_name: 'j', last_name: 'k', email: 'jk@gmail.com', password: '123', bio: 'i am still not real', profile_picture: '', country_of_origin: 'russia', language: 'russian',}
  ]);
};
