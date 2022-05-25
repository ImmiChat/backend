/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("chat", (table) => {
    table.increments("id").primary();
    table.integer("sender_id").references("id").inTable("users").notNullable();
    table
      .integer("receiver_id")
      .references("id")
      .inTable("users")
      .notNullable();
    table.string("message");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("chat");
};
