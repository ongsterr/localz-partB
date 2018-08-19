const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  orderId: {
    type: String,
    unique: true,
  },
  customerId: {
    type: String,
    unique: true,
  },
  item: String,
  quantity: Number,
});

const orderModel = mongoose.model('Order', OrderSchema);

module.exports = orderModel;
