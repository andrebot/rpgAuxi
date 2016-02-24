'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let modifier = new Schema({
  value:       {type: Number, required: true},
  name:        {type: String, required: true},
  path:        {type: String, required: true},
  description: {type: String, required: true},
  type:        {type: String, required: true},
  stack:       {type: Boolean, default: true}
});

modifier.methods.splitPath = function() {
  return this.path.split(':');
};

module.exports = mongoose.model('Modifiers', modifier);
