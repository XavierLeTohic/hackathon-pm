var React = require('react'),
		TabsList = require('../shared/TabsList'),
		FlexContainerLayout = require('../shared/FlexContainerLayout'),
    BoxLayout = require('../shared/BoxLayout');
	
class AdvertListingLayout extends React.Component {

    render() {
    		var tabsList = [
    		    { 'key': 1, 'name': 'annonce', 'url': '#', 'type': 'advert' },
    		    { 'key': 2, 'name': 'annonce', 'url': '#', 'type': 'advert' },
    		    { 'key': 3, 'name': 'annonce', 'url': '#', 'type': 'advert' }
    		];

        return (
            <BoxLayout nameClass="listing">
            		<FlexContainerLayout type="header" nameClass="listing-header">
            			<p className="label"> 3 annonces</p>
            			<a href="#">Filter</a>
            		</FlexContainerLayout>
            		<TabsList tabsList={tabsList} nameClass="blockTabs">

            		</TabsList>
                {this.props.children}
            </BoxLayout>
        );
    }
};

module.exports = AdvertListingLayout;