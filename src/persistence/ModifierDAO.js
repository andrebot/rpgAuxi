'use strict';

var Modifier = require('../models/Modifier');
var DataAccessObject = require('./DataAccessObject');

class ModifierDAO extends DataAccessObject {
  constructor () {
    super(Modifier);
  }
}

module.exports = ModifierDAO;
