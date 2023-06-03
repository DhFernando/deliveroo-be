'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const seedReviews = [];
    for (let i = 0; i < 50; i++) {
      const review = {
        customerName: faker.person.fullName(),
        stars: Math.floor(Math.random() * 5) + 1,
        date: faker.date.recent(),
        content: faker.lorem.sentences(),
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      seedReviews.push(review);
    }

    await queryInterface.bulkInsert('Reviews', seedReviews);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
