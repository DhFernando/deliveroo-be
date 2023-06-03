const reviewService = require('../services/review');
const restaurantService = require('../services/restaurant');
const errorMessages = require('../constants/error');

const getByRestaurantId = async (req, res) => {
  const id = req.params.id;

  try {
    const restaurant = await restaurantService.getById(id);
    const reviews = await reviewService.getByRestaurantId(id);
    res.status(200).json(reviews);
  } catch (err) {
    console.error(`[reviewController.getByRestaurantId]: id=${id} ${err.message}`);
    switch (err.message) {
      case errorMessages.RESOURCE_NOT_FOUND:
        res.status(404).send({ error: err.message });
        break;
      default:
        res.status(500).send({ error: err.message });
    }
  }
};

module.exports = {
  getByRestaurantId
};
