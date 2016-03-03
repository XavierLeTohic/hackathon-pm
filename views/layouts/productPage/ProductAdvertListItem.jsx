var React = require('react'),
    Img = require('../shared/Img'),
    Media = require('../shared/Media'),
    Img = require('../shared/Img'),
    TextBlock = require('../shared/TextBlock'),
    Price = require('../shared/Price');

class ProductAdvertListItem extends React.Component {

  render() {

    let advert = this.props.advert,
        advertId = advert.advertId;

    return (
      <li>
        <a href="#">
          <Media nameClass="advertItem">
             <Img src="../medias/icons/avatar.png"/>
            <TextBlock>
              <Price value={advert.salePrice} quality={advert.quality} />
              <p>
                <span className="shippingAmount">{ (advert.shippingAmount > 0 ? advert.shippingAmount + ' € de frais de port' : 'Livraison gratuite' ) }</span>
              </p>
            </TextBlock>
          </Media>
        </a>
      </li>
    );
  }
}

module.exports = ProductAdvertListItem;
