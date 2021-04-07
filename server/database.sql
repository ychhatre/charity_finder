CREATE DATABASE charity_finder; 

CREATE TABLE users(
    uid VARCHAR(255) UNIQUE, 
    displayName VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE
); 

CREATE TABLE charities(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    image VARCHAR(255)
)

CREATE TABLE members(
    id INT PRIMARY KEY NOT NULL UNIQUE,
    charity_id INT PRIMARY KEY NOT NULL 
)

