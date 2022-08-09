const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Coderrocks12!',
        database: 'record'
    },
    console.log('Now connected to the database tracker')
);

module.export = db;