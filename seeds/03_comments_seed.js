/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("comments").insert([
    { post_id: 1, user_id: 1, comment_text: "Thanks for the post!" },
    { post_id: 1, user_id: 2, comment_text: "Can you share more information?" },
    { post_id: 1, user_id: 3, comment_text: "This was very helpful" },
    { post_id: 2, user_id: 1, comment_text: "This helps me out alot." },
    { post_id: 2, user_id: 2, comment_text: "I really needed this. Thank you" },
    { post_id: 2, user_id: 3, comment_text: "Where can I find out more?" },
    { post_id: 3, user_id: 1, comment_text: "Thats incredible!" },
    { post_id: 3, user_id: 2, comment_text: ":)" },
    { post_id: 3, user_id: 3, comment_text: "This is so cool" },
  ]);
};
