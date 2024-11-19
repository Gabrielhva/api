'use strict'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')


class Disorder extends Model{}

Disorder.init({
    
    id: {type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    cid: DataTypes.STRING,
    content: DataTypes.STRING,
},{
    sequelize,
    modelName: 'Disorder'
})

module.exports = Disorder