var React = require('react'),
    BoxLayout = require('../shared/BoxLayout'),
    FlexContainerLayout = require('../shared/FlexContainerLayout'),
    Media = require('../shared/Media'),
    Img = require('../shared/Img'),
    TextBlock = require('../shared/TextBlock'),
    TabsList = require('../shared/TabsList');
	
class ProductDetailsLayout extends React.Component {

    render() {
      var tabList = [
          { 'key': 1, 'name': 'Donner votre avis', 'url': '#', 'type':'reviews' },
          { 'key': 2, 'name': 'Descriptif détaillé', 'url': '#' },
          { 'key': 3, 'name': 'Vendre', 'url': '/raph', 'type': 'btn' }
      ]
        return (
            <BoxLayout>
              <Media>
                <Img src="medias/icons/piece.png"/>
                <TextBlock>
                  <h1>Lazaretto - Ultra LP (180G)[180G]</h1>
                  <p>Vinyle</p>
                </TextBlock>
              </Media>
              <FlexContainerLayout>
                <TabsList tabList ={tabList}>

                </TabsList>
              </FlexContainerLayout>
              {this.props.children}
            </BoxLayout>
        );
    }
}

module.exports = ProductDetailsLayout;