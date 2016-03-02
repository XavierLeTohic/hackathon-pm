var React = require('react'),
    BoxLayout = require('../shared/BoxLayout');
	
class ProductBuyBoxLayout extends React.Component {

    render() {

        return (
            <BoxLayout>
                {this.props.children}
            </BoxLayout>
        );
    }
};

module.exports = ProductBuyBoxLayout;