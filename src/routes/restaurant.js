const router = require('express').Router();
const passport = require('passport');

const restaurantController = require('../controllers/restaurant');

router.get('/:id', passport.authenticate('jwt', { session: false }),  restaurantController.getById);
router.get('/:id/menu', passport.authenticate('jwt', { session: false }), restaurantController.getMenuByRestaurantId);

module.exports = router;
