const fs = require("fs");
const { check, body } = require("express-validator");

const db = require("../database/models");

// const { nombre, imagen, precio, descuento, categoryId, descripcion, resumen, publico, requisitos, lecciones, levelId, teacherId } = req.body;

module.exports = [
  //Nombre de usuario
  check("nombre")
    .notEmpty()//Valida que el campo no este vacio.
    .withMessage("El nombre es requerido"), //Envia un mensaje.

  check("precio")
    .notEmpty()//Valida que el campo no este vacio.
    .withMessage("El precio es requerido"), //Envia un mensaje.
    
  check("descuento")
    .notEmpty()//Valida que el campo no este vacio.
    .withMessage("El descuento es requerido"), //Envia un mensaje.

  check("descripcion")
    .notEmpty()//Valida que el campo no este vacio.
    .withMessage("El descripcion es requerido"), //Envia un mensaje.

  check("resumen")
    .notEmpty()//Valida que el campo no este vacio.
    .withMessage("El resumen es requerido"), //Envia un mensaje.

  check("publico")
    .notEmpty()//Valida que el campo no este vacio.
    .withMessage("El publico es requerido"), //Envia un mensaje.

  check("requisitos")
    .notEmpty()//Valida que el campo no este vacio.
    .withMessage("El requisitos es requerido"), //Envia un mensaje.

  check("lecciones")
    .notEmpty()//Valida que el campo no este vacio.
    .withMessage("El lecciones es requerido"), //Envia un mensaje.

]