'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [
      {
        name: 'Tossed - St Martin\'s Lane',
        location: 'Colombo',
        openHours: 'Opens at 11:00 to 22:00',
        deliveryFee: 10,
        phoneNumber: '1234567890',
        tags: 'Chicken · Salads · Healthy',
        minimumOrderAmount: 25,
        about: 'TAll dishes may contain traces of the following allergens: Gluten, Crustaceans, Eggs, Fish, Peanuts, Soybeans, Milk, Nuts (e.g. almonds, hazelnuts, walnuts, cashews, pecan nuts, Brazil nuts, pistachio nuts, macadamia nuts), Celery, Mustard, Sesame, Sulphur dioxide/sulphites, Lupin, Molluscs. For any questions regarding the allergen contents of specific dishes please contact the restaurant directly.',
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
