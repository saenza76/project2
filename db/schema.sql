CREATE DATABASE recipe_users;
USE recipe_users;

CREATE TABLE `recipe_users`.`ingredients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `searchWord` VARCHAR(100) NOT NULL,
  `recipeName` VARCHAR(100) NOT NULL,
  `ingredient` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));