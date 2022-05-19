/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").insert([
    {
      user_id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis",
    },
    {
      user_id: 2,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis ",
    },
    {
      user_id: 3,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis ",
    },
    {
      user_id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis",
    },
    {
      user_id: 2,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis ",
    },
  ]);
};
