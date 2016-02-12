'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let language = new Schema({
  name: {type: String, require: true},
  description: {type: String, require: true}
});

module.exports = mongoose.model('Language', language);
