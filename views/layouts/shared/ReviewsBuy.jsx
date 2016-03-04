var React = require('react');

class ReviewsBuy extends React.Component {
  render () {
    let widthStars = this.props.note*10*2;
    let percent = widthStars.toString() + '%';
    let starsStyle ={
      width : percent
    };
    return (
      <div className ="rating">
        <span className="grade">
          <span className="stars" style={ starsStyle }></span>
          <span property="ratingValue">{this.props.note}</span>
        </span>
      </div>
    )
  }
}

module.exports = ReviewsBuy;
