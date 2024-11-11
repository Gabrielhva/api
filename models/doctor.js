'use strict'
<<<<<<< HEAD


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
=======
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
>>>>>>> 1f97ac49c85e5041ba6cacdd81f70e9e37025a2a
})

module.exports = Doctor