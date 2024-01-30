-- Deployment Script for CPC Database
-- -----------------------------------------------
DROP DATABASE IF EXISTS `cpc`;
CREATE DATABASE `cpc` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `cpc`;
-- -----------------------------------------------
CREATE TABLE `events` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `asistentes` int UNSIGNED DEFAULT 0,
  `presencial` tinyint NOT NULL DEFAULT 0,
  `lugar` varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE `groups` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `materia` tinyint NOT NULL DEFAULT 0,
  `imagen` varchar(100),
  PRIMARY KEY(id)
);

CREATE TABLE `posts` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `group_id` int UNSIGNED NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `contenido` text NOT NULL,
  `votos_up` int UNSIGNED DEFAULT 0,
  `votos_down` int UNSIGNED DEFAULT 0,
  PRIMARY KEY(id),
  FOREIGN KEY(group_id)
	REFERENCES `groups`(id)
    ON UPDATE CASCADE
);

CREATE TABLE `comments` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `post_id` int UNSIGNED NOT NULL,
  `contenido` text NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(post_id)
	REFERENCES posts(id)
    ON UPDATE CASCADE
);

INSERT INTO `groups`(nombre) VALUES ("Lenguajes de Programación");