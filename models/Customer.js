const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSchema = new Schema({
  customerId: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
    lowercase: true,
  },
  lastName: {
    type: String,
    lowercase: true,
  },
});

const customerModel = mongoose.model('Customer', CustomerSchema);

module.exports = customerModel;
