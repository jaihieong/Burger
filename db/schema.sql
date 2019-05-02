DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
  id int AUTO_INCREMENT,
  burger_name varchar (50) NOT NULL,
  devoured boolean DEFAULT 0,
  PRIMARY KEY (id)
);