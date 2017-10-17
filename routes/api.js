const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get a list of posts from the db
router.get('/posts', function(req, res){
  res.send({type: 'GET'});
});

// Add a new post to the db
router.post('/posts', function(req, res){
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    tag: req.body.tag
  });

  // Save to database
  post.save(function(){
    // Respond to request indicating the post was created
    res.json(post);
  });
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