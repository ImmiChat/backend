/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
return knex.schema.createTable('posts', table => {
    table.increments('comments_id').primary()
    table.integer('user_id').references('user_id').inTable('users').onDelete('cascade');
    table.string('body').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo()
    table.foreign('user_id').references('id').inTable('users')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('posts')
};
