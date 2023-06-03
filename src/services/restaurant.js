const db = require('../models');
const menuService = require('./menu');
const errorMessage = require('../constants/error');

const getById = async (id) => {
  const result = await db.Restaurant.findByPk(id);

  if (result) {
    return result;
  } else {
    throw new Error(errorMessage.RESOURCE_NOT_FOUND);
  }
};

const getMenuByRestaurantId = async (id) => {
  const result = await db.Restaurant.findByPk(id);
  if (!result) {
    throw new Error(errorMessage.RESOURCE_NOT_FOUND);
  }

  const menu = await menuService.getByRestaurantId(id);
  return menu;
};

module.exports = {
  getById,
  getMenuByRestaurantId
};
