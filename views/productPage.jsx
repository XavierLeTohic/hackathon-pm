var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    FlexContainerLayout = require('./layouts/shared/FlexContainerLayout'),
    ProductDetailsLayout = require('./layouts/productPage/ProductDetailsLayout'),
    AdvertListingLayout = require('./layouts/productPage/AdvertListingLayout'),
    ProductBuyBoxLayout = require('./layouts/productPage/ProductBuyBoxLayout'),
    AdvertReviewsList = require('./layouts/productPage/AdvertReviewsList'),
    HeaderLayout = require('./layouts/header/HeaderLayout'),
    ModalLayout = require('./layouts/Modal/ModalLayout'),
    DescLayout = require('./layouts/productPage/DescLayout'),
    TabsList = require('./layouts/shared/TabsList');

class ProductPage extends React.Component {

    render() {


      let tabsList = [
        { id : 'reviewsLnk',  'key': 1, 'name': 'Avis', 'url': '#modal-reviews' },
        { id : 'descriptifLnk', 'key': 2, 'name': 'Descriptif détaillé', 'url': '#modal-info' }
      ];


      return (
          <DefaultLayout title={this.props.title}>

              <HeaderLayout>
              </HeaderLayout>

              <section id="prdPage" >

                  <ProductDetailsLayout product={this.props.product}>

                  </ProductDetailsLayout>

                  <FlexContainerLayout nameClass = "productPage-main">
                      <AdvertListingLayout product={this.props.product} buybox={this.props.product.bestOffers}>

                      </AdvertListingLayout>
                      <ProductBuyBoxLayout buybox={this.props.product.bestOffers} productImage={this.props.product.imagesUrls[1]}>

                      </ProductBuyBoxLayout>
                  </FlexContainerLayout>

                <ModalLayout id="prdPageModal">
                  <TabsList tabsList={tabsList} className="inlineTabs">

                  </TabsList>
                  <AdvertReviewsList reviews={this.props.product.reviews} >

                  </AdvertReviewsList>

                  <DescLayout product={this.props.product} >

                  </DescLayout>
                </ModalLayout>

              </section>
          </DefaultLayout>
      );
    }

}

ProductPage.contextTypes = {
  product: React.PropTypes.object
};

module.exports = ProductPage;
