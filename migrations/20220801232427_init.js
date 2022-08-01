/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema
        .createTable('Games', function (table) {
            table.uuid('id').primary().notNullable()
                .defaultTo(knex.raw('uuid_generate_v1()'));

            table.string('title').notNullable().unique();

            table.string('description').notNullable();

            table.timestamp('created_at').defaultTo(knex.fx.now());
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
