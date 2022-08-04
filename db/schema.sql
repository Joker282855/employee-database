DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS positions;

CREATE TABLE positions (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(8, 2) NOT NULL,
    location_id INT NOT NULL
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    positions_id INT,
    assistant_manager_id INT NULL
);