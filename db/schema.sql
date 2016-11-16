CREATE DATABASE recipe_users;
USE recipe_users;

CREATE TABLE recipe_users.ingredients
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    ingredient VARCHAR(50) NOT NULL,
    date TIMESTAMP
);