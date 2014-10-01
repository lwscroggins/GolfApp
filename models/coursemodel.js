'use strict'

var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  name: String,
  city: String,
  state: String,
  size: String,
  holes: Hole
});

module.exports = mongoose.model('Course', courseSchema);
