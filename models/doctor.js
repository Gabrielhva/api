'use strict'


const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')


class Doctor extends Model{}


Doctor.init({
   name: DataTypes.STRING,
   crp: DataTypes.STRING,
   classificacao: DataTypes.STRING
},{
   sequelize,
   modelName: 'Doctor',
   timestamps:true
})

module.exports = Doctor