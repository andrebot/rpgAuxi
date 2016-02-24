'use strict';

var Language = require('../models/Language');
var DataAccessObject = require('./DataAccessObject');

class LanguageDAO extends DataAccessObject {
  constructor () {
    super(Language);
  }
}

module.exports = LanguageDAO;
