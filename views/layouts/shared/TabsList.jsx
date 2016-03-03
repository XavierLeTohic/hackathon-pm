var React = require('react'),
		Tab = require('../shared/Tab');

class TabsList extends React.Component {

		render() {
				return (
					<ul className={this.props.nameClass}>
						{this.props.tabsList.map(function(tab) {
							 return (
									 <Tab nbReviews = {tab.nbReviews} reviewsAverageNote = {tab.reviewsAverageNote} key={tab.key} type={tab.type} url={tab.url} name={tab.name} params={tab.params}/>
							 );
						})}
					</ul>
				);
		}
};

module.exports = TabsList;
