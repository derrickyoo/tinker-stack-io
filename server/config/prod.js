console.log('Starting config/prod.js');

const dotenv = require('dotenv');
dotenv.load()

module.exports = { 
  NODE_ENV: process.env.NODE_ENV
}
