USE nodedb

CREATE TABLE IF NOT EXISTS people(
        id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(80) NOT NULL,
        reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);