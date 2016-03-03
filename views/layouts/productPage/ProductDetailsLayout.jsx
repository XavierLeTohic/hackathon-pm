var React = require('react'),
    BoxLayout = require('../shared/BoxLayout'),
    FlexContainerLayout = require('../shared/FlexContainerLayout'),
    Media = require('../shared/Media'),
    Img = require('../shared/Img'),
    TextBlock = require('../shared/TextBlock'),
    TabsList = require('../shared/TabsList'),
    BoxLayout = require('../shared/BoxLayout');

class ProductDetailsLayout extends React.Component {



    render() {

        var product = this.props.product,
            adverts = this.props.adverts,
            reviews = {
              reviews : product.reviews,
              nbr: product.nbReviews
            },
            tabsList = [
              { 'key': 1, 'name': 'Donner votre avis', 'url': '#', 'type': 'reviews','nbReviews': product.nbReviews,'reviewsAverageNote': product.reviewsAverageNote, params: reviews },
              { 'key': 2, 'name': 'Descriptif détaillé', 'url': '#' },
              { 'key': 3, 'name': 'Vendre', 'url': '#', 'type': 'btn' }
            ];

        return (
            <BoxLayout>
              <Media>
                <Img src={product.imagesUrls[0]}/>
                <TextBlock>
                  <h1>{product.headline}</h1>
                  <p>{product.caption}</p>
                </TextBlock>
              </Media>

              <TabsList reviews={reviews} tabsList={tabsList} nameClass="inlineTabs">

              </TabsList>

              {this.props.children}
            </BoxLayout>
        );
    }
}

module.exports = ProductDetailsLayout;
