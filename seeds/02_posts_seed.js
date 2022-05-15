/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").insert([
    {
      id: 1,
      user_id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis",
    },
    {
      id: 2,
      user_id: 2,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis ",
    },
    {
      id: 3,
      user_id: 3,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis ",
    },
    {
      id: 4,
      user_id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis",
    },
    {
      id: 5,
      user_id: 2,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima sapiente vel eos repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis ",
    },
  ]);
};
