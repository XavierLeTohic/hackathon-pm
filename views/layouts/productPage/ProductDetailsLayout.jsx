var React = require('react'),
    Media = require('../shared/Media'),
    Img = require('../shared/Img'),
    TextBlock = require('../shared/TextBlock'),
    BoxLayout = require('../shared/BoxLayout');
	
class ProductDetailsLayout extends React.Component {

    render() {

        return (
            <BoxLayout>
              <Media>
                <Img src="medias/icons/piece.png"/>
                <TextBlock>
                  <h1>Lazaretto - Ultra LP (180G)[180G]</h1>
                  <p>Vinyle</p>
                </TextBlock>
              </Media>
              {this.props.children}
            </BoxLayout>
        );
    }
}

module.exports = ProductDetailsLayout;