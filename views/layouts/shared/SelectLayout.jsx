var React = require('react');

class SelectLayout extends React.Component {

		constructor(props){
			super(props);
			this.state = {selectValue: this.props.defaultValue}
		}

		_onChange(event, item) {
			console.log("test");
			this.setState({
				selectValue: this.props.options[event.target.selectedIndex].label
			});
			this.props.onChange(event.target.label);
		}

		render() {
			let selectValue = this.state.selectValue;
			var options = this.props.options.map(function(item) {
				if (selectValue === item.label) {
					return <option selected value = {item.label} key={item.label}> {item.label} < /option>;
				} else {
					return <option value = { item.label}  key={item.label}> { item.label} < /option>;
				}

			})

			return (
				<div className = "custom-select">
					<div className = "custom-select-value" > Etats : </div> 
					<select name={this.props.name || ''} id={this.props.id || (this.props.name || '')} onChange = {this._onChange}> 
						{options} 
					</select> 
				</div >
				
			)
		}
};
SelectLayout.propTypes = {selectValue: React.PropTypes.string};
SelectLayout.defaultProps = {selectValue: "Select Me"};
module.exports = SelectLayout;