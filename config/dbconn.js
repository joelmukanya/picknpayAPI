require('dotenv').config();
const { createConnection } = require('mysql');
// Create connection variable
let connection;
// Problem solved
(function handleConnection() {
    connection = createConnection({
        host: process.env.host,
        user: process.env.dbUser,
        password: process.env.dbPassword,
        port: process.env.dbPort,
        database: process.env.database,
        multipleStatements: true
    });
    
    connection.connect( (err)=> {
        if(err) throw err 
    });
    
    connection.on('error', (err)=> {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleConnection();
        }else {
            throw err;
        }
    })    
})();
module.exports = connection;