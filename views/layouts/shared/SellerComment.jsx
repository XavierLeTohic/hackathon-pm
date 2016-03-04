
var React = require('react');

class SellerComment extends React.Component {



    render() {

        return (
        	<div className="sellerComment" id={this.props.id}>
        		<p className="label">Commentaire vendeur</p>
        		<p id="prdBuyboxSellerComment">{this.props.value}</p>
        	</div>

        );
    }
};

module.exports = SellerComment;
