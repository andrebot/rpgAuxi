'use strict';

let mongoose = require('mongoose');
let Modifier = require('./Modifier');
let Schema   = mongoose.Schema;

let character = new Schema({
  age:                   {type: Number, required: true, min: 0},
  height:                {type: Number, required: true, min: 0},
  weight:                {type: Number, required: true, min: 0},
  name:                  {type: String, required: true},
  alignment:             {type: String, required: true},
  gender:                {type: String, required: true},
  level:                 {type: Number, default: 0, min: 0},
  homeland:              {type: String},
  hair:                  {type: String},
  eyes:                  {type: String},
  deity:                 {type: Schema.ObjectId, ref: 'Deities'},
  race:                  {type: Schema.ObjectId, ref: 'Races'},
  size:                  {type: Schema.ObjectId, ref: 'Sizes'},
  characterClass:        {type: Schema.ObjectId, ref: 'CharacterClasses'},
  strengthRaw:           {type: Number, min: 0},
  dexterityRaw:          {type: Number, min: 0},
  constitutionRaw:       {type: Number, min: 0},
  intelligenceRaw:       {type: Number, min: 0},
  wisdomRaw:             {type: Number, min: 0},
  charismaRaw:           {type: Number, min: 0},
  equippedArmor:         Armor.Schema,
  weaponEquiped:         Weapon.Schema,
  movement: {
    base:                {type: Number, required: true, min: 0},
    fly: {
      base:              {type: Number, min: 0},
      maneuverability:   {type: String}
    }
  },
  modifiers:             {}
});

character.methods.findModifier = function(pathToModifier) {
  let splitPath = pathToModifier.split(':');
  let copiedModifiers = this.modifiers; //Not really copied, I still need its references    ;-)

  while (splitPath.length > 0) {
    try {
      copiedModifiers = copiedModifiers[splitPath.shift()];
    } catch (error) {
      return null;
    }
  }
  
  return copiedModifiers;
};

module.exports = mongoose.model('Characters', character);
