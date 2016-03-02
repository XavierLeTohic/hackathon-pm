var React = require('react');

var DefaultLayout = React.createClass({

    render: function() {

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="css/styles.css"/>
                    <script src="react/react.js"></script>
                    <script src="react/react-dom.js"></script>
                </head>
                <body>
                    <div className="siteBody"> 
                        {this.props.children}
                    </div> 
                    <script type="text/javascript" src="js/index.js"></script>
                    <script src="//localhost:35729/livereload.js"></script>
                </body>
            </html>
        );
    }
});

module.exports = DefaultLayout;