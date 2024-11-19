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
       name:{
         allowNull: false,
         type: Sequelize.STRING
       },
       crp:{
         allowNull: false,
         type: Sequelize.STRING
       },
       classificacao:{
         allowNull: true,
         type:Sequelize.STRING
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
   await queryInterface.dropTable('Doctors')
 }
};


