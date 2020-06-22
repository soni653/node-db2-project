exports.up = async function (knex) {
  await knex.schema.alterTable("cars", (table) => {
    table.string("transmissionType");
    table.string("titleStatus");
  });
};

exports.down = async function (knex) {
  await knex.schema.alterTable("cars", (table) => {
    table.dropColumns("transmissionType", "titleStatus");
  });
};
