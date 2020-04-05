const mongoose = require('mongoose');

// Here you make schema feilds whatever you need

const FavoriteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  labels: {
    type: String,
    required: false,
  },
  calories: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('favorite', FavoriteSchema);
