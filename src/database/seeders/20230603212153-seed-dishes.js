'use strict';
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    const dishes = [];
    for (let i = 0; i < 20; i++) { 
      let dish = {
        name: faker.lorem.words({ min: 2, max: 3 }),
        menuId: Math.floor(Math.random() *4) + 1,
        imageUrl: `https://picsum.photos/2${i>9 ? i : '0'+i}`,
        description: faker.lorem.words({ min: 2, max: 3 }),
        price: faker.number.float({ min: 10, max: 100, precision: 0.01 }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      dishes.push(dish);
    }

    await queryInterface.bulkInsert('Dishes', dishes )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dishes', null, {});
  }
};
