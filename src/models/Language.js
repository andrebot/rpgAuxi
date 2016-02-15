'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let language = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true}
});

module.exports = mongoose.model('Languages', language);
