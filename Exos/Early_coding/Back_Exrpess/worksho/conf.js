const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '0insTallation9-123',
    database: 'hero_db'
});

module.exports = connection ;
