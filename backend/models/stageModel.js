const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

const Stage = mongoose.model('Stage', stageSchema);

module.exports = Stage;
