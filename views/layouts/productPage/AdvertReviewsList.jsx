var React = require('react'),
    AdvertReviewsListItem = require('./AdvertReviewsListItem');

class AdvertReviewsList extends React.Component {

  render() {

    return (
      <ul className ="reviewsList">
        {this.props.reviews.map(function(review) {

          return (
            <AdvertReviewsListItem key={review.id} review={review}/>
          )

        }.bind(this))}
      </ul>
    );
  }
}

module.exports = AdvertReviewsList;
