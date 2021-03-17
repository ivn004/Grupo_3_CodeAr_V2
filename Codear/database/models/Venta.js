module.exports = (sequelize, dataTypes) => {
    const alias = 'Productos';
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : false,
            primaryKey : true,
        },
        producto_id : {
            type : dataTypes.INTEGER,
            allowNull : false,
        },
        usuario_id : {
            type : dataTypes.INTEGER,
            allowNull : false,
    
        },
        cifra : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
    }
    const config = {
        tableName : 'ventas',
        timestamps : false
    }
    
        const Venta = sequelize.define(alias, cols, config)
        return Venta
    }