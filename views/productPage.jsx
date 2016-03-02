var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    HeaderLayout = require('./layouts/header/HeaderLayout');

class ProductPage extends React.Component {

    render() {

        return (
            <DefaultLayout title={this.props.title}>
                <HeaderLayout>
                    <div>Hello {this.props.name} <br />This header is generated on server-side with React engine of Express</div>
                </HeaderLayout>
                <section id="prdPage" >
                    /*productDetails*/
                    <ProductDetailsLayout>
        
                    </ProductDetailsLayout>
                    /*Advertlisting + buybox*/
                    <FlexContainerLayout nameClass = "productPage-main">
                        <AdvertListingLayout>
                        
                        </AdvertListingLayout>
                        <BuyBoLayout>
                        
                        </BuyBoLayout>
                    </FlexContainerLayout>


                </section>
            </DefaultLayout>
        );
    }
}

module.exports = ProductPage;