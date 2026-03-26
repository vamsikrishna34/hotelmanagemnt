const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  method: { type: DataTypes.ENUM('Credit Card', 'Debit Card', 'Cash'), allowNull: false },
  status: { type: DataTypes.ENUM('Paid', 'Pending', 'Failed'), defaultValue: 'Pending' },
  transactionDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Payment;