'use strict';

var Size = require('../models/Size');
var DataAccessObject = require('./DataAccessObject');

class SizeDAO extends DataAccessObject {
  constructor () {
    super(Size);
  }
}

module.exports = SizeDAO;
