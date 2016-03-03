var React = require('react');

class Price extends React.Component {

  getQuality() {

    if(this.props.quality === 'NEW') {

      return(
        <p>Neuf</p>
      )
    }
    else if(this.props.quality === 'GOOD') {

      return (
        <p>Comme Neuf</p>
      )
    }
    else if(this.props.quality === 'ACCEPTABLE') {

      return (
        <p>Occasion</p>
      )
    }
  }

  render() {

    return (
      <div className="priceBlock">
        <p className="price">{this.props.value} €</p>
        {this.getQuality()}
      </div>
    )
  }
};

module.exports = Price;
