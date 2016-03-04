var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    BoxLayout = require('./layouts/shared/BoxLayout'),
    Img = require('./layouts/shared/Img'),
    HeaderSearchLayout = require('./layouts/SearchPage/HeaderSearchLayout'),
    FlexContainerLayout = require('./layouts/shared/FlexContainerLayout'),
    Reviews = require('./layouts/shared/Reviews'),
    NavigationCategories = require('./layouts/SearchPage/NavigationCategories'),
    HeaderLayout = require('./layouts/header/HeaderLayout');

class SearchPage extends React.Component {

  getProductImage(product) {
    if(typeof(product.images) === 'undefined' )
      return 'http://www.lsa-conso.fr/mediatheque/2/5/4/000160452_74.jpg';
    return((product.images[0].imagesUrls.entry[0]).url.split('_')[0].replace(".jpg", "") + "_450_450.jpg");
  }

  getTargetUrl(key, value) {
    let currentUrl = this.props.currentUrl;
    if(currentUrl.indexOf('&' + key + '=') > -1) {
      var reg=new RegExp('&' + key + '=[^&]*', "g");
      return currentUrl.replace(reg, '&' + key + '=' + value);
    }
    return currentUrl + "&" + key + '=' + value ;
  }

  getSubFilters(key, filterValues) {
    return filterValues.map(function(filterValue) {
      let url = this.getTargetUrl(key, filterValue.value);
      return (
        <li key={filterValue.value}>
          <a href={url}>
            {filterValue.label} <span class="navCounter">({filterValue.productsCount})</span>
          </a>
        </li>
      );
    }.bind(this))
  }

  getFilters() {

    let filters = this.props.filters;

    return filters.map(function(filter) {
      return (
          <ul key={filter.name}>
            <li>
              <b>{filter.name}</b>
            </li>
            {this.getSubFilters(filter.key, filter.filterValues)}
          </ul>
      )
    }.bind(this))
  }


  render() {

    let products = this.props.products;

    return (
      <DefaultLayout title={this.props.title}>


        <HeaderLayout kw={this.props.kw}>
        </HeaderLayout>
        <FlexContainerLayout nameClass="nav">
          <BoxLayout nameClass="filterSearch">
            <NavigationCategories cats={this.props.cats} targetPageUrl={this.props.currentUrl} />

            {this.getFilters()}
          </BoxLayout>

          <BoxLayout nameClass="searchBlock">
            <HeaderSearchLayout>
            </HeaderSearchLayout>

            <FlexContainerLayout element="ul" nameClass="productListSearch">
              {products.map(function(product) {
                let url = '/product/' + product.id,
                    img = this.getProductImage(product);
                return <li key={product.id}>


              <a href={url}>
                  <div className='imgProductCtn'>
                  <Img src={img}  nameClass="imgProduct"></Img>
                  </div>
                </a>

                <div>
                  <a href={url}><h1 className="productTitle">{product.headline}</h1></a>

                  <Reviews nbReviews={product.nbReviews} reviewsAverageNote={product.reviewsAverageNote}/>
                  <p className="topic">{product.topic}</p>
                </div>
                            <a href={url}>
                              <p className="bestPrice">{product.bestPrice} €<span className="suggest">Offre suggérée</span></p>
                              <div className="marketPlace">
                                <p> <span className="price">{product.newBestPrice} €</span> neuf <span className="offers">({product.advertsNewCount} offres)</span></p>
                                <p> <span className="price">{product.usedBestPrice} €</span> d'occasion <span className="offers">({product.advertsUsedCount} offres)</span></p>
                              </div>
                            </a>


                        </li>;
              }.bind(this))}
            </FlexContainerLayout>
          </BoxLayout>
        </FlexContainerLayout>





        <script type="text/javascript" src="../js/displaySearch.js"></script>
      </DefaultLayout>
    )
  }
}

SearchPage.contextTypes = {
  kw: React.PropTypes.string
};


module.exports = SearchPage;
