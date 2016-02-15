'use strict';

(function () {
  let SizeDAO = require('../../persistence/SizeDAO');

  class Size {
    constructor(name, modifier, movement) {
      this.name     = ko.observable(name);
      this.modifier = ko.observable(modifier);
      this.movement = ko.observable(movement);
    }
  }

  class CreateSizeViewModel {

    constructor () {
      this.sizeDao  = new SizeDAO();
      this.size = new Size('', 0, 0);

      this.save = function () {
        let sizeJs = ko.toJS(this.size);
        this.sizeDao.save(sizeJs)
          .then(function(size) {
            Materialize.toast(`Size ${size.name} saved!`, 3000);
          })
          .catch(function (error) {
            let errorMsg = '';
            let modalContent = $('#errorModal .modal-content .content');

            for (let e in error.errors) {
              errorMsg = errorMsg + `<li>${e}: ${error.errors[e].message}</li>`;
            }

            modalContent.empty();
            modalContent.html(errorMsg);
            $('#errorModal').openModal();
          });
      };
    }
  }

  ko.applyBindings(new CreateSizeViewModel());
})();