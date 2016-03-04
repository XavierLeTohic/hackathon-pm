var React = require('react'),
    Img = require('../shared/Img'),
    Media = require('../shared/Media'),
    Img = require('../shared/Img'),
    TextBlock = require('../shared/TextBlock'),
    Price = require('../shared/Price');

class ProductAdvertListItem extends React.Component {


  getClassName(adv) {

    if(typeof adv.selected !== 'undefined' && adv.selected === true) {

      return(
        "advertListItem selected"
      )
    }
    else {

      return(
        "advertListItem"
      )
    }
  }

  render() {

    let advert = this.props.advert,
        advertId = advert.advertId;

    return (
      <li data-advert data-json={JSON.stringify(advert)} className={this.getClassName(advert)}>
        <Media nameClass="advertItem">
           <Img src="../medias/icons/avatar.png"/>
          <TextBlock>
            <Price value={advert.salePrice} quality={advert.quality} />
            <p>
              <span className="shippingAmount">{ (advert.shippingAmount > 0 ? advert.shippingAmount + ' € de frais de port' : 'Livraison gratuite' ) }</span>
            </p>
          </TextBlock>
        </Media>
      </li>
    );
  }
}

module.exports = ProductAdvertListItem;
