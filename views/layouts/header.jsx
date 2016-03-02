var React = require('react'),
	SearchBarLayout = require('./searchBar'),
    FlexContainerLayout = require('./flexContainer'),
    ImgBtnLayout = require('./imgBtn');

var HeaderLayout = React.createClass({

    render: function() {

        return (
            <header className="box">
                <FlexContainerLayout nameClass="headerFirstBar">
                    <h1><a href="#"><img src="medias/logo_pm.png" alt="Rakuten Group Priceminister" /></a></h1>
                    <ImgBtnLayout name="Panier" icon="cart "></ImgBtnLayout>
                    <ImgBtnLayout name="Connexion" icon="login"></ImgBtnLayout>
                    <SearchBarLayout ></SearchBarLayout>
                </FlexContainerLayout>
                {this.props.children}
            </header>
        );
    }
});

module.exports = HeaderLayout;

