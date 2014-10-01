'use strict'

var mongoose = require('mongoose');

var holesSchema = mongoose.Schema({
  hole: String,
  par: Number
});

module.exports = mongoose.model('Hole', holesSchema);
