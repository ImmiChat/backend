/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
return knex.schema.createTable('posts', table => {
    table.increments('id').primary()
    table.integer('user_id').references('user_id').inTable('users').onDelete('cascade');
    table.integer('likes')
    table.string('body').notNullable()
    table.timestamp(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('posts')
};
