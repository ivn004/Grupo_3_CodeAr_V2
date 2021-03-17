module.exports = (sequelize, dataTypes) => {
    const alias = 'Categorias';
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
        },
        descripcion : {
            type : dataTypes.STRING(45),
            allowNull : false,
        }
    }

const config = {
    tableName : 'categorias',
    timestamps : false
}

    const Categoria = sequelize.define(alias, cols, config)
    return Categoria
}