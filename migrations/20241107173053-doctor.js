'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Doctors',{
     id:{
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
       },
       nome:{
         allowNull: false,
         type: Sequelize.STRING
       },
       crp:{
         allowNull: false,
         type: Sequelize.STRING
       },
       email:{
         allowNull: true,
         type:Sequelize.STRING
       },
       desordem:{
        allowNull: false,
        type: Sequelize.STRING
      },
      foto:{
        allowNull: false,
        type: Sequelize.STRING
      },
      senha:{
        allowNull: false,
        type: Sequelize.STRING
      },
      nascimento:{
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone:{
        allowNull: true,
        type:Sequelize.STRING
      },



   })


 },


 async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Doctors')
 }
};


