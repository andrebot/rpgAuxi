'use strict';

(function () {
  let SizeDAO = require('../../persistence/SizeDAO');

  class CreateRaceViewModel {

    constructor(){
      this.sizeDao = new SizeDAO();
      this.name = ko.observable('');
      this.availableSizes = ko.observableArray();
      this.selectedSize = ko.observable();

      let self = this;
      this.sizeDao.findAll()
        .then(function (sizes) {
          for (let s in sizes) {
            self.availableSizes.push(sizes[s]);
            $('select').material_select();
          }
        })
        .catch(function (error) {
          console.log('An error Occured!');
          console.log(error);
        });
    }
  }

  ko.applyBindings(new CreateRaceViewModel());
})();