const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.get('/positions', (req, res) => {
    const sql = `SELECT positions.*, location.name
                AS location_name
                FROM positions
                LEFT JOin locations
                ON positions.locations_id = locactions.id`;
    
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Information retrieved successfully',
            data: rows
        });
    });
});

router.post('/positions', ({ body }, res) => {
   const errors = inputCheck(body, 'title', 'salary', 'locations_id');
   if (errors) {
    res.status(400).json({ errors: errors });
   }

   const sql = `INSERT INTO locations (title, salaru, locations_id)
                VALUES (?, ?, ?)`;
   const params = [body.title, body.salary, body.locations_id];

   db.query(sql, params, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.json({
        message: 'Information added to the table successfully',
        data: body
    });
   });
});

module.exports = router;