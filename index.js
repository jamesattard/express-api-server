// Main starting point of application
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// DB Setup
mongoose.connect('mongodb://localhost/posts');
mongoose.Promise = global.Promise;

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json());

// Initialise routes (prefix /api)
app.use('/api', require('./routes/api'));

// Server Setup
app.listen(process.env.port || 4000, function(){
  console.log('Server listening for requests');
});