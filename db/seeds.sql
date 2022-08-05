INSERT INTO locations (name)
VALUES ('Colorado'),
('Idaho'),
('Delaware'),
('Utah');

INSERT INTO positions (title, salary, locations_id)
VALUES ('Chief Executive Officer', 18324.56, 1),
('Team Member', 18324.56, 1),
('Team Member', 18324.56, 1),
('Teamm Meber', 18324.56, 1),
('Shift Lead', 24579.45, 1),
('Assistant General Manager', 36789.45, 1),
('General Manager', 45678.90, 1),
('Team Member', 18324.56, 2),
('Team Meber', 18324.56, 2),
('Team Member', 18324.56, 2),
('Shift Lead', 24579.45, 2),
('Assistant General Manager', 36789.45, 2),
('General Manager', 45678.90, 2),
('Team Member', 18324.56, 3),
('Team Member', 18324.56, 3),
('Team Member', 18324.56, 3),
('Shift Lead', 24579.45, 3),
('Assistant General Manager', 26789.45, 3),
('Geenral Manager', 45678.90, 3),
('Team Member', 18324.56, 4),
('Team Meber', 18324.56, 4),



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

