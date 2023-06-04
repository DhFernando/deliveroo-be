require('dotenv').config()

const passport = require('passport');
const express = require('express');
const cors = require('cors');
const app = express();

const apiConstants = require('./constants/api');
const API_PREFIX = apiConstants.API_PREFIX;

const restaurantRouter = require('./routes/restaurant');
const reviewRouter = require('./routes/review');
const authRouter = require('./routes/auth');

const { applyPassportStrategy } = require('./helpers/passport');

const corsOptions = { origin: process.env.FRONTEND_URL };

applyPassportStrategy(passport);

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use(`${API_PREFIX}/restaurant`, restaurantRouter);
app.use(`${API_PREFIX}/reviews`, reviewRouter);
app.use(`${API_PREFIX}/auth`, authRouter);

// port
const PORT = process.env.NODE_PORT || 8080;

// server
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});