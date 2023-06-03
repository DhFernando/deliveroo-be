const crypto = require('crypto');

const db = require('../models');

const createNewUser = async (data) => {
  // TODO validation

  const hasher = crypto.createHmac('sha256', process.env.JWT_SECRET);
  const hashedPassword = hasher.update(data.password).digest('hex');

  const user = await db.User.create({ name: data.name, email: data.email, password: hashedPassword });
  return { id: user.id, name: user.name, email: user.email };
};

module.exports = {
  createNewUser
};
