var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    HeaderLayout = require('./layouts/header/HeaderLayout');
    Media = require('./layouts/shared/Media'),
    Img = require('./layouts/shared/Img'),
    TextBlock = require('./layouts/shared/TextBlock');

class IndexPage extends React.Component {

    render() {

        return (
            <DefaultLayout title={this.props.title}>
                <HeaderLayout>
                    <div>Hello {this.props.name} <br />This header is generated on server-side with React engine of Express</div>
                </HeaderLayout>

                <section id="IndexPage" ></section>

                <Media>
                  <Img src="medias/icons/piece.png" type="link" href="#"/>
                  <TextBlock>
                    <h4>
                      test
                    </h4>
                  </TextBlock>
                </Media>

                <Media>
                  <Img src="medias/icons/piece.png"/>
                  <TextBlock>
                    <h4>
                      test
                    </h4>
                  </TextBlock>
                </Media>
            </DefaultLayout>
        );
    }
}

module.exports = IndexPage;