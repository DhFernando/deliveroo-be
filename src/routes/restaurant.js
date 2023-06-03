const router = require('express').Router();

const restaurantController = require('../controllers/restaurant');

router.get('/:id', restaurantController.getById);
router.get('/:id/menu', restaurantController.getMenuByRestaurantId);

module.exports = router;
