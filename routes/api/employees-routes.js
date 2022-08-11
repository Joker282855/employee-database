const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.get('/cmployees', (req, res) => {
    const sql = `SELECT employees.*, positions.title AS positions_title FROM employees LEFT JOIN positions ON employees.positions_id = positions.id`; 

    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'employee information recieved',
            data: rows
        });
    });
});

router.post('/employees', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'positions_id', 'chief_id')
    if(errors) {
        res.status(400).json({ errors: errors });
    }
    const sql = `INSERT INTO employees (first_name, last_name, positions_id, chief_id)
                VALUES (?, ?, ?, ?)`
    const params = [body.first_name, body.last_name, body.positions_id, body.chief_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'posted successfully',
            data: body
        });
    });
});