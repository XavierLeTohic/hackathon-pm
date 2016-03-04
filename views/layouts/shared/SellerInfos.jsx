
var React = require('react'),
	 	FlexContainerLayout = require('../shared/FlexContainerLayout'),
	 	Media = require('../shared/Media'),
	 	Img = require('../shared/Img'),
	 	ImgBtnLayout = require('../shared/ImgBtnLayout'),
	 	TextBlock = require('../shared/TextBlock');

class SellerInfos extends React.Component {

    getSellerType() {

      let type = this.props.seller.type;

      if(type === 'PRO') {

        return(
          <p className="sellerType">Vendeur Professionnel</p>
        )
      }
      else if(type === 'INDIVIDUAL') {

        return (
          <p className="sellerType">Particulier</p>
        )
      }
    }

    render() {

      let seller = this.props.seller;

      return (
        <FlexContainerLayout className={this.props.nameClass}>
          <div className="seller">
            <Media>
              <Img src="../medias/icons/avatar.png"/>
              <TextBlock>
                <p className="sellerId">{seller.login}</p>
                {this.getSellerType()}
              </TextBlock>
            </Media>
          </div>
          <ImgBtnLayout>
          </ImgBtnLayout>


        </FlexContainerLayout>
      );
    }
};

module.exports = SellerInfos;
