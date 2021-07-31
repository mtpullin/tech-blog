const Sequelize = require('sequelize')
const mysql = require('mysql');
const connection;

require('dotenv').config();

if (process.env.JAWSDB_URL){
    connection= mysql.createConnection(process.env.JAWSDB_URL)
}else{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1darkness',
        database: 'tech_blog'
    })
}

module.exports = sequelize;