
var React = require('react'),
	 	FlexContainerLayout = require('../shared/FlexContainerLayout'),
	 	Media = require('../shared/Media'),
	 	Img = require('../shared/Img'),
	 	ImgBtnLayout = require('../shared/ImgBtnLayout'),
	 	TextBlock = require('../shared/TextBlock');

class SellerInfos extends React.Component {

    render() {

        return (
        	<FlexContainerLayout className={this.props.nameClass}>
        		<div className="seller">
		        	<Media>
		        	  <Img src="medias/icons/piece.png"/>
		        	  <TextBlock>
		        	    <p>Jean-Marie</p>
		        	    <p>Nouveau vendeur</p>
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