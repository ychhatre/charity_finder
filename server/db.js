const Pool = require("pg").Pool; 
require("dotenv").config({path: "./.env"})

const pool = new Pool({
    user: "postgres",
    password: process.env.PASSWORD,
    host: "localhost",
    port: 5432,
    database: "charity_finder"
})

module.exports = pool; 