'use strict'


const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')


class Doctor extends Model{}

Doctor.init({
   id: {type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true
   },
   nome: DataTypes.STRING,
   crp: DataTypes.STRING,
   desordem: DataTypes.STRING,
   email: DataTypes.STRING,
   foto: DataTypes.STRING,
   senha: DataTypes.STRING,
   nascimento: DataTypes.STRING,
   telefone: DataTypes.STRING,
   type: DataTypes.STRING

},{
   sequelize,
   modelName: 'Doctor',
   timestamps:true
})


module.exports = Doctor