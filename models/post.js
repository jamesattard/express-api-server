const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number], // Array of numbers type
    index: "2dsphere"
  }
});

// Create post Schema and model
const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String
  },
  publish: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;