var React = require('react'),
    moment = require('moment'),
    Media = require('../shared/Media.jsx'),
    TextBlock = require('../shared/TextBlock.jsx'),
    ReviewsBuy = require('../shared/ReviewsBuy.jsx'),
    Img = require('../shared/Img.jsx');

class AdvertReviewsListItem extends React.Component {

  render() {

    var exemple = {
      "note": 5,
      "title": "bien",
      "author": {
        "login": "jeanp90",
        "isPreOrderGrant": false,
        "userFirstAdvertTrackingDate": null,
        "isUserBuyer": false,
        "userBirthDate": 0,
        "creationDate": null,
        "lastLoginDate": null
      },
      "date": 1456403796000,
      "description": "c'était pour mon fils très heureux du jeu,passe de bonne soirée avec ses copains"
    };

    moment.locale('fr');
    var date = moment(this.props.review.date).startOf('day').fromNow();

    return (
      <li className="reviewsItem">

        <div className="customerProfile">
          <Media>
            <Img src="../medias/icons/avatar.png"/>
            <TextBlock>
              <p>{this.props.review.author.login}</p>
              <ReviewsBuy note={this.props.review.note}>

              </ReviewsBuy>

            </TextBlock>
          </Media>
        </div>

        <div className="customerMessage">
            <h2 className="reviewTitle">{this.props.review.title}</h2>
            <p>{this.props.review.description}</p>
            <p className="date">Publié {date}</p>
        </div>
      </li>
    );
  }
}

module.exports = AdvertReviewsListItem;
