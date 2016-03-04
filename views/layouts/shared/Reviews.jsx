
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
        <span><a id={this.props.id} href={this.props.url} className="avis" data-modal={this.props.dataModal}>{this.props.nbReviews > 0 ? this.props.nbReviews + ' avis' : 'Donnez votre avis'}</a></span>
      </div>
    )
  }
}

module.exports = Reviews;



