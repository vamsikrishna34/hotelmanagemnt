const sequelize = require('../config/database');
const Customer = require('./Customer');
const Room = require('./Room');
const Booking = require('./Booking');
const Payment = require('./Payment');


Customer.hasMany(Booking, { foreignKey: 'customerId' });
Booking.belongsTo(Customer, { foreignKey: 'customerId' });

Room.hasMany(Booking, { foreignKey: 'roomId' });
Booking.belongsTo(Room, { foreignKey: 'roomId' });

Booking.hasOne(Payment, { foreignKey: 'bookingId' });
Payment.belongsTo(Booking, { foreignKey: 'bookingId' });


sequelize.sync({ alter: true }) 
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Sync failed:', err));

module.exports = { sequelize, Customer, Room, Booking, Payment };