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
            value: "viewAllLocations"
        },{
            name: "View All Positions",
            value: "viewAllPositions"
        },{
            name: "View All Employees",
            value: 'viewAllEmployees'
        },{
            name: "Add a Location",
            value: "addALocation"
        },{
            name: "Add a Position",
            value: "addAPosition"
        },{
            name: "Add more Employees",
            value: "addMoreEmployees"
        },{
            name: "Update an Employee Position",
            value: "updateAnEmployeePosition"
        },{
            name: "quit",
            value: "quit"
        }]
    }]).then(function(data){
        console.log(data)
        switch (data.case){
            case "viewAllLocations":
                viewLocation()
                break;
            case "viewAllPositions":
                viewPosition() 
                break;
            case "viewAllEmployees":
                viewEmployees()
                break;
            case "addALocation":
                addALocation()
                break;
            case "addAPosition":
                addAPosition()
                break;
            case "addMoreEmployees":
                addMoreEmployees()
                break;
            case "updateAnEmployeePosition":
                updateAnEmployeePosition()
                break;
        }
    })
};

function viewLocation(){
    db.query("select locations.id, locations.name from locations", (err, data) => {
        if(err) throw err
        console.table(data)
        organizer()
    })
};

function viewPosition(){
    db.query("select positions.id, position.title, position.salary locations.name as location from positions left join locations on positions.location_id = locations.id", (err, data) => {
        if (err) throw err
        console.table(data)
        organizer()
    })
};

function viewEmployees(){
    db.query("select employees.id, employees.first_name, employees.last_name, position.title, chief.first_name as chief_first, chief.last_name as chief_last, role.salary, locations.name as location from employees left join postitions on positions_id = positions.id", (err, data) => {
        if (err) throw err
        console.table(data)
        organizer()
    })
};

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