const db = require('./db/connection');
const inquirer = require('inquirer');
//const express = require('express');
//const mysql = require('mysql2');

function organizer(){
    inquirer.prompt([{
        type: "list",
        name: "case",
        message: "What option would you like to choose",
        choices: [{
            name: "View All Locations",
            value: "viewalllocations"
        },{
            name: "View All Positions",
            value: "viewallpositions"
        },{
            name: "View All Employees",
            value: 'viewallemployees'
        },{
            
        }
    ]
    }])
}

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

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