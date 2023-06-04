const jwt = require('jsonwebtoken');

const db = require('../models');
const userService = require('./user');
const { comparePasswords } = require('../helpers/auth');
const errorMessage = require('../constants/error');

const login = async (email, password) => {
  const user = await userService.findByEmail(email);

  const isPasswordsMatching = comparePasswords(password, user.password);
  if (isPasswordsMatching) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    const response = {
      name: user.name,
      email: user.email,
      token
    };

    return response;
  } else {
    throw new Error(errorMessage.WRONG_PASSWORD);
  }
};

module.exports = {
  login
};
