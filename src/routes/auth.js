const router = require('express').Router();
const passport = require('passport');

const authController = require('../controllers/auth');

router.post('/signup', authController.signUp);
router.post('/login', authController.login);

// Testing auth
router.get('/secret', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'secret message' });
});

module.exports = router;
