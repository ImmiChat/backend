/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("first_name");
      table.string("last_name");
      table.string("email").unique();
      table.string("password").notNullable();
      table.string("bio");
      table.string("profile_picture");
      table.string("country_of_origin");
      table.string("language");
      table.timestamps(true, true);
    })
    .createTable("posts", (table) => {
      table.increments("id").primary();
      table.integer("user_id").references("id").inTable("users");
      table.string("body").notNullable();
      table.string("topic");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("posts").dropTable("users");
};
