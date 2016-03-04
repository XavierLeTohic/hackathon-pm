var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    HeaderLayout = require('./layouts/header/HeaderLayout'),
    Media = require('./layouts/shared/Media'),
    BoxLayout = require('./layouts/shared/BoxLayout'),
    Img = require('./layouts/shared/Img'),
    TextBlock = require('./layouts/shared/TextBlock'),
    NavigationCategories = require('./layouts/SearchPage/NavigationCategories');

class IndexPage extends React.Component {

    render() {

        return (
            <DefaultLayout title={this.props.title}>
                <HeaderLayout />

                <section id="IndexPage" />


                <BoxLayout nameClass="filterSearch">
                    <NavigationCategories cats={this.props.cats} targetPageUrl="/search" />
                </BoxLayout>
            </DefaultLayout>
        );
    }
}

module.exports = IndexPage;
