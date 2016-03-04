var React = require('react');

class DescLayout extends React.Component {

  render () {

    return (
      <div >
        <h1>Edito et titre</h1>
        <p>{this.props.product.description}</p>
      </div>
    );
  }
}

module.exports = DescLayout;
