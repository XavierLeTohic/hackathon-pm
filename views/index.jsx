var React = require('react'),
    DefaultLayout = require('./layouts/default'),
    HeaderLayout = require('./header/layouts/header');

var IndexPage = React.createClass({

    render: function() {

        return (
            <DefaultLayout title={this.props.title}>
                <HeaderLayout>
                    <div>Hello {this.props.name} <br />This header is generated on server-side with React engine of Express</div>
                </HeaderLayout>

                <section id="IndexPage" ></section>
            </DefaultLayout>
        );
    }
});

module.exports = IndexPage;