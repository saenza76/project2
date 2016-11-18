CREATE DATABASE recipe_users;
USE recipe_users;

CREATE TABLE `recipe_users`.`ingredients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `searchWord` VARCHAR(100) NOT NULL,
  `searchCount` INT NOT NULL,
  PRIMARY KEY (`id`));