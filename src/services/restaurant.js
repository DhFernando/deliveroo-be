const db = require('../models');

const errorMessage = require('../constants/error');

const getById = async (id) => {
  const result = await db.Restaurant.findByPk(id);
  console.log('res service:', result);

  if (result) {
    return result;
  } else {
    throw new Error(errorMessage.RESOURCE_NOT_FOUND);
  }
};

module.exports = {
  getById,
};