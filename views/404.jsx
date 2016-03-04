var React = require('react'),
  DefaultLayout = require('./layouts/DefaultLayout'),
  HeaderLayout = require('./layouts/header/HeaderLayout'),
  Media = require('./layouts/shared/Media'),
  Img = require('./layouts/shared/Img'),
  TextBlock = require('./layouts/shared/TextBlock');

class Erreur404Page extends React.Component {

  render() {

    return (
      <DefaultLayout title={this.props.title}>
        <HeaderLayout>
        </HeaderLayout>

        <h1 style={{fontSize: '45px', textAlign: 'center', 'marginTop' : '150px'}}>Error 404<br />Olivier was not found !</h1>
      </DefaultLayout>
    );
  }
}

module.exports = Erreur404Page;
