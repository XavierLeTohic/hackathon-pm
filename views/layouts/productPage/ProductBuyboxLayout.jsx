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

      let buybox = this.getAdvertBuyBox(this.props.buybox),
          url = (buybox.imagesUrls.length > 0  ? buybox.imagesUrls[0] : this.props.productImage),
          computedUrl = (url.indexOf('.gif') !== -1 ?  url.split('_')[0].replace(".jpg", "") + "_600_600.jpg": url);

      console.log(computedUrl);

      return(
        <Img id="prdBuyboxImg" src={computedUrl} nameClass="imgProduct" />
      )
    }

    getAdvertBuyBox(buybox) {
      return (typeof buybox.new !== 'undefined' ? buybox.new.adverts[0] : buybox.used.adverts[0]);
    }

    getSellerComment() {
      let buybox = this.getAdvertBuyBox(this.props.buybox);

      if(buybox.sellerComment) {
        return (<SellerComment id="prdBuyboxSellerCommentBlock" value={buybox.sellerComment} />)
      }

    }

    render() {

      let buybox = this.getAdvertBuyBox(this.props.buybox);
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
                  <Price value={buybox.salePrice} quality={buybox.quality} id="prdBuyboxPrice">
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
