const db = require('./db/connection');
const inquirer = require('inquirer');

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
    db.query("select positions.id, positions.title, positions.salary, locations.name as location from positions left join locations on positions.locations_id = locations.id", (err, data) => {
        if (err) throw err
        console.table(data)
        organizer()
    })
};

function viewEmployees(){
    db.query("select employees.id, employees.first_name, employees.last_name, positions.title, chief.first_name as chief_first, chief.last_name as chief_last, positions.salary, locations.name as location from employees left join positions on employees.positions_id = positions.id left join locations on positions.locations_id = locations.id left join employees chief on employees.chief_id = chief.id", (err, data) => {
        if (err) throw err
        console.table(data)
        organizer()
    })
};

function addALocation(){
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What city is your Jamba Juice store located in"
    }]).then(function(answer){
        console.log(answer);
        db.query("INSERT INTO locations SET ?",{
            name: answer.name
        },function(error, data){
            if (error) throw error
            console.table(data)
            organizer()
        })
    })
};

function addAPosition(){
    inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is your position"
    },
    {
        type: "input",
        name: "salary",
        message: "What is your salary"
    },
    {
        type: "input",
        name: "locations_id",
        message: "What is the location id for the Jamba Juice store you work at"
    }
]).then(function(answers){
    console.log(answers);
    db.query("INSERT INTO positions SET ?",{
        title: answers.title,
        salary: answers.salary,
        locations_id: answers.locations_id
    },function(err, data){
        if (err) throw err
        console.table(data)
        organizer()
    })
})
};

function addMoreEmployees(){
    inquirer.prompt([{
        type: "input",
        name: "first_name",
        message: "What is your first name"
    },
    {
        type: "input",
        name: "last_name",
        message: "What is your last name"
    },
    {
        type: "input",
        name: "positions_id",
        message: "What is the id associated with your position"
    },
    {
        type: "input",
        name: "chief_id",
        message: "What is the id assocaited with your chief"
    }
]).then(function(answers){
    console.log(answers)
    db.query("INSERT INTO employees SET ?",{
        first_name: answers.first_name,
        last_name: answers.last_name,
        positions_id: answers.positions_id,
        chief_id: answers.cheif_id
    },function(err, data){
        if (err) throw err
        console.table(data)
        organizer()
    })
})
};

organizer();