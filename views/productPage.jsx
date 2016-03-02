var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    FlexContainerLayout = require('./layouts/shared/FlexContainerLayout'),
    ProductDetailsLayout = require('./layouts/productPage/ProductDetailsLayout'),
    AdvertListingLayout = require('./layouts/productPage/AdvertListingLayout'),
    ProductBuyBoxLayout = require('./layouts/productPage/ProductBuyBoxLayout'),
    HeaderLayout = require('./layouts/header/HeaderLayout'),
    Media = require('./layouts/shared/Media'),
    Img = require('./layouts/shared/Img'),
    TextBlock = require('./layouts/shared/TextBlock');

class ProductPage extends React.Component {

    render() {

        return (
            <DefaultLayout title={this.props.title}>

                <HeaderLayout>
                    <div>Hello {this.props.name} <br />This header is generated on server-side with React engine of Express</div>
                </HeaderLayout>

                <section id="prdPage" >

                    <ProductDetailsLayout>
                      <Media>
                        <Img src="medias/icons/piece.png"/>
                        <TextBlock>
                          <h1>Lazaretto - Ultra LP (180G)[180G]</h1>
                          <h2>Vinyle</h2>
                        </TextBlock>
                      </Media>
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

module.exports = ProductPage;