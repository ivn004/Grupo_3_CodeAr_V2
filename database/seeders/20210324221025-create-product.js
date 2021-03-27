'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.INTEGER
      },
      descuento: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      publico: {
        type: Sequelize.STRING
      },
      requisitos: {
        type: Sequelize.STRING(500)
      },
      resumen: {
        type: Sequelize.STRING
      },
      lecciones : {
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : 'categories'
          },
          key : 'id'
        }
      },
      teacherId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'teachers'
          },
          key : 'id'
        }
      },
      levelId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'levels'
          },
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};