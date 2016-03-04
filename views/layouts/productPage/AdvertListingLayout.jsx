var React = require('react'),
		TabsList = require('../shared/TabsList'),
		FlexContainerLayout = require('../shared/FlexContainerLayout'),
    BoxLayout = require('../shared/BoxLayout'),
    ProductAdvertList = require('../productPage/ProductAdvertList');

class AdvertListingLayout extends React.Component {

    getAdvertBuyBox(buybox) {
      return (typeof buybox.new !== 'undefined' ? buybox.new.adverts[0] : buybox.used.adverts[0]);
    }

    render() {

      let product = this.props.product,
          adverts = product.adverts,
          buyboxAdvert = this.getAdvertBuyBox(this.props.buybox);

      for(var i in adverts) {

        if(adverts[i].advertId === buyboxAdvert.advertId) {

          delete adverts[i];
        }
      }

      buyboxAdvert.selected = true;
      adverts.unshift(buyboxAdvert);

        return (
            <BoxLayout nameClass="listing fadeBottom" id="advertListing">
            		<FlexContainerLayout type="header" nameClass="listing-header">
            			<p className="label">{product.advertsCount} annonces</p>
            			<a href="#">Filter</a>
            		</FlexContainerLayout>
            		<ProductAdvertList adverts={adverts}>

                </ProductAdvertList>
                {this.props.children}
            </BoxLayout>
        );
    }
};

module.exports = AdvertListingLayout;
