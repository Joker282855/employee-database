const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.get('/locations', (req, res) => {
    const sql = `SELECT * FROM locations`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Information retrieved',
            data: rows
        });
    });
});

router.post('/locations', ({ body }, res) => {
    const errors = inputCheck(body, 'name');
    if (err) {
        res.status(400).json({ error: errors });
    }
    
    const sql = `INSERT INTO locations (name)
                VALUES (?)`;
    
    const params = [body.name];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Information posted to the table correctly',
            data: body
        });
    });
});

module.exports = router