var React = require('react'),
    Media = require('../shared/Media.jsx'),
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

    return (
      <li className="reviewsItem">

        <div className="customerProfile">
          <Media>
            <Img />
          </Media>
        </div>

        <div className="customerMessage">

        </div>
      </li>
    );
  }
}

module.exports = AdvertReviewsListItem;
