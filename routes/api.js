const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get a list of posts from the db
router.get('/posts', function(req, res, next){
  // Post.find({}).then(function(posts){
  //   res.send(posts);
  // });
  Post.geoNear(
    {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 100000, spherical: true}
  ).then(function(posts){
    res.send(posts);
  });
});

// Add a new post to the db
router.post('/posts', function(req, res, next){
  Post.create(req.body).then(function(post){
    res.send(post);
  }).catch(next);
});

// Update a post in the db
router.put('/posts/:id', function(req, res, next){
  Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Post.findOne({_id: req.params.id}).then(function(post){
      res.send(post);
    });
  });
});

// Delete a post from the db
router.delete('/posts/:id', function(req, res, next){
  Post.findByIdAndRemove({_id: req.params.id}).then(function(post){
    res.send(post);
  }).catch(next);
});

module.exports = router;