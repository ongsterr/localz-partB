const axios = require('axios');

const request = {
  order: async url => {
    const response = await axios({
      method: 'get',
      url,
      responseType: 'stream',
    });

    return response;
  },
};

module.exports = request;
