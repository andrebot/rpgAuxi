'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let size = new Schema({
  name:     {type: String, require: true},
  modifier: {type: Number, require: true},
  movement: {type: Number, require: true, min: 0}
});

size.path('name').validate(function (name) {
  return name.length > 0;
}, 'Size\'s name length is less than 0.');

module.exports = mongoose.model('Size', size);
