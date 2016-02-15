'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let benefit = new Schema({
  name:         {type: String, required: true},
  description:  {type: String, required: true},
  bonus:        {type: Number, default: 0, min: 0},
  stack:        {type: Boolean, default: true},
  modifierType: {type: }
});

module.exports = mongoose.model('Benefits', benefit);
