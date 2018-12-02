console.log('Starting index.js')

const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs')

const keys = require('./config/keys')

const port = process.env.PORT || 3000;
let app = express();

app.listen(port, () => {
  console.log('Server is up on port 3000');
});
