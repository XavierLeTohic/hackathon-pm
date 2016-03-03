var ProductPageClientElm = document.getElementById('prdPage'),
    ProductPageModalElm = document.getElementById('prdPageModal');

if(ProductPageClientElm !== null) {

  var ProductPageModal = React.createClass({

    createMarkup: function() {

      return {__html: ProductPageModalElm.innerHTML};
    },

    cloneModal: function() {

      return (
        <div className="modal" dangerouslySetInnerHTML={this.createMarkup()}></div>
      )
    },

    openModal: function() {
      this.modalIsOpen = true;
      this.modalCtn.className = 'modal-backdrop show';
    },

    closeModal: function() {
      this.modalIsOpen = false;
      this.modalCtn.className = 'modal-backdrop';
    },

    registerModalHandler: function() {

      var elms = document.querySelectorAll('[data-modal="' + ProductPageModalElm.getAttribute('id') + '"]');

      if(elms.length > 0) {

        for(var i = 0, len = elms.length; i < len; i++) {

          elms[i].addEventListener('click', function() {

            this.openModal();

          }.bind(this));
        }
      }
    },

    handleClose: function() {

      var self = this;

      ProductPageModalElm.addEventListener('click', function(e) {

        if(e.target === ProductPageModalElm) {

          self.closeModal();
        }
      });
    },

    render: function () {

      console.log('render');

      this.modalIsOpen = false;
      this.modalCtn = ProductPageModalElm;

      this.cloneModal();
      this.registerModalHandler();
      this.handleClose();

      return (
        this.cloneModal()
      );
    }
  });

  ReactDOM.render(<ProductPageModal />, ProductPageModalElm);
}
