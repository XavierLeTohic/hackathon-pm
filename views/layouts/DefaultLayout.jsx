var React = require('react');

class DefaultLayout extends React.Component {

    render() {

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="../css/styles.css"/>
                    <script src="../react/react.js"></script>
                    <script src="../react/react-dom.js"></script>
                </head>
                <body>
                    <div className="siteBody">
                        {this.props.children}
                    </div>
                    <script type="text/javascript" src="../js/index.js"></script>
                    <script type="text/javascript" src="../js/ProductPageClient.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;
