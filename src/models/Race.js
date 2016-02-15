'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;

let race = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  size: {type: Schema.ObjectId, ref: 'Sizes'},
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

module.exports = mongoose.model('Races', race);
