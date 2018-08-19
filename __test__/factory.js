const Factory = require('rosie').Factory;
const faker = require('faker');

module.exports = Factory.define('order').attrs({
  orderId: () => {
    return faker.random.uuid();
  },
  customerId: 'abc',
  item: () => {
    return faker.commerce.product();
  },
  quantity: () => {
    return faker.random.number();
  },
});
