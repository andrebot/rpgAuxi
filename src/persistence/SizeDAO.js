'use strict';

let Size = require('../models/Sizes');

class SizeDAO {
  constructor () {
    
  }

  findAll () {
    return new Promise(function (fulfill, reject) {
      Size.find({}, function (error, sizes) {
        if (error) {
          reject(error);
        } else {
          fulfill(sizes);
        }
      });
    });
  }

  save (size) {
    return new Promise(function (fulfill, reject) {
      let newSize = new Size(size);

      newSize.save(function (error) {
        if (error) {
          reject(error);
        } else {
          fulfill(newSize);
        }
      });
    });
  }
}

module.exports = SizeDAO;
