'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dishes', [
      {
        name: 'Salad Bundle',
        menuId: 1,
        imageUrl: 'https://picsum.photos/200',
        description: 'Sample description',
        price: 14.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chipotle salad',
        menuId: 2,
        imageUrl: 'https://picsum.photos/201',
        description: 'Sample description',
        price: 11.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mighty Mexican',
        menuId: 3,
        imageUrl: 'https://picsum.photos/203',
        description: 'Sample description',
        price: 11.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Create your own salad',
        menuId: 4,
        imageUrl: 'https://picsum.photos/204',
        description: 'Sample description',
        price: 7.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dishes', null, {});
  }
};
