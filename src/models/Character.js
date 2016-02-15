'use strict';

let mongoose = require('mongoose');
let Schema   = mongoose.Schema;
let Benefit  = require('./Benefit');

let character = new Schema({
  age:                 {type: Number, required: true, min: 0},
  height:              {type: Number, required: true, min: 0},
  weight:              {type: Number, required: true, min: 0},
  name:                {type: String, required: true},
  alignment:           {type: String, required: true},
  gender:              {type: String, required: true},
  level:               {type: Number, default: 0, min: 0},
  homeland:            {type: String},
  hair:                {type: String},
  eyes:                {type: String},
  deity:               {type: Schema.ObjectId, ref: 'Deities'},
  race:                {type: Schema.ObjectId, ref: 'Races'},
  size:                {type: Schema.ObjectId, ref: 'Sizes'},
  movement: {
    base:              {type: Number, required: true, min: 0},
    fly: {
      base:            {type: Number, min: 0},
      maneuverability: {type: String}
    },
    modifiers:         [Benefit]
  }
  strength: {
    value:             {type: Number, min: 0},
    modifiers:         [Benefit]
  },
  dexterity: {
    value:             {type: Number, min: 0},
    modifiers:         [Benefit]
  },
  constitution: {
    value:             {type: Number, min: 0},
    modifiers:         [Benefit]
  },
  intelligence: {
    value:             {type: Number, min: 0},
    modifiers:         [Benefit]
  },
  wisdom: {
    value:             {type: Number, min: 0},
    modifiers:         [Benefit]
  },
  charisma: {
    value:             {type: Number, min: 0},
    modifiers:         [Benefit]
  },
});

module.exports = mongoose.model('Characters', character);
