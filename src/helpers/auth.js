const crypto = require('crypto');

const comparePasswords = (password, hashedPassword) => {
  const hasher = crypto.createHmac('sha256', process.env.JWT_SECRET);
  const incomingPasswordHashed = hasher.update(password).digest('hex');

  return hashedPassword === incomingPasswordHashed;
};

module.exports = {
  comparePasswords
};
