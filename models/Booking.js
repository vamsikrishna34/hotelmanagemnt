const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Booking = sequelize.define('Booking', {
  checkInDate: { type: DataTypes.DATEONLY, allowNull: false },
  checkOutDate: { type: DataTypes.DATEONLY, allowNull: false },
  status: { type: DataTypes.ENUM('Pending', 'Confirmed', 'Cancelled'), defaultValue: 'Pending' },
  totalPrice: { type: DataTypes.DECIMAL(10, 2) }
});

module.exports = Booking;