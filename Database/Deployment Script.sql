-- Deployment Script for CPC Database
-- -----------------------------------------------
DROP DATABASE IF EXISTS `cpc`;
CREATE DATABASE `cpc` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `cpc`;
-- -----------------------------------------------
CREATE TABLE `evento` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `asistentes` int UNSIGNED DEFAULT 0,
  `presencial` tinyint NOT NULL DEFAULT 0,
  `lugar` varchar(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE `grupo` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `materia` tinyint NOT NULL DEFAULT 0,
  `imagen` varchar(100),
  PRIMARY KEY(id)
);

CREATE TABLE `publicacion` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `id_grupo` int UNSIGNED NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `contenido` text NOT NULL,
  `votos_up` int UNSIGNED DEFAULT 0,
  `votos_down` int UNSIGNED DEFAULT 0,
  PRIMARY KEY(id),
  FOREIGN KEY(id_grupo)
	REFERENCES grupo(id)
    ON UPDATE CASCADE
);

CREATE TABLE `comentario` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `id_publicacion` int UNSIGNED NOT NULL,
  `contenido` text NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(id_publicacion)
	REFERENCES publicacion(id)
    ON UPDATE CASCADE
);