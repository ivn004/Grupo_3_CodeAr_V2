'use strict';

const faker = require('faker');
const controlador = require('../../data/products');
const productos = controlador.getProducts();

let products = []

productos.forEach(producto => {
  let curso = {
  nombre : producto.nombreCurso,
  precio : producto.precio,
  descuento : faker.random.number({min:5,max:20}),
  imagen : producto.fotoCurso,
  descripcion : producto.descripcionCorta,
  publico : producto.aQuienEstaDirigido,
  requisitos : producto.requisitos,
  resumen : producto.etiquetaCurso,
  lecciones : +producto.cantidadDeCapitulos,
  categoryId : faker.random.number({min:1,max:3}),
  teacherId : faker.random.number({min:1,max:10}),
  levelId: faker.random.number({min:1,max:3}),
  createdAt : new Date,
  updatedAt : new Date
  }
  products.push(curso)
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Products',products, {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Products', null, {});
     
  }
};