'use strict';

let Language = require('../models/Language');

class LanguageDAO {
  constructor () {
  }

  findAll () {
    return new Promise(function (fulfill, reject) {
      Language.find({}, function (error, languages) {
        if (error) {
          reject(error);
        } else {
          fulfill(languages);
        }
      });
    });
  }

  save (language) {
    return new Promise(function (fulfill, reject) {
      let newLanguage = new Language(language);

      newLanguage.save(function (error) {
        if (error) {
          reject(error);
        } else {
          fulfill(newLanguage);
        }
      });
    });
  }
}

module.exports = LanguageDAO;
