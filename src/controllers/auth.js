const userService = require('../services/user');

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await userService.createNewUser({ name, email, password });
    return res.status(201).json({ data: result });
  } catch (err) {
    console.error(`[authController.signUp]: ${err.message}`);
    switch(err.message) {
      // TODO add other cases here
      default:
        res.status(500).send({ error: err.message });
    }
  }
};

module.exports = {
  signUp
};
