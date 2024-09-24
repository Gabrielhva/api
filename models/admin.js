'use strict'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')


class Admin extends Model{}

Admin.init({
    
    id: {type: DataTypes.STRING,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING

},{
    sequelize,
    modelName: 'Admin'
})


module.exports = Admin