require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();

const apiConstants = require('./constants/api');
const API_PREFIX = apiConstants.API_PREFIX;

// const productRouter = require('./routes/productRouter.js');
const restaurantRouter = require('./routes/restaurant');

const corsOptions = { origin: process.env.FRONTEND_URL };

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
// app.use('/api/products', productRouter);
app.use(`${API_PREFIX}/restaurant`, restaurantRouter);

// testing api
app.get('/', (req, res)=>{
    res.json({ message: 'hello from api' });
})

// port
const PORT = process.env.NODE_PORT || 8080;

// server
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});