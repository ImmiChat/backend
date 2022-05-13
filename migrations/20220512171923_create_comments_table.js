const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("comments", (table) => {
    table.increments("id").primary();
    table.integer("post_id").notNullable().references("id").inTable('posts');;
    table.integer("user_id").notNullable().references("user_id").inTable("users");;
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
