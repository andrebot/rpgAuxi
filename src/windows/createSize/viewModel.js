'use strict';

(function () {
  let SizeDAO   = require('../../persistence/SizeDAO');
  let Messaging = require('../../helpers/messaging');

  class Size {
    constructor(name, modifier, movement) {
      this.name           = ko.observable(name);
      this.modifier       = ko.observable(modifier);
      this.movement       = ko.observable(movement);
      this.modifiersArray = ko.observableArray();
    }

    tranformModifiers () {
      let modifiersArray = this.modifiersArray().splice();
      this.modifiers = {};

      while (modifiersArray.length > 0) {
        let modifier  = modifiersArray.shift();
        let paths     = modifier.splitPath();
        let reference = newModifiers;

        while (paths.length > 1) {
          let path = paths.shift();
          if (reference[path]) {
            reference = reference[path];
          } else {
            reference[path] = {};
          }
        }

        if (reference[path[0]]) {
          reference[path[0]].push(modifier);
        } else {
          reference[path[0]] = [modifier];
        }
      }
    }
  }

  class CreateSizeViewModel {

    constructor () {
      this.modifiersAvailable = ko.observableArray();
      this.sizeDao            = new SizeDAO();
      this.size               = new Size('', 0, 0);
      this.messaging          = new Messaging($);

      this.save = function () {
        this.size.tranformModifiers();
        let sizeJs = ko.toJS(this.size);
        delete sizeJs.modifiersArray;

        this.sizeDao.save(sizeJs)
          .then(function(size) {
            this.messaging.toastSuccessMessage(`Size ${size.name} saved!`);
          })
          .catch(function (error) {
            let errorMsg = '';

            for (let e in error.errors) {
              errorMsg = errorMsg + `<li>${e}: ${error.errors[e].message}</li>`;
            }

            this.messaging.openMessageModal(errorMsg);
          });
      };
    }
  }

  ko.applyBindings(new CreateSizeViewModel());
})();