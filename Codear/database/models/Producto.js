module.exports = (sequelize, dataTypes) => {
const alias = 'Productos';
const cols = {
    id : {
        type : dataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true,
    },
    nombre : {
        type : dataTypes.STRING(45),
        allowNull : false,
    },
    precio : {
        type : dataTypes.INTEGER(11),
        allowNull : false,

    },
    detalle : {
        type : dataTypes.STRING(45),
        allowNull : false
    },
    imagen : {
        type : dataTypes.STRING(45),
        allowNull : false,
    },
    categorias_id : {
        type : dataTypes.INTEGER,
        allowNull : false,
    },
}
const config = {
    tableName : 'productos',
    timestamps : false
}

    const Producto = sequelize.define(alias, cols, config)
    return Producto
}