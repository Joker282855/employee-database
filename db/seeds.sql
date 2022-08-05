INSERT INTO locations (name)
VALUES ('Colorado'),
('Idaho'),
('Delaware'),
('Utah'),
('Nevada'),
('Florida');

INSERT INTO positions (title, salary, locations_id)
VALUES ('Team Member', 18324.56, 1),
('Team Member', 18324.56, 1),
('Team Member', 18324.56, 1),
('Shift Lead', 54567.60, 1),
('Assistant General Manager', 32457.58, 1),
('General Manager', 245678.45, 1),
('Team Member', 18324.56, 2),
('Team Member', 18324.56, 2),
('Team Meber', 18324.56, 2),
('Shift Lead', 54567.60, 2),
('Assistant General Manager', 32457.58, 2),
('General Manager', 245678.45, 2),
('Team Member', 18324.56, 3),
('Team Member', 18324.56, 3),
('Team Meber', 18324,56, 3),
('Shift Lead', 54567.60, 3),
('Assistant General Manager', 32457.58, 3),
('General Manager', 245678.45, 3),
('Team Member', 18324.56, 4),
('Team Meber', 18324.56, 4),
('Team Meber', 18324.56, 4),
('Shift Lead', 54567.60, 4),
('Assistant General Manager', 32457.58, 4),
('General Manager', 245678.45, 4);



INSERT INTO employees (first_name, last_name, positions_id, general_manager_id)
VALUES ('Susan', 'Anthony', 1, NULL),
('Max', 'Mayfield', 2, 1),
('Happy', 'Dean', 3, 1),
('Robert', 'Stallin', 4, 1),
('Cynthia', 'Drake', 5, 1),
('Berry', 'School', 6, 1),
('Showy', 'Wednesday', 7, 1),
('Suzzy', 'Lipskins', 8, 1),
('Greg', 'Berkowhitz', 9, 1); 

