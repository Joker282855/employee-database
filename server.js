const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Coderrocks12!',
        database: 'record'
    },
    console.log('Connected to the record database.')
);

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});