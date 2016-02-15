'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let size = new Schema({
  name:     {type: String, required: true},
  modifier: {type: Number, required: true},
  movement: {type: Number, required: true, min: 0}
});

size.path('name').validate(function (name) {
  return name.length > 0;
}, 'Size\'s name length is less than 0.');

module.exports = mongoose.model('Sizes', size);
