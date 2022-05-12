const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
return knex.schema.createTable('users',(table) => {
    table.increments('user_id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('password').notNullable()
    table.string('bio')
    table.string('profile_picture')
    table.string('country_of_origin')
    table.string('language')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
return knex.schema.dropTable('users')
};
