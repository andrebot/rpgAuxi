'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let race = new Schema({
  name: {type: String, require: true},
  description: {type: String, require: true},
  size: {
    name:     {type: String, require: true},
    modifier: {type: Number, require: true},
    movement: {type: Number, require: true}
  },
  languages: [String],
  weaponsFamiliarity: [String]
});

race.virtual('maleFaceImg').get(function () {
  return `Male${this.name.replace('-', '')}Face.png`;
});

race.virtual('femaleFaceImg').get(function () {
  return `Female${this.name.replace('-', '')}Face.png`;
});

race.virtual('maleBodyImg').get(function () {
  return `Male${this.name.replace('-', '')}Body.png`;
});

race.virtual('femaleBodyImg').get(function () {
  return `Female${this.name.replace('-', '')}Body.png`;
});

module.exports = mongoose.model('Race', race);
