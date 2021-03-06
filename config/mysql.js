var mysql = require('mysql')
require('dotenv').config();


var connection = mysql.createConnection({
    host : process.env.DBHOST,
    user : process.env.DBUSER,
    password : process.env.DBPASS,
    database : process.env.DATABASE,
    charset: 'utf8'
});

module.exports = connection;