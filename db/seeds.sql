INSERT INTO locations (name)
VALUES ('Colorado'),
('Idaho'),
('Delaware'),
('Utah'),
('Nevada'),
('Florida');

INSERT INTO positions (title, salary, location_id)
VALUES ('Team Member', 18324.56, 1),
('Shift Lead', 4567.60, 1),
('Assistant General Manager', 32457.58 1),
('General Manager', 45678.45, 1);


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

