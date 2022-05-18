/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("comments").insert([
    { post_id: 1, user_id: 1, comment_text: "nice blog" },
    { post_id: 1, user_id: 2, comment_text: "nice blog" },
    { post_id: 1, user_id: 3, comment_text: "nice blog" },
    { post_id: 2, user_id: 1, comment_text: "nice blog" },
    { post_id: 2, user_id: 2, comment_text: "nice blog" },
    { post_id: 2, user_id: 3, comment_text: "nice blog" },
    { post_id: 3, user_id: 1, comment_text: "nice blog" },
    { post_id: 3, user_id: 2, comment_text: "nice blog" },
    { post_id: 3, user_id: 3, comment_text: "nice blog" },
  ]);
};
