var React = require('react');

class Tab extends React.Component {

		render() {
				return (
					<li key={this.props.key} ><a href={this.props.url}>{this.props.name}</a></li>
				);
		}
};

module.exports = Tab;