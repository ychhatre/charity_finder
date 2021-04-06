CREATE DATABASE charity_finder; 

CREATE TABLE users(
    uid VARCHAR(255) UNIQUE, 
    displayName VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE
); 

