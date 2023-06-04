const { ExtractJwt, Strategy } = require('passport-jwt');

const userService = require('../services/user');

const applyPassportStrategy = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  }

  passport.use(
    new Strategy(options, (payload, done) => {
      const user = userService.findByEmail(payload.email);
      if (user) {
        console.log("[AUTH]: emails matched");
        return done(null, { email: payload.email });
      }

      return done(null, false);
    })
  );
};

module.exports = {
  applyPassportStrategy
};
