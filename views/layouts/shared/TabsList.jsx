var React = require('react'),
		Tab = require('../shared/Tab');

class TabsList extends React.Component {

		render() {
				return (
					<ul>
						{this.props.tabList.map(function(tab) {
							 return (
									 <Tab url={tab.url} name={tab.name} />
							 );
						})}
					</ul>
				);
		}
};

module.exports = TabsList;