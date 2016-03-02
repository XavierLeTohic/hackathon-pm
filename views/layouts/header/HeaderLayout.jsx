var React = require('react'),
	SearchBarLayout = require('../header/SearchBarLayout'),
    FlexContainerLayout = require('../shared/FlexContainerLayout'),
    ImgBtnLayout = require('../shared/ImgBtnLayout');

var HeaderLayout = React.createClass({

    render: function() {

        return (
            <header className="box">
                <FlexContainerLayout nameClass="headerFirstBar">
                    <h1><a href="#"><img src="medias/logo_pm.png" alt="Rakuten Group Priceminister" /></a></h1>
                    <ImgBtnLayout name="Panier" icon="cart imgBtn-header"></ImgBtnLayout>
                    <ImgBtnLayout name="Connexion" icon="login imgBtn-header"></ImgBtnLayout>
                    <SearchBarLayout ></SearchBarLayout>
                </FlexContainerLayout>
                {this.props.children}
            </header>
        );
    }
});

module.exports = HeaderLayout;

