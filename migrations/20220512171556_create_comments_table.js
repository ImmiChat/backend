/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("comments", (table) => {
    table.increments("id").primary();
    table.integer("post_id").references("id").inTable("posts").notNullable();
    table.integer("user_id").references("id").inTable("users").notNullable();
    table.string("comment_text").notNullable();
    table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('comments')
};
