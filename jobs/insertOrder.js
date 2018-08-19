const fs = require('fs');

require('../models/Customer');
const request = require('../api/order');
const parseCSV = require('../utils/csvProcessor');
const { insert, connect, disconnect } = require('../database/methods');

const insertOrder = (url, path, process) => {
  return new Promise(async (resolve, reject) => {
    await connect();
    const file = fs.createWriteStream(path);
    const response = await request.order(url);
    response.data.pipe(file);

    file.on('error', err => {
      console.error(err);
      reject(err);
    });

    file.on('finish', () => {
      console.log('Job completed >>>');
      resolve(process(path, insert));
      setTimeout(disconnect, 5000);
    });
  });
};

const url = 'http://127.0.0.1:5500/PartB/utils/sample.csv';
const file = './downloads/download.csv';

insertOrder(url, file, parseCSV);
