var React = require('react'),
		TabsList = require('../shared/TabsList'),
		FlexContainerLayout = require('../shared/FlexContainerLayout'),
    BoxLayout = require('../shared/BoxLayout'),
    ProductAdvertList = require('../productPage/ProductAdvertList');

class AdvertListingLayout extends React.Component {

    render() {

      let product = this.props.product,
          adverts = product.adverts;

        return (
            <BoxLayout nameClass="listing">
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
