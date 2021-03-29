'use strict';

let categorias = [
  {
    nombre : 'HTML y CSS',
    descripcion : ' El mundo del desarrollo web es tan amplio como la propia Internet. Gran parte de nuestra vida social y profesional se desarrolla en Internet, lo que ha fomentado la creación de nuevas industrias encaminadas a crear, administrar y depurar los sitios web y las aplicaciones de los que dependemos en cada vez mayor medida.'
  },
  {
    nombre: 'JavaScript',
    descripcion : ' JavaScript es uno de los lenguajes de programación más extendidos del mundo, sobre todo porque es la columna vertebral de las aplicaciones web interactivas. Además, JavaScript es un lenguaje estupendo para los principiantes, porque les da la oportunidad de escribir un código que hace algo visual, lo que resulta útil y motivador cuando estás dando los primeros pasos en la programación.' 
  },
  {
    nombre: 'Videojuegos',
    descripcion :' Sumergete en el mundo de desarrollo de videos juegos, de la mano de los mejores profesores del pais. '
  }
 ];
let categories = []
categorias.forEach(categoria => {
  var categorie = {
    nombre : categoria.nombre,
    descripcion : categoria.descripcion,
    createdAt : new Date,
    updatedAt : new Date
  }
  categories.push(categorie)
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Categories',categories, {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
