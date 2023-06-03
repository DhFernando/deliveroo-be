const router = require('express').Router();

const reviewController = require('../controllers/review');

router.get('/:id', reviewController.getByRestaurantId);

module.exports = router;
