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
        { id : 'reviewsLnk',  'key': 1, 'name': 'Avis', 'url': '#modal-reviews', className : 'active' },
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
                      <ProductBuyBoxLayout buybox={this.props.product.bestOffers} productImage={(this.props.product.imagesUrls.length > 0 ? this.props.product.imagesUrls[0] : 'http://pmcdn.staticpmrk.com/rakuten-static-deliver/app/285.0.0/2014121801/res/pm/front/brand/www/images/i18n/fr/cover_ML.gif')}>

                      </ProductBuyBoxLayout>
                  </FlexContainerLayout>

                <ModalLayout id="prdPageModal">
                  <TabsList tabsList={tabsList} className="inlineTabs">

                  </TabsList>
                  <h1 className="modalTitle"> Avis sur {this.props.product.headline}  </h1>
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
