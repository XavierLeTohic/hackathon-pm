var React = require('react'),
    BoxLayout = require('../shared/BoxLayout');
	
class ProductBuyboxLayout extends React.Component {

    render() {

        return (
            <BoxLayout nameClass="buybox">
                {this.props.children}
            </BoxLayout>
        );
    }
};

module.exports = ProductBuyboxLayout;