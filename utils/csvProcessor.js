var parse = require('csv-parse');
const fs = require('fs');
const config = require('../config').csv;

const parseCSV = (file, insert) => {
  return new Promise((resolve, reject) => {
    const output = [];
    const parser = parse(config);

    parser.on('data', line => {
      insert(line);
      output.push(line);
    });

    parser.on('error', err => {
      console.error(err.message);
      reject(err);
    });

    parser.on('end', () => {
      parser.end();
      resolve(output);
    });

    fs.createReadStream(file).pipe(parser);
  });
};

module.exports = parseCSV;
