/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("friends", (table) => {
    table.increments("id").primary();
    table.integer("friend_one").references("id").inTable("users").notNullable();
    table.integer("friend_two").references("id").inTable("users").notNullable();
    table.boolean("accepted").defaultTo(null).notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("friends");
};
