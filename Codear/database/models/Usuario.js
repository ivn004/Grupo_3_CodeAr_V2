module.exports = (sequelize, dataTypes) => {
    const alias = 'Usuarios';
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
        email : {
            type : dataTypes.STRING(45),
            allowNull : false,
            unique : true,
    
        },
        telefono : {
            type : dataTypes.STRING(45),
            allowNull : false,
            defaultValue : ""
        },
        password : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
       
    avatar : {
        type : dataTypes.STRING(45),
        allowNull : true,

    }
};
    const config = {
        tableName : 'usuarios',
        timestamps : true,
        underscored : true
    }
    
        const Usuario = sequelize.define(alias, cols, config)
        return Usuario
    }