const knex = require("knex");
const knefile = require("./knexfile");

// export for use in codebase
module.exports = knex(knexfile);
