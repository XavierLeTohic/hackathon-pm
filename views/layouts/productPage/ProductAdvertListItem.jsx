var React = require('react'),
    Img = require('../shared/Img'),
    Price = require('../shared/Price');

class ProductAdvertListItem extends React.Component {

  render() {

    let advert = this.props.advert,
        advertId = advert.advertId;

    return (
      <li>
        <a href="#">
          <Img src="../medias/icons/piece.png"/>
          <Price value={advert.salePrice} quality={advert.quality} />
          <p>
            <span>{ (advert.shippingAmount > 0 ? advert.shippingAmount + ' €' : 'Livraison gratuite' ) }</span>
          </p>
        </a>
      </li>
    );
  }
}

module.exports = ProductAdvertListItem;
