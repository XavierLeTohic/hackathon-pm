var React = require('react');

class FlexContainerLayout extends React.Component {

		getTemplate() {
				let ctnClass = this.props.nameClass ? "flexContainer "+ this.props.nameClass : "flexContainer";
				if(this.props.element ==='ul') {
					return (
						<ul className={ctnClass}>
								{this.props.children}
						</ul>
					)
				}
				
				return (
					<div className={ctnClass}>
							{this.props.children}
					</div>
				)
				
			}

			render() {
				return (
					this.getTemplate()      
				)
			}
}

module.exports = FlexContainerLayout;