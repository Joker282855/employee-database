const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.get('/cmployees', (req, res) => {
    const sql = 'SELECT employees.*, positions.title AS positions_title FROM employees LEFT JOIN positions ON employees.positions_id = positions.id'; 

});