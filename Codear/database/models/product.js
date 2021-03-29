'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category,{
        as: 'categoria',
        foreignKey : 'categoryId'
      })
      Product.belongsTo(models.Teacher,{
        as :'profesor',
        foreignKey : 'teacherId'
      })
      Product.belongsTo(models.Level,{
        as :'nivel',
        foreignKey : 'levelId'
    })
  }
  };
  Product.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descuento: DataTypes.STRING,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    publico: DataTypes.STRING,
    requisitos: DataTypes.STRING,
    resumen: DataTypes.STRING,
    lecciones:DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};