const knex = require("knex");
const knexfile = require("../knexfile").development;

// export for use in codebase
module.exports = knex(knexfile);
