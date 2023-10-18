const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'mysql',
    database : 'laproject'
})

module.exports = connection