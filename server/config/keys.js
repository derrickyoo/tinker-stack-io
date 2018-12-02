console.log('Starting config/keys.js');

const dotenv = require('dotenv');
dotenv.load();

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
