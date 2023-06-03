'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    openHours: DataTypes.STRING,
    deliveryFee: DataTypes.FLOAT,
    phoneNumber: DataTypes.STRING,
    tags: DataTypes.TEXT,
    minimumOrderAmount: DataTypes.FLOAT,
    about: DataTypes.TEXT,
    allergens: DataTypes.TEXT,
    hygieneRating: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};