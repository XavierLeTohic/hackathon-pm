var React = require('react'),
		Tab = require('../shared/Tab');

class TabsList extends React.Component {

		render() {
				return (
					<ul className={this.props.className}>
						{this.props.tabsList.map(function(tab) {
							 return (
									 <Tab key={tab.key} type={tab.type} url={tab.url} name={tab.name} params={tab.params}/>
							 );
						})}
					</ul>
				);
		}
};

module.exports = TabsList;
