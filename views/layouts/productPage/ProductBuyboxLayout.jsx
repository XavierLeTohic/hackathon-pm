var React = require('react'),
		Price = require('../shared/Price'),
		FlexContainerLayout = require('../shared/FlexContainerLayout'),
		Media = require('../shared/Media'),
		Img = require('../shared/Img'),
		TextBlock = require('../shared/TextBlock'),
		ButtonLayout = require('../shared/ButtonLayout'),
		SellerComment = require('../shared/SellerComment'),
		SellerInfos = require('../shared/SellerInfos'),
    BoxLayout = require('../shared/BoxLayout');

class ProductBuyboxLayout extends React.Component {

    getBuyboxImage() {

      let buybox = (this.props.buybox.new !== 'undefined' ? this.props.buybox.new.adverts[0] : this.props.buybox.used.adverts[0]);

      if(buybox.imagesUrls.length > 0) {

        return(
          <Img src={buybox.imagesUrls[0]} nameClass="imgProduct" />
        )
      }
      else {
        return(
          <Img src={this.props.productImage} nameClass="imgProduct" />
        )
      }
    }

    getSellerComment() {
        let buybox = (this.props.buybox.new !== 'undefined' ? this.props.buybox.new.adverts[0] : this.props.buybox.used.adverts[0]);

        if(buybox.sellerComment) {
            return (<SellerComment value={buybox.sellerComment} />)
        }

    }

    render() {

      let buybox = (this.props.buybox.new !== 'undefined' ? this.props.buybox.new.adverts[0] : this.props.buybox.used.adverts[0]);
      let shippingInfo = {
        shippingTypes: buybox.shippingTypes,
        availableShippingTypes: buybox.availableShippingTypes,
        shippingAmount: buybox.shippingAmount,
        isPickupAllowed: buybox.isPickupAllowed,
        pickupDistance: buybox.pickupDistance,
        isAdvertInCircleRange: buybox.isAdvertInCircleRange
      };

      return (
        <BoxLayout nameClass="buybox">
            <FlexContainerLayout nameClass="productCard">
              {this.getBuyboxImage()}
              <div className="infosProduct">
                <FlexContainerLayout >
                  <Price value={buybox.salePrice} quality={buybox.quality}>
                  </Price>
                  <ButtonLayout href="#" className="btn btn-primary">Ajouter au panier
                  </ButtonLayout>
                </FlexContainerLayout>

                {this.getSellerComment()}

              </div>
            </FlexContainerLayout>
            <SellerInfos nameClass="productCard" seller={buybox.seller}>
            </SellerInfos>

            {this.props.children}
        </BoxLayout>
      );
    }
}

module.exports = ProductBuyboxLayout;
