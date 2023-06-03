require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();

const apiConstants = require('./constants/api');
const API_PREFIX = apiConstants.API_PREFIX;

const restaurantRouter = require('./routes/restaurant');
const reviewRouter = require('./routes/review');

const corsOptions = { origin: process.env.FRONTEND_URL };

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use(`${API_PREFIX}/restaurant`, restaurantRouter);
app.use(`${API_PREFIX}/reviews`, reviewRouter);

// port
const PORT = process.env.NODE_PORT || 8080;

// server
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});