const db = require('../models');

const getByRestaurantId = async (id) => {
  const results = await db.Review.findAll({ restaurantId: id });
  return results;
};

module.exports = {
  getByRestaurantId
};