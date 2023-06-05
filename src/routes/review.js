const router = require('express').Router();
const passport = require('passport');

const reviewController = require('../controllers/review');

router.get('/:id', passport.authenticate('jwt', { session: false }), reviewController.getByRestaurantId);

module.exports = router;
