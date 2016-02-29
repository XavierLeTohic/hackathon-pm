var React = require('react');

var DefaultLayout = React.createClass({

    render: function() {

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="css/index.css"/>
                    <link rel="stylesheet" href="css/header.css"/>
                    <script src="react/react.js"></script>
                    <script src="react/react-dom.js"></script>
                </head>
                <body>
                    {this.props.children}

                    <script type="text/javascript" src="js/index.js"></script>
                </body>
            </html>
        );
    }
});

module.exports = DefaultLayout;