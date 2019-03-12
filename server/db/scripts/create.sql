DROP DATABASE IF EXISTS `education_portal`;
CREATE DATABASE IF NOT EXISTS `education_portal`;
USE `education_portal`;

DROP TABLE IF EXISTS `Founders`;
CREATE TABLE `Founders` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Places`;
CREATE TABLE `Places` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,

  `title` text NOT NULL,
  `content` text NOT NULL,

  `address` varchar(50) NOT NULL,
  `lat` DECIMAL(10, 8) NOT NULL,
  `lng` DECIMAL(11, 8) NOT NULL,
  
  PRIMARY KEY (`id`)
);