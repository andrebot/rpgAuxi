'use strict';

(function () {
  let Messaging   = require('../../helpers/messaging');
  let modifierDAO = require('../../persistence/ModifierDAO');

  let mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/rpgAuxi');

  class Modifier {
    constructor(name, value, description, stack, type) {
      this.name        = ko.observable(name);
      this.value       = ko.observable(value);
      this.description = ko.observable(description);
      this.stack       = ko.observable(stack);
      this.type        = ko.observable(type);
    }

    createPath () {
      this.path = 'Talent';
    }
  }

  class CreateModifierViewModel {

    constructor () {
      this.modifier      = new Modifier('', 0, '', true, '');
      this.modifierDAO   = new modifierDAO();
      this.messaging     = new Messaging($, Materialize);
      this.modifierTypes = ko.observableArray(['Race', 'Class', 'Size', 'Talent', 'Misc']);

      this.save = function () {
        this.modifier.createPath();

        let modifierJs = ko.toJS(this.modifier);
        let self = this;
        this.modifierDAO.save(modifierJs)
          .then(function (modifierJs) {
            console.log(self.messaging);
            self.messaging.toastSuccessMessage(`Modifier ${modifierJs.name} saved!`);
          })
          .catch(function (error) {
            let errorMsg = '';

            for (let e in error.errors) {
              errorMsg = errorMsg + `<li>${e}: ${error.errors[e].message}</li>`;
            }

            self.messaging.openMessageModal(errorMsg);
          });
      };
    }
  }

  ko.applyBindings(new CreateModifierViewModel());

  $(document).ready(function() {
    $('select').material_select();
  });
})();