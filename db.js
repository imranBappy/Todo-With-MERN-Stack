const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "Imran",
    port: 5432,
    database: "todo"
})

module.exports = pool