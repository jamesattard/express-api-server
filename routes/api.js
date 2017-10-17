const express = require('express');
const router = express.Router();

// Get a list of posts from the db
router.get('/posts', function(req, res){
  res.send({type: 'GET'});
});

// Add a new post to the db
router.post('/posts', function(req, res){
  res.send({type: 'POST'});
});

// Update a post in the db
router.put('/posts/:id', function(req, res){
  res.send({type: 'PUT'});
});

// Delete a post from the db
router.delete('/posts/:id', function(req, res){
  res.send({type: 'DELETE'});
});

module.exports = router;