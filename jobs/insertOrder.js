const fs = require('fs');

const request = require('../api/order');
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

module.exports = insertOrder;
