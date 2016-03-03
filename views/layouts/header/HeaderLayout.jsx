var React = require('react'),
	SearchBarLayout = require('../header/SearchBarLayout'),
    FlexContainerLayout = require('../shared/FlexContainerLayout'),
    BoxLayout = require('../shared/BoxLayout'),
    ImgBtnLayout = require('../shared/ImgBtnLayout');

class HeaderLayout extends React.Component {

    render() {

        return (
            <BoxLayout element="header">
                <FlexContainerLayout nameClass="headerFirstBar">
                    <h1><a href="#"><img src="../medias/logo_pm.png" alt="Rakuten Group Priceminister" /></a></h1>
                    <ImgBtnLayout name="Panier" icon="cart imgBtn-header"></ImgBtnLayout>
                    <ImgBtnLayout name="Connexion" icon="login imgBtn-header"></ImgBtnLayout>
                    <SearchBarLayout kw={this.props.kw}></SearchBarLayout>
                </FlexContainerLayout>
                {this.props.children}
            </BoxLayout>
        );
    }
};

module.exports = HeaderLayout;

