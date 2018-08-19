const mongoose = require('mongoose');

const request = require('../api/order');
const parseCSV = require('../utils/csvProcessor');
const { insert } = require('../database/methods');
const Order = require('./factory');
const CustomerModel = require('../models/Customer');
const OrderModel = require('../models/Order');

describe('Testing batch order insert job', () => {
  beforeAll(() => {
    const testDb = 'mongodb://localhost:27017/localztests';
    mongoose.connect(testDb);
  });

  afterAll(done => {
    mongoose.disconnect(done);
  });

  describe('Test http call to get csv file', () => {
    it('should get back status 200', async () => {
      const testUrl = 'http://127.0.0.1:5500/PartB/__test__/sample.csv';
      const response = await request.order(testUrl);

      expect(response.status).toBe(200);
    });
  });

  describe('Test csv parser', () => {
    it('should parse CSV and return js object', async () => {
      const testCSV = __dirname + '/sample.csv';
      const result = await parseCSV(testCSV, () => {});

      expect(typeof result).toBe('object');
      expect(result.length).toEqual(100);
    });
  });

  describe('Test database insert job', () => {
    beforeEach(async () => {
      const customers = [
        {
          customerId: 'abc',
          firstName: 'andrew',
          lastName: 'boogie',
        },
        {
          customerId: 'xyz',
          firstName: 'jack',
          lastName: 'welsh',
        },
      ];
      for (let i = 0; i < customers.length; i++) {
        await CustomerModel.create(customers[i]);
      }
    });

    afterEach(async () => {
      await CustomerModel.remove({ customerId: 'abc' }).exec();
      await CustomerModel.remove({ customerId: 'xyz' }).exec();
      await OrderModel.remove({ customerId: 'abc' }).exec();
      await OrderModel.remove({ customerId: 'xyz' }).exec();
    });

    it('should insert order into db if customer exists in db', async () => {
      const testOrders = [];
      for (let i = 0; i < 5; i++) {
        testOrders.push(Order.build());
        testOrders.push(Order.build({ customerId: 'xyz' }));
      }
      for (let j = 0; j < testOrders.length; j++) {
        await insert(testOrders[j]);
      }

      const orders = await OrderModel.find().exec();
      expect(orders.length).toEqual(10);
    });
  });
});
