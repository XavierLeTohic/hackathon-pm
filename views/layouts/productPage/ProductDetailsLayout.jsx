var React = require('react'),
    BoxLayout = require('../shared/BoxLayout');
	
class ProductDetailsLayout extends React.Component {

    render() {

        return (
            <BoxLayout>
              {this.props.children}
            </BoxLayout>
        );
    }
};

module.exports = ProductDetailsLayout;