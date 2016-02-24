'use strict';

class Messaging {
  constructor (jquery, Materialize) {
    this.timeout = 4000;
    this.jquery = jquery;
    this.Materialize = Materialize;

    this.appendModal();

    this.errorModal = this.jquery('#errorModal');
  }

  appendModal () {
    this.jquery('body').append(`<div id="errorModal" class="modal">
                                <div class="modal-content">
                                  <h4>Error</h4>
                                  <ul class="content"></ul>
                                </div>
                                <div class="modal-footer">
                                  <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                                </div>
                              </div>`);
  }

  toastMessage (message, toastClass) {
    this.Materialize.toast(message, this.timeout, toastClass);
  }

  toastWarningMessage(message) {
    this.toastMessage(message, 'toast-warning');
  }

  toastSuccessMessage(message) {
    this.toastMessage(message, 'toast-success');
  }

  openMessageModal (message) {
    let modalContent = this.errorModal.find('.modal-content .content');

    modalContent.empty();
    modalContent.html(message);
    this.errorModal.openModal();
  }
}

module.exports = Messaging;
