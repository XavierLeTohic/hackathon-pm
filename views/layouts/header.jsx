var React = require('react');

var HeaderLayout = React.createClass({

    render: function() {

        return (
            <header>
                <h1>RES JS</h1>
                {this.props.children}
            </header>
        );
    }
});

module.exports = HeaderLayout;