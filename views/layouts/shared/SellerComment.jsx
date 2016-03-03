
var React = require('react');

class SellerComment extends React.Component {



    render() {

        return (
        	<div className="sellerComment">
        		<p className="label">Commentaire vendeur</p>
        		<p>{this.props.value}</p>
        	</div>

        );
    }
};

module.exports = SellerComment;
