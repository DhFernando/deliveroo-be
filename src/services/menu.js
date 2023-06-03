const db = require('../models');
const dishService = require('./dish');

const getByRestaurantId = async (id) => {
  console.log('finding for res', id);
  const menus = await db.Menu.findAll({
    where: {
      restaurantId: id,
    },
    raw: true
  });

  const detailedMenu = [];
  for (let menu of menus) {
    const dishes = await dishService.getByMenuId(menu.id);
    detailedMenu.push({ ...menu, dishes });
  }

  return detailedMenu;
};

module.exports = {
  getByRestaurantId
};
