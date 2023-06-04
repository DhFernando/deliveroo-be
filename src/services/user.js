const crypto = require('crypto');

const db = require('../models');
const errorMessage = require('../constants/error');

const createNewUser = async (data) => {
  const hasher = crypto.createHmac('sha256', process.env.JWT_SECRET);
  const hashedPassword = hasher.update(data.password).digest('hex');

  const user = await db.User.create({ name: data.name, email: data.email, password: hashedPassword });
  return { id: user.id, name: user.name, email: user.email };
};

const findByEmail = async (email) => {
  const user = db.User.findOne({
    where: {
      email: email
    }
  });

  if (user) {
    return user;
  } else {
    throw new Error(errorMessage.RESOURCE_NOT_FOUND);
  }
};

module.exports = {
  createNewUser,
  findByEmail
};
