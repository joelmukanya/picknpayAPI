require('dotenv').config();
const { createConnection } = require('mysql');
const connection = createConnection({
    host: process.env.host,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    port: process.env.dbPort,
    database: process.env.database,
    multipleStatements: true
});

connection.connect( (err)=> {
    if(err) throw err 
})

module.exports = connection;