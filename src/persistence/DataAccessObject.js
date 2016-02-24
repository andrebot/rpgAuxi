'use strict';

class DataAccessObject {
  constructor (model) {
    this.model = model;
  }

  findAll () {
    return new Promise(function (fulfill, reject) {
      this.model.find({}, function (error, sizes) {
        if (error) {
          reject(error);
        } else {
          fulfill(sizes);
        }
      });
    });
  }

  save (documentData) {
    console.log('Entrou aqui');
    let self = this;
    return new Promise(function (fulfill, reject) {
      let newDocument = new self.model(documentData);

      newDocument.save(function (error) {
        if (error) {
          console.log('a merda ai', error);
          reject(error);
        } else {
          console.log('salvou ai manolo');
          fulfill(newDocument);
        }
      });
    });
  }
}

module.exports = DataAccessObject;
