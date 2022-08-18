'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Feedbacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING(50)
      },
      lastname: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(150),
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING(20)
      },
      subjectName: {
        type: Sequelize.STRING(200)
      },
      note: {
        type: Sequelize.STRING(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Feedbacks');
  }
};