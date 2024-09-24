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
      createAt:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updateAt:{
        allowNull: false,
        type: Sequelize.DATE
      }
    })

  },

  async down (queryInterface, Sequelize) {
     
     
     await queryInterface.dropTable('Admins')
     
  }
};
