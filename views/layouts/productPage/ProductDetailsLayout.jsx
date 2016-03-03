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
              reviewsAverageNote: product.reviewsAverageNote,
              nbr: product.nbReviews,
              modalID : 'prdPageModal'
            },
            tabsList = [
              { 'key': 1, 'name': 'Donner votre avis', 'url': '#', 'type': 'reviews', params: reviews },
              { 'key': 2, 'name': 'Descriptif détaillé', 'url': '#' },
              { 'key': 3, 'name': 'Vendre', 'url': '#', 'type': 'btn', className : 'btn btn-sell' }
            ];

        return (
            <BoxLayout nameClass="prdDetails">
              <Media nameClass="prdTitle">
                <Img src={product.images[0].imagesUrls.entry[1].url} nameClass="imgProduct"/>
                <TextBlock>
                  <h1>{product.headline}</h1>
                  <p>{product.caption}</p>
                </TextBlock>
              </Media>

              <TabsList reviews={reviews} tabsList={tabsList} className="inlineTabs tabsPrdDetail">

              </TabsList>

              {this.props.children}
            </BoxLayout>
        );
    }
}

module.exports = ProductDetailsLayout;
