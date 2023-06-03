const db = require('../models');

const getByMenuId = async (id) => {
  const dishes = await db.Dish.findAll({
    where: {
      menuId: id
    }
  });
  return dishes;
};

module.exports = {
  getByMenuId
};
