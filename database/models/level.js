'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
  


    static associate(models){
      Level.hasMany(models.Product,{
        as :'cursos'
    })
    }
  };
  Level.init({
    nivel: DataTypes.STRING
  },{
    sequelize,
    modelName:'Level',
  });
  return Level;
};