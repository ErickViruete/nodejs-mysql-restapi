-- CREATE DATABASE IF NOT EXISTS cadenasdb;

USE cadenasdb;
SHOW FULL TABLES FROM cadenasdb;

SELECT*FROM cadenas_python WHERE codigo = 899076;

UPDATE cadenas_python
SET status = 'Activo'
WHERE id = 799;

-- CREATE TABLE cadenas_python (
--     id INT(11) NOT NULL AUTO_INCREMENT,
--     cadena INT(11) NOT NULL,
--     estado VARCHAR(11) NOT NULL,
--     PRIMARY KEY(id)
-- );

DESCRIBE cadenas_python;

