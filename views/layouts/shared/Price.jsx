var React = require('react');

class Price extends React.Component {

  getQuality() {

    if(this.props.quality === 'NEW') {

      return(
        <p className="state" id={ (this.props.id === 'prdBuyboxPrice' ? 'prdBuyboxQuality' : 'qualityValue' ) }>Neuf</p>
      )
    }
    else if(this.props.quality === 'LIKE_NEW') {

      return (
        <p className="state" id={ (this.props.id === 'prdBuyboxPrice' ? 'prdBuyboxQuality' : 'qualityValue' ) }>Comme neuf</p>
      )
    }
    else if(this.props.quality === 'VERY_GOOD') {

      return (
        <p className="state" id={ (this.props.id === 'prdBuyboxPrice' ? 'prdBuyboxQuality' : 'qualityValue' ) }>Très bon état</p>
      )
    }
    else if(this.props.quality === 'GOOD') {

      return (
        <p className="state" id={ (this.props.id === 'prdBuyboxPrice' ? 'prdBuyboxQuality' : 'qualityValue' ) }>Bon état</p>
      )
    }
    else if(this.props.quality === 'ACCEPTABLE') {

      return (
        <p className="state" id={ (this.props.id === 'prdBuyboxPrice' ? 'prdBuyboxQuality' : 'qualityValue' ) }>Correct</p>
      )
    }
  }

  render() {

    return (
      <div className="priceBlock">
        <p className="price" id={ (this.props.id === 'prdBuyboxPrice' ? 'prdBuyboxPriceValue' : 'priceValue' ) }>{this.props.value}&nbsp;€&nbsp;-&nbsp;</p>
        {this.getQuality()}
      </div>
    )
  }
}

module.exports = Price;
