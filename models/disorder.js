'use strict'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')


class Disorder extends Model{}

Disorder.init({
    
    id: {type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    cid: DataTypes.STRING,
},{
    sequelize,
    modelName: 'Disorder'
})

module.exports = Disorder