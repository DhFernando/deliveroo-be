const userService = require('../services/user');
const authService = require('../services/auth');
const errorMessage = require('../constants/error');

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await userService.createNewUser({ name, email, password });
    return res.status(201).json({ data: result });
  } catch (err) {
    console.error(`[authController.signUp]: ${err.message}`);
    switch(err.message) {
      default:
        res.status(500).send({ error: err.message });
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await authService.login(email, password);
    return res.status(200).json({ data: result });
  } catch (err) {
    console.error(`[authController.login]: ${err.message}`);
    switch(err.message) {
      case errorMessage.WRONG_PASSWORD:
        res.status(401).send({ error: err.message });
        break;
      default:
        res.status(500).send({ error: err.message });
    }
  }
};

module.exports = {
  signUp,
  login
};
