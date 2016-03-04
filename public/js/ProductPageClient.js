var ProductPageClientElm = document.getElementById('prdPage'),
    ProductPageModalElm = document.getElementById('prdPageModal');

if(ProductPageClientElm !== null) {

  var ProductPageModal = React.createClass({

    createMarkup: function() {

      return {__html: ProductPageModalElm.innerHTML};
    },

    cloneModal: function() {

      return (
        <div className="modal" onClick={this.handleClick} dangerouslySetInnerHTML={this.createMarkup()}></div>
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

    handleClick: function(e) {
      var self = this,
          reviewsLnk = document.getElementById('reviewsLnk'),
          descriptifLnk = document.getElementById('descriptifLnk');

      if(e.target === reviewsLnk) {
        console.log(reviewsLnk);
        return <div>yolo</div>
      }

      else if(e.target === descriptifLnk) {
        console.log(descriptifLnk);
      }

    },

    render: function () {

      popin start
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


  /**
   * Advert listing JS
   */

  function loadAdverts() {

    var url = 'http://' + window.location.host + '/adverts/' + document.URL.split('product/')[1],
        data = "advertType=ALL&channel=hackathon&loadProductDetails=true&productId=" + document.URL.split('product/')[1],
        method = 'GET',
        async = true;

    doAjax(url, method, async, function(res) {

      if (this.readyState === 4) {

        var datas = JSON.parse(res.target.responseText),
          adverts = JSON.parse(datas),
          results = adverts.result;

        console.log(results)

      }

    }, data);
  }

  /* Scroll event on product listing */
  var advertList = document.getElementById('advertList'),
      advertListing =document.getElementById('advertListing');

  if(advertList !== null) {


    var scrollLimit = advertList.children[0].offsetHeight * 3,
        listItemCounter = 0,
        requestRunning = false;

    advertList.addEventListener('scroll', function() {

      if(advertList.scrollTop > 40) {

        advertListing.className = "box listing fadeBottom fadeTop";
      }
      else {

        advertListing.className = "box listing fadeBottom";
      }


      if(advertList.scrollTop === (advertList.scrollHeight - advertList.offsetHeight)) {
          advertListing.className = "box listing fadeTop";
      }
    });


    var adverts = document.querySelectorAll('[data-advert]');

    var bbImg = document.getElementById('prdBuyboxImg'),
        bbPrice = document.getElementById('prdBuyboxPriceValue'),
        bbQuality = document.getElementById('prdBuyboxQuality'),
        bbComment = document.getElementById('prdBuyboxSellerComment'),
        bbLogin = document.getElementById('buyboxSellerLogin'),
        bbType = document.getElementById('buyboxSellerType');

    for(var i = 0, len = adverts.length; i < len; i++) {

      var advert = adverts[i],
          datas = JSON.parse(advert.getAttribute('data-json'));

      advert.addEventListener('click', function(elm) {

        var adv = JSON.parse(elm.getAttribute('data-json')),
            selectedAdvert = document.getElementsByClassName('advertListItem selected');

        selectedAdvert[0].className = 'advertListItem';

        elm.className = 'advertListItem selected';

        if(adv.imagesUrls.length > 0) {

          bbImg.src = adv.imagesUrls[0];
        }

        bbPrice.innerHTML = adv.salePrice + ' €';

        if(adv.quality === 'NEW') {

          bbQuality.innerHTML = 'Neuf';
        }
        else if(adv.quality === 'LIKE_NEW') {

          bbQuality.innerHTML = 'Comme neuf';
        }
        else if(adv.quality === 'VERY_GOOD') {

          bbQuality.innerHTML = 'Très bon état';
        }
        else if(adv.quality === 'GOOD') {

          bbQuality.innerHTML = 'Bont état';
        }
        else if(adv.quality === 'ACCEPTABLE') {

          bbQuality.innerHTML = 'Correct';
        }

        bbLogin.innerHTML = adv.seller.login;

        if(adv.seller.type === 'PRO') {

          bbType.innerHTML = 'Vendeur Professionnel';
        }
        else if(adv.seller.type === 'INDIVIDUAL') {

          bbType.innerHTML = 'Particulier';
        }

      }.bind(this, advert));
    }
  }
}
