'use strict'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')


class Doctor extends Model{}

Doctor.init({
    
    id: {type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    crp: DataTypes.STRING,
    classificacao: DataTypes.STRING

},{
    sequelize,
    modelName: 'Doctor'
})

module.exports = Doctor