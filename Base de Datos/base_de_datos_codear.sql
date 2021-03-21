-- MySQL Script generated by MySQL Workbench
-- Sun Mar 21 14:35:03 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema codear
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema codear
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `codear` DEFAULT CHARACTER SET utf8 ;
USE `codear` ;

-- -----------------------------------------------------
-- Table `codear`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `codear`.`categorias` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `codear`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `codear`.`productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL,
  `precio` INT(11) NOT NULL,
  `detalle` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL,
  `imagen` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL,
  `cetegorias_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `productos/categorias_idx` (`cetegorias_id` ASC),
  CONSTRAINT `productos/categorias`
    FOREIGN KEY (`cetegorias_id`)
    REFERENCES `codear`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `codear`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `codear`.`usuarios` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL,
  `email` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL,
  `telefono` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL,
  `password` VARCHAR(100) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `avatar` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NULL DEFAULT NULL,
  `admin` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `codear`.`ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `codear`.`ventas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `producto_id` INT(11) NOT NULL,
  `usuario_id` INT(10) UNSIGNED NOT NULL,
  `cifra` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ventas_productos_idx` (`producto_id` ASC),
  INDEX `ventas/usurios_idx` (`usuario_id` ASC),
  CONSTRAINT `ventas/productos`
    FOREIGN KEY (`producto_id`)
    REFERENCES `codear`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ventas/usurios`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `codear`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;