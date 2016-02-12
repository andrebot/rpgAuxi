'use strict';

(function () {
  let LanguageDAO = require('../persistence/LanguageDAO');
  let mongoose    = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/rpgAuxi');

  class Language {
    constructor(name, description) {
      this.name        = ko.observable(name);
      this.description = ko.observable(description);
    }
  }

  class CreateLanguageViewModel {

    constructor () {
      this.languageDao  = new LanguageDAO();
      this.language = new Language('', '');

      this.save = function () {
        let languageJs = ko.toJS(this.language);
        this.languageDao.save(languageJs)
          .then(function(language) {
            Materialize.toast(`Language ${language.name} saved!`, 3000);
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

  ko.applyBindings(new CreateLanguageViewModel());
})();