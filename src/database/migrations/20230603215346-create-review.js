'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerName: {
        type: Sequelize.STRING
      },
      stars: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      tags: {
        type: Sequelize.TEXT
      },
      restaurantId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'restaurants'
          },
          key: 'id'
        }
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
    await queryInterface.dropTable('Reviews');
  }
};