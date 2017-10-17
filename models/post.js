const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create post Schema and model
const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String
  },
  tag: {
    type: String,
    default: 'news'
  }

  // Add in geo location

});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;