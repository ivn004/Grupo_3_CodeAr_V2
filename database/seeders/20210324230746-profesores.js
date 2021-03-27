'use strict';

const faker = require('faker');

let teachers = []

for (let i = 0; i < 10; i++) {
  
  let teacher = {
    nombre : faker.name.firstName(),
    apellido : faker.name.lastName(),
    email : faker.internet.email(),
    telefono : faker.phone.phoneNumber(),
    titulo : faker.random.words(3),
    foto : faker.image.avatar(),
    createdAt : new Date,
    updatedAt : new Date
  }

  teachers.push(teacher)
  
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Teachers',teachers, {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Teachers', null, {});
     
  }
};