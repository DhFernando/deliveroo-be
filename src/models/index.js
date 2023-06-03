const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
    .then(()=>{
        console.log('connection established');
    })
    .catch(err => {
        console.error(err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Products = require('./productModel.js')(sequelize, DataTypes); // TODO
db.Reviews = require('./reviewModel.js')(sequelize, DataTypes); // TODO
db.Restaurant = require('./restaurantModel')(sequelize);

db.sequelize.sync({ force: false })
    .then(()=>{ console.log('re-sync done!') });

module.exports = db;