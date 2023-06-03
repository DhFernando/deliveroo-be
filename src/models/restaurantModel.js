const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  const Restaurant = sequelize.define('Restaurant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    openHours: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deliveryFee: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    minimumOrderAmount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    allergens: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hygieneRating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Restaurant;
}
