
var React = require('react');

class Reviews extends React.Component {
  render () {
  	let widthStars = this.props.reviewsAverageNote*10*2;
  	let percent = widthStars.toString() + '%';
  	let starsStyle ={
  		width : percent
  	};
    return (
      <div className ="rating">
        <span className="grade">
          <span className="stars" style={ starsStyle }></span>
          <span property="ratingValue">{this.props.reviewsAverageNote}</span>
        </span>
        <span><a href="#" className="avis">{this.props.nbReviews} Avis</a></span>
      </div>
    )
  }
}

module.exports = Reviews;