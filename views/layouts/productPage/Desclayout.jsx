var React = require('react');

class DescLayout extends React.Component {

  createMarkup(html) {

    return {__html: html};
  }

  getProductDescription() {

    return (
      <p dangerouslySetInnerHTML={this.createMarkup(this.props.product.description)}></p>
    )
  }

  render() {

    return (
      <div className="descBlock" id={this.props.id}>
        <h1>Edito et titre</h1>
        {this.getProductDescription()}
      </div>
    );
  }
}

module.exports = DescLayout;
