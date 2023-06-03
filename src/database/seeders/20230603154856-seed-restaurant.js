'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [
      {
        name: 'Seed restaurant',
        location: 'Colombo',
        openHours: 'Morning to midnight',
        deliveryFee: 10,
        phoneNumber: '1234567890',
        tags: 'these,are,some,tags',
        minimumOrderAmount: 25,
        about: 'This is some text about the restaurant',
        allergens: 'Information about the allergens in food',
        hygieneRating: 4,
        notes: 'These are the notes about the restaurant',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
