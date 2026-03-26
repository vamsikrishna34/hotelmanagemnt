const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Room = sequelize.define('Room', {
  roomNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
  type: { type: DataTypes.ENUM('Single', 'Double', 'Suite'), allowNull: false },
  pricePerNight: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  isAvailable: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = Room;