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

