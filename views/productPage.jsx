var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    FlexContainerLayout = require('./layouts/shared/FlexContainerLayout'),
    ProductDetailsLayout = require('./layouts/productPage/ProductDetailsLayout'),
    AdvertListingLayout = require('./layouts/productPage/AdvertListingLayout'),
    ProductBuyBoxLayout = require('./layouts/productPage/ProductBuyBoxLayout'),
    HeaderLayout = require('./layouts/header/HeaderLayout');

class ProductPage extends React.Component {

    render() {

        return (
            <DefaultLayout title={this.props.title}>

                <HeaderLayout>
                    <div>Hello {this.props.name} <br />This header is generated on server-side with React engine of Express</div>
                </HeaderLayout>

                <section id="prdPage" >

                    <ProductDetailsLayout product={this.props.product}>

                    </ProductDetailsLayout>

                    <FlexContainerLayout nameClass = "productPage-main">
                        <AdvertListingLayout>

                        </AdvertListingLayout>
                        <ProductBuyBoxLayout>

                        </ProductBuyBoxLayout>
                    </FlexContainerLayout>


                </section>
            </DefaultLayout>
        );
    }

}

ProductPage.contextTypes = {
  product: React.PropTypes.object
};

module.exports = ProductPage;
