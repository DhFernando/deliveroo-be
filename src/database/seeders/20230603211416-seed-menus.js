'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Menus', [
      {
        name: 'Bundles',
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Salads',
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hot Power Bowls',
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vegan Menu',
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Menus', null, {});
  }
};
