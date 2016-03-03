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

    render() {

        return (
            <BoxLayout nameClass="buybox">
            		<FlexContainerLayout nameClass="productCard">
            			<Img src="medias/iphone.jpg" nameClass="imgProduct"></Img>
            			<div className="infosProduct">
            				<FlexContainerLayout >
            					<Price>
            					</Price>
            					<ButtonLayout href="#" className="btn btn-primary">Ajouter au panier
            					</ButtonLayout>
            				</FlexContainerLayout>
            				<SellerComment>
            				</SellerComment>
            			</div>
            		</FlexContainerLayout>
            		<SellerInfos nameClass="productCard" >

            		</SellerInfos>

               	{this.props.children}
            </BoxLayout>
        );
    }
};

module.exports = ProductBuyboxLayout;
