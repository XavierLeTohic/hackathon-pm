var React = require('react');

class Price extends React.Component {

  getQuality() {

    if(this.props.quality === 'NEW') {

      return(
        <p className="state">Neuf</p>
      )
    }
    else if(this.props.quality === 'LIKE_NEW') {

      return (
        <p className="state">Comme neuf</p>
      )
    }
    else if(this.props.quality === 'VERY_GOOD') {

      return (
        <p className="state">Très bon état</p>
      )
    }
    else if(this.props.quality === 'GOOD') {

      return (
        <p className="state">Bon état</p>
      )
    }
    else if(this.props.quality === 'ACCEPTABLE') {

      return (
        <p className="state">Correct</p>
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
}

module.exports = Price;
