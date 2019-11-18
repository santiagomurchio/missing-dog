-- RAZA
CREATE TABLE `missingdog`.`raza` (
  `nombre` VARCHAR(255) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `foto` VARCHAR(255) NULL,
  `descripcion` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`id`));

