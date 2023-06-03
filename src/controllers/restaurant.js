const restaurantService = require('../services/restaurant');
const errorMessages = require('../constants/error');

const getById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await restaurantService.getById(id);
    return res.status(200).json({ data: result });
  } catch (err) {
    console.error(`[restaurantController.getById]: id=${id} ${err.message}`);
    switch (err.message) {
      case errorMessages.RESOURCE_NOT_FOUND:
        res.status(404).send({ error: err.message });
        break;
      default:
        res.status(500).send({ error: err.message });
    }
  }

  return res;
}

const getMenuByRestaurantId = async (req, res) => {
  const id = req.params.id;

  try {
    const menu = await restaurantService.getMenuByRestaurantId(id);
    return res.status(200).json({ data: menu });
  } catch (err) {
    console.error(`[restaurantController.getById]: id=${id} ${err.message}`);
    switch (err.message) {
      case errorMessages.RESOURCE_NOT_FOUND:
        res.status(404).send({ error: err.message });
        break;
      default:
        res.status(500).send({ error: err.message });
    }
  }
}

module.exports = {
  getById,
  getMenuByRestaurantId
};
