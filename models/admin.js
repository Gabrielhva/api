'use strict'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')


class Admin extends Model{}

Admin.init({
    
    id: {type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    crp: DataTypes.STRING,
    datanasc: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    desordem: DataTypes.STRING,
    foto: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    nameclinic: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
},{
    sequelize,
    modelName: 'Admin'
})


module.exports = Admin