var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    BoxLayout = require('./layouts/shared/BoxLayout'),
    Img = require('./layouts/shared/Img'),
    HeaderSearchLayout = require('./layouts/SearchPage/HeaderSearchLayout'),
    FlexContainerLayout = require('./layouts/shared/FlexContainerLayout'),
    HeaderLayout = require('./layouts/header/HeaderLayout');

class SearchPage extends React.Component {

  getProductImage(product) {
    if(typeof(product.images) === 'undefined' )
      return 'http://www.lsa-conso.fr/mediatheque/2/5/4/000160452_74.jpg';
    return(product.images[0].imagesUrls.entry[1].url);
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
          <a href={url}>{filterValue.label} ({filterValue.productsCount})</a>
        </li>
      )
    }.bind(this))
  }

  getFilters() {
      
    let filters = this.props.filters;
     
    return filters.map(function(filter) {
      return (
        <ul key={filter.name}>
          <li>
            <b>{filter.name}</b>
            <ul>{this.getSubFilters(filter.key, filter.filterValues)}</ul>
          </li>
        </ul>
      )
    }.bind(this))
  }

  getCategories() {
      
    let cats = this.props.cats;

    if(Object.keys(cats).length === 0) {
      return;
    }

    return (
        <ul>
          <li><b>CATEGORIES</b></li>
          {cats.map(function(cat) {
            let url = this.getTargetUrl('category', cat.name);
            return <li key={cat.name}><a href={url}>{cat.label} ({cat.productsCount})</a></li>;
          }.bind(this))}
        </ul>
    )
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

          {this.getCategories()}


          <br/>


          {this.getFilters()}

          <br/>

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
