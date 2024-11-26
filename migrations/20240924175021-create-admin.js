'use strict';

const sequelize = require('../config/database');
const { primaryKeyAttribute } = require('../models/admin');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Admins', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING
      },
      email:{
        allowNull: false,
        type: Sequelize.STRING
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING
      },
      crp:{
        allowNull: false,
        type: Sequelize.STRING
      },
      datanasc:{
        allowNull: false,
        type: Sequelize.DATE
      },
      telefone:{
        allowNull: false,
        type: Sequelize.STRING
      },
      desordem:{
        allowNull: false,
        type: Sequelize.STRING
      },
      foto:{
        allowNull: false,
        type: Sequelize.STRING
      },
      cnpj:{
        allowNull: false,
        type: Sequelize.STRING
      },
      nameclinic:{
        allowNull: false,
        type: Sequelize.STRING
      },
      cep:{
        allowNull: false,
        type: Sequelize.STRING
      },
      cidade:{
        allowNull: false,
        type: Sequelize.STRING
      },
      estado:{
        allowNull: false,
        type: Sequelize.STRING
      },
      endereco:{
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE
      }
    })

  },

  async down (queryInterface, Sequelize) {
     
     
     await queryInterface.dropTable('Admins')
     
  }
};
