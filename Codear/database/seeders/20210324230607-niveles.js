'use strict';

let niveles = ['facil','intermedio','difícil'];
let levels = []
niveles.forEach(nivel => {
  var level = {
    nivel : nivel,
    createdAt : new Date,
    updatedAt : new Date
  }
  levels.push(level)
});


module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Levels',levels, {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Levels', null, {});
     
  }
};
