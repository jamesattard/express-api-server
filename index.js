// Main starting point of application
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// DB Setup


// App Setup
app.use(morgan('combined'));

app.get('/api', function(req, res){
  res.send({'type': 'GET request'});
});

// Server Setup
app.listen(process.env.port || 4000, function(){
  console.log('Server listening for requests');
});