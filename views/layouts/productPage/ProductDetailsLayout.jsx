var React = require('react'),
    Media = require('../shared/Media'),
    Img = require('../shared/Img'),
    TextBlock = require('../shared/TextBlock'),
    TabsList = require('../shared/TabsList'),
    BoxLayout = require('../shared/BoxLayout');
	
class ProductDetailsLayout extends React.Component {

    

    render() {
        var tabsList = [
            { 'key': 1, 'name': 'Donner votre avis', 'url': '#', 'type': 'reviews' },
            { 'key': 2, 'name': 'Descriptif détaillé', 'url': '#' },
            { 'key': 3, 'name': 'Vendre', 'url': '#', 'type': 'btn' }
        ];

        return (
            <BoxLayout>
              <Media>
                <Img src="medias/icons/piece.png"/>
                <TextBlock>
                  <h1>Lazaretto - Ultra LP (180G)[180G]</h1>
                  <p>Vinyle</p>
                </TextBlock>
              </Media>
              <TabsList tabsList={tabsList} nameClass="inlineTabs">

              </TabsList>
              {this.props.children}
            </BoxLayout>
        );
    }
}

module.exports = ProductDetailsLayout;