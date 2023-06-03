'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      openHours: {
        type: Sequelize.STRING
      },
      deliveryFee: {
        type: Sequelize.FLOAT
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.TEXT
      },
      minimumOrderAmount: {
        type: Sequelize.FLOAT
      },
      about: {
        type: Sequelize.TEXT
      },
      allergens: {
        type: Sequelize.TEXT
      },
      hygieneRating: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Restaurants');
  }
};