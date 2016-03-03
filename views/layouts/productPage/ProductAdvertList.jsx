var React = require('react'),
    ProductAdvertListItem = require('../productPage/ProductAdvertListItem');

class ProductAdvertList extends React.Component {

  render() {
    console.log(this.props.urlName);
    let adverts = this.props.adverts;

    return (
      <ul>
        {adverts.map(function(advert) {

          return (
            <ProductAdvertListItem key={advert.advertId} advert={advert} ></ProductAdvertListItem>
          )

        }.bind(this))}
      </ul>
    );
  }
}

module.exports = ProductAdvertList;
