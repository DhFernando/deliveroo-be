const router = require('express').Router();

const restaurantController = require('../controllers/restaurant');

router.get('/:id', restaurantController.getById);

module.exports = router;
