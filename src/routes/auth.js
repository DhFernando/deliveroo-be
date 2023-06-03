const router = require('express').Router();

const authController = require('../controllers/auth');

router.post('/signup', authController.signUp);

module.exports = router;
