const mongoose = require('mongoose');

const Order = require('../models/Order');
require('../models/Customer');
const Customer = mongoose.model('Customer');

const db = {
  insert: async order => {
    const customer = await Customer.findOne({
      customerId: order.customerId,
    }).exec();

    if (customer) {
      await Order.create(order);
    }
  },
  connect: () => {
    const isProduction = process.env.NODE_ENV === 'production';
    const dbState = mongoose.connection.readyState;
    const options = {
      useNewUrlParser: true,
      autoIndex: false,
      reconnectInterval: 500,
      poolSize: 10,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      socketTimeoutMS: 120000, // Close sockets after 120 seconds of inactivity
      family: 4,
    };

    if (isProduction && dbState === 0) {
      mongoose.connect(
        dbUrl,
        options
      );
    } else if (dbState === 0) {
      mongoose.connect(
        'mongodb://localhost:27017/localz',
        options
      );
    }
    mongoose.connection.on('connected', () => {
      console.log(`\nMongodb connected to: mongodb://localhost:27017/localz\n`);
    });
    mongoose.connection.on('error', err => {
      console.error(e);
    });
  },
  disconnect: () => {
    mongoose.disconnect();
  },
};

module.exports = db;
