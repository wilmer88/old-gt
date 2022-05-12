DROP DATABASE IF EXISTS wishy_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wishy_db;

USE wishy_db;

-- Create the table tasks.
CREATE TABLE wish (
  id int NOT NULL AUTO_INCREMENT,
  deseo varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.


    SELECT * FROM wish 
INSERT INTO wish (deseo) VALUES ("acceptar");
INSERT INTO wish (deseo) VALUES ("fix things");
