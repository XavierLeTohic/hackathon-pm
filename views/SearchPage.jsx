var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    BoxLayout = require('./layouts/shared/BoxLayout'),
    Img = require('./layouts/shared/Img'),
    HeaderSearchLayout = require('./layouts/SearchPage/HeaderSearchLayout'),
    FlexContainerLayout = require('./layouts/shared/FlexContainerLayout'),
    HeaderLayout = require('./layouts/header/HeaderLayout');

class SearchPage extends React.Component {

  getProductImage(product) {
    return(product.images[0].imagesUrls.entry[1].url);
  }

  render() {

    let products = this.props.products;



    return (
      <DefaultLayout title={this.props.title}>

        <HeaderLayout kw={this.props.kw}>
        </HeaderLayout>

        <BoxLayout nameClass="searchBlock">
          <HeaderSearchLayout>
          </HeaderSearchLayout>


          <FlexContainerLayout element="ul" nameClass="productListSearch">
            {products.map(function(product) {
              let url = '/product/' + product.id,
                  img = this.getProductImage(product);
              return <li key={product.id}>


                          <a href={url}><div className='imgProductCtn'>

                            <Img src={img}  nameClass="imgProduct"></Img>

                          </div></a>
                          <a href={url}><h1 className="productTitle">{product.headline}</h1></a>
                          <a href="#" className="avis">{product.nbReviews} Avis</a>
                          <a href={url}>
                            <p className="topic">{product.topic}</p>
                            <p className="bestPrice">{product.bestPrice} €<span className="suggest">Offre suggérées</span></p>
                            <div className="marketPlace">
                              <p> <span className="price">{product.newBestPrice} €</span> neuf <span className="offers">({product.advertsNewCount} offres)</span></p>
                              <p> <span className="price">{product.usedBestPrice} €</span> d'occasion <span className="offers">({product.advertsUsedCount} offres)</span></p>
                            </div>
                          </a>



                      </li>;
            }.bind(this))}
          </FlexContainerLayout>
        </BoxLayout>





      </DefaultLayout>
    )
  }
}

SearchPage.contextTypes = {
  kw: React.PropTypes.string
};


module.exports = SearchPage;
