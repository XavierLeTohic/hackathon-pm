var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    HeaderLayout = require('./layouts/header/HeaderLayout');

var ProductPage = React.createClass({

    render: function() {

        return (
            <DefaultLayout title={this.props.title}>
                <HeaderLayout>
                    <div>Hello {this.props.name} <br />This header is generated on server-side with React engine of Express</div>
                </HeaderLayout>
                <section id="prdPage" >
                    <ProductDetailsLayout>
        
                    </ProductDetailsLayout>
                </section>
            </DefaultLayout>
        );
    }
});

module.exports = ProductPage;