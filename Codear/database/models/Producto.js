module.exports = (sequelize, dataTypes) => {
  const alias = "Productos";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    precio: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    detalle: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    imagen: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    categorias_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };
  const config = {
    tableName: "productos",
    timestamps: false,
  };

  const Producto = sequelize.define(alias, cols, config);
  Producto.associate = (models) => {
    Producto.belongsTo(models.Categorias, {
      as: "categoria",
      foreignKey: "categorias_id",
    });
    Producto.belongsToMany(models.Usuarios, {
      as: "compras",
      through: "ventas",
      foreignKey: "producto_id",
      otherKey: "usuario_id",
      timestamps: false,
    });
  };
  return Producto;
};
