// Main starting point of application
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// DB Setup


// App Setup
app.use(morgan('combined'));

// Initialise routes (prefix /api)
app.use('/api', require('./routes/api'));

// Server Setup
app.listen(process.env.port || 4000, function(){
  console.log('Server listening for requests');
});