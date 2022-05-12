/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
return knex.schema.createTable("likes", (table) => {
    table.increments("id").primary();
    table.integer("post_id").notNullable();
    table.integer("user_id").notNullable();
    table.timestamps(true, true);
    table.foreign("user_id").references("id").inTable("users");
    table.foreign("post_id").references("id").inTable("posts");
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("likes");
};
